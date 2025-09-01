import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LeftBracket from "../assets/Rectangle 2710.webp";
import RightBracket from "../assets/Rectangle 2711.webp";
import TakePictureIcon from "../assets/takePictureIcon.webp";

/**
 * Camera component
 * - Requests webcam access (front/selfie camera when available)
 * - Streams video to a <video> element
 * - Captures a still frame to a hidden <canvas> when TAKE PICTURE is clicked
 * - Lets user Retake or Use Photo; on Use Photo it uploads as JSON (base64) then routes
 */
const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const [photoDataUrl, setPhotoDataUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const navigate = useNavigate();

  const API_URL =
    "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const startCamera = async () => {
      setErrorMsg("");
      try {
        const constraints = {
          video: {
            facingMode: { ideal: "user" },
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
          audio: false,
        };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          // iOS Safari needs video to be muted to autoplay
          videoRef.current.muted = true;
          await videoRef.current.play().catch(() => {});
        }
      } catch (err) {
        console.error("getUserMedia error:", err);
        setErrorMsg(
          (err && err.message) ||
            "Could not access the camera. Please allow permission or try a different browser/device."
        );
      }
    };

    startCamera();

    return () => {
      // Stop all tracks on unmount to release the camera
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    const width = video.videoWidth || 1280;
    const height = video.videoHeight || 720;

    // Ensure canvas matches the video dimensions
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");

    // Optional: mirror the image so it matches the user's expectation (selfie view)
    ctx.save();
    ctx.translate(width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, width, height);
    ctx.restore();

    const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
    setPhotoDataUrl(dataUrl);
  };

  const handleRetake = () => {
    setUploadError("");
    setPhotoDataUrl("");
  };

  // ---- Upload as JSON (base64) ----
  async function postJsonImage(dataUrl) {
    // strip "data:image/...;base64," to send raw base64 (most Cloud Functions expect this)
    const base64 = dataUrl.split(",")[1] ?? dataUrl;

    const payload = { image: base64 };
    const name = localStorage.getItem("name");
    if (name) payload.name = name; // optional if your API uses it

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch {
      json = null;
    }

    if (!res.ok || json?.success === false) {
      // If your backend expects the full data URL instead, uncomment the next block and try again.
      // throw new Error(json?.message || text || `Upload failed (${res.status})`);
      throw new Error(json?.message || text || `Upload failed (${res.status})`);
    }
  }

  const handleUsePhoto = async () => {
    if (!photoDataUrl) return;
    setIsUploading(true);
    setUploadError("");

    try {
      await postJsonImage(photoDataUrl);

      // Make the image available to /prepanalysis
      sessionStorage.setItem("uploadedImageDataUrl", photoDataUrl);

      // Route to pre-analysis; that page will handle 3s wait + OK + /demographics
      navigate("/prepanalysis", { state: { previewImage: photoDataUrl } });
    } catch (e) {
      console.error(e);
      setUploadError(e.message || "Upload failed.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="main__intro__page">
      <div className="nav__row">
        <div className="navbar__left">
          <Link className="navbar__left--name" to="/">SKINSTRIC</Link>
          <img className="navbar__left--img" src={LeftBracket} alt="" />
          <p className="navbar__left--page-name">INTRO</p>
          <img className="navbar__left--img" src={RightBracket} alt="" />
        </div>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors disabled:pointer-events-none text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 mx-4 scale-[0.8] text-[#FCFCFC] text-[10px] bg-[#1A1B1C] leading-[16px]">
          ENTER CODE
        </button>
      </div>

      <div className="h-[90vh] w-screen">
        <div className="relative h-[92vh] w-screen overflow-hidden bg-gray-900">
          {/* Video layer */}
          <div className="absolute inset-0 z-10">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* UI: Take Picture button */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex items-center space-x-3">
              <div className="font-semibold text-sm tracking-tight leading-[14px] text-[#FCFCFC] hidden sm:block">
                TAKE PICTURE
              </div>
              <button
                type="button"
                aria-label="Take picture"
                onClick={handleCapture}
                className="transform hover:scale-105 ease-in-out duration-300 focus:outline-none"
              >
                <img
                  alt="Take Picture"
                  loading="lazy"
                  width={60}
                  height={60}
                  decoding="async"
                  className="w-16 h-16 cursor-pointer"
                  style={{ color: "transparent" }}
                  src={TakePictureIcon}
                />
              </button>
            </div>

            {/* Tips */}
            <div className="absolute bottom-30 sm:bottom-40 left-0 right-0 text-center z-20">
              <p className="text-sm mb-2 font-normal leading-6 text-[#FCFCFC]">
                TO GET BETTER RESULTS MAKE SURE TO HAVE
              </p>
              <div className="flex justify-center space-x-8 text-xs leading-6 text-[#FCFCFC]">
                <p>◇ NEUTRAL EXPRESSION</p>
                <p>◇ FRONTAL POSE</p>
                <p>◇ ADEQUATE LIGHTING</p>
              </div>
            </div>
          </div>

          {/* Back button */}
          <div className="absolute md:bottom-8 bottom-60 left-8 z-20">
            <a href="/image">
              <div>
                <div className="relative w-12 h-12 flex items-center justify-center border border-[#FCFCFC] rotate-45 scale-[1] sm:hidden">
                  <span className="rotate-[-45deg] text-xs font-semibold sm:hidden text-[#FCFCFC]">
                    BACK
                  </span>
                </div>
                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                  <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#FCFCFC] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
                  <span className="absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 hidden sm:block text-[#FCFCFC] group-hover:scale-[0.92] ease duration-300">
                    ▶
                  </span>
                  <span className="text-sm font-semibold hidden sm:block ml-6 text-[#FCFCFC]">
                    BACK
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Hidden canvas used for capture */}
          <canvas ref={canvasRef} className="hidden" />

          {/* Error overlay */}
          {errorMsg && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 p-6">
              <div className="max-w-md text-center text-white space-y-4">
                <p className="font-semibold">{errorMsg}</p>
                <p className="text-sm opacity-80">
                  Tip: Ensure your browser has camera permissions enabled. On iOS
                  Safari, verify Settings → Safari → Camera is allowed.
                </p>
              </div>
            </div>
          )}

          {/* Photo preview overlay */}
          {photoDataUrl && (
            <div className="absolute inset-0 z-30 bg-black/80 flex flex-col items-center justify-center p-4 space-y-4">
              <img
                src={photoDataUrl}
                alt="Captured"
                className="max-h-[70vh] max-w-[90vw] object-contain rounded-xl"
              />

              {uploadError && (
                <p className="text-red-400 text-sm max-w-md text-center">{uploadError}</p>
              )}

              <div className="flex gap-3">
                <button
                  onClick={handleRetake}
                  disabled={isUploading}
                  className="px-4 py-2 rounded-2xl border border-white text-white hover:bg-white/10 disabled:opacity-50"
                >
                  Retake
                </button>
                <button
                  onClick={handleUsePhoto}
                  disabled={isUploading}
                  className="px-4 py-2 rounded-2xl bg-white text-black font-semibold hover:bg-white/90 disabled:opacity-50"
                >
                  {isUploading ? "Uploading…" : "Use Photo"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Camera;

