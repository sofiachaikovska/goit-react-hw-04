import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import ImageModal from "../ImageModal/ImageModal";
import { useState } from "react";

const ImageGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
      <ul className={css.imageGalleryList}>
        {Array.isArray(images) &&
          images.map((image) => (
            <li className={css.imageGalleryListItem} key={image.id}>
              <ImageCard
                image={image}
                onClick={() => handleImageClick(image)}
              />
            </li>
          ))}
      </ul>
      {isOpen && currentImage && (
        <ImageModal
          image={currentImage}
          isOpen={isOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ImageGallery;
