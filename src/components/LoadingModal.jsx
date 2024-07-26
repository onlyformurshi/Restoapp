// src/components/LoadingModal.js

import React from 'react';
import './LoadingModal.css'; // Create a CSS file for styling

const LoadingModal = () => (
    <div className="loading-modal">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
    </div>
);

export default LoadingModal;
