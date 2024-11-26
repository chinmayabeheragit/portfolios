// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// import About from './components/About';

function App() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Home />
                {/* <About/> */}
                
            </main>
            <Footer />
        </div>
    );
}

export default App;
