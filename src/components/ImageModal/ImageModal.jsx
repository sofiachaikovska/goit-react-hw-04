import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ image, isOpen, onClose }) => {
  if (!image) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={css.modalOverlay}
      className={css.modalContent}
      contentLabel="Image Modal"
    >
      <div onClick={handleOverlayClick}>
        <img
          src={image.urls.regular}
          alt={image.description || "Image"}
          className={css.imageFull}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
