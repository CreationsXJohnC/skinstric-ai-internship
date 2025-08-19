import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page1 from "./pages/000";
import Page2 from "./pages/001";
import Page3 from "./pages/002";
import Page4 from "./pages/504";
import Page5 from "./pages/505";
import Page6 from "./pages/005";
import Page7 from "./pages/011";
import Page8 from "./pages/012";
import Page9 from "./pages/013";
import Page10 from "./pages/014";
import Page11 from "./pages/006";
import Page12 from "./pages/007";
import Page13 from "./pages/009";
import Page14 from "./pages/010";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
                <Route path="/page4" element={<Page4 />} />
                <Route path="/page5" element={<Page5 />} />
                <Route path="/page6" element={<Page6 />} />
                <Route path="/page7" element={<Page7 />} />
                <Route path="/page8" element={<Page8 />} />
                <Route path="/page9" element={<Page9 />} />
                <Route path="/page10" element={<Page10 />} />
                <Route path="/page11" element={<Page11 />} />
                <Route path="/page12" element={<Page12 />} />
                <Route path="/page13" element={<Page13 />} />
                <Route path="/page14" element={<Page14 />} />
            </Routes>
        </Router>
    );
}

export default App;