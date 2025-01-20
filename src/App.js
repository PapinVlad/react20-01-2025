import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slide from "./pages/Slide";
import Animation from "./pages/Animation";


const App =()=> {
  return (
    <>
    <Router>
      <Navigation />
        <main>
          <Routes>
            <Route path="/slide" element={<Slide />} />
            <Route path="/animation" element={<Animation />} />



         </Routes>
       </main>

    </Router>
    
    
    
    
    
    </>
  )
}

export default App;
