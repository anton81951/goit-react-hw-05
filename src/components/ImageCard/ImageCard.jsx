import styles from "./ImageCard.module.css";

const ImageCard = ({ imageUrl, altText, likes, author, onImageClick }) => {
  return (
    <div>
      <img className={styles.cardFrame} src={imageUrl} alt={altText} onClick={() => onImageClick(imageUrl)} />
      <div className={styles.cardInfo}>
        <p>Likes: {likes}</p>
        <p>Author: {author}</p>
      </div>
    </div>
  );
};

export default ImageCard;


