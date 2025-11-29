import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Terms from './Terms';
import Privacy from './Privacy';
import NewsletterModal from './NewsletterModal';
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home openModal={openModal} />} />
        <Route path="/terms" element={<Terms openModal={openModal} />} />
        <Route path="/privacy" element={<Privacy openModal={openModal} />} />
      </Routes>
      <NewsletterModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
