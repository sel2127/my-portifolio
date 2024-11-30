import React from 'react';

const CertificationModal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default CertificationModal;
