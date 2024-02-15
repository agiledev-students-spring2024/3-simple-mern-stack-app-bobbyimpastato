

//might need to import stuff for aboutus???
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Messages from './Messages';
import MessageStandalone from './MessageStandalone';
import Home from './Home';
import AboutUs from './AboutUs'; //new
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="App-main">
          <Routes>
            {/* Route for the home page */}
            <Route path="/" element={<Home />} />

            {/* Route to see a list of all messages */}
            <Route path="/messages" element={<Messages />} />

            {/* Route for just a single message, where the id of the desired message is passed as a parameter */}
            <Route
              path="/messages/:messageId"
              element={<MessageStandalone />}
            />

            {/* Route for the "About Us" page */}
            <Route path="/about-us" element={<AboutUs />} />

          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;