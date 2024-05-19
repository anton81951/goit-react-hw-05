import Modal from 'react-modal';
Modal.setAppElement("#root")

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'transparent',
    padding: 0,
  },
};

const ImageModal = ({ isOpen, imageUrl, altText, closeModal }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      contentLabel="Image Modal"
      onRequestClose={closeModal}
      onKeyDown={handleKeyDown}
      onClick={handleOverlayClick}
    >
      {imageUrl && <img src={imageUrl} alt={altText} />}
    </Modal>
  );
};

export default ImageModal;