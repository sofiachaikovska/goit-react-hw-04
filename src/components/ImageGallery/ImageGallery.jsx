import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.imageGalleryList}>
      {Array.isArray(images) &&
        images.map((image) => (
          <li className={css.imageGalleryListItem} key={image.id}>
            <ImageCard image={image} onClick={() => onImageClick(image)} />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
