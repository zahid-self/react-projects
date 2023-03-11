import React from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Video from './pages/Video';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
        <Layout>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/videos/:videoId' element={<Video/>}/>
            </Routes>
        </Layout>
    </Router>
  );
}

export default App;
