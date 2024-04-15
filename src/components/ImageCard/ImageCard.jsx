const ImageCard = ({ image, onClick }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.description}
        onClick={() => onClick(image)}
      />
    </div>
  );
};

export default ImageCard;
