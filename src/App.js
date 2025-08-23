import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page1 from "./pages/000";
import Page2 from "./pages/002";
import Page3 from "./pages/504";
import Page4 from "./pages/005";
import Page5 from "./pages/012";
import Page6 from "./pages/013";




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
            </Routes>
        </Router>
    );
}

export default App;