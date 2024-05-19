import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ pictures, onImageClick }) => {
  return (
    <ul className={styles.galleryShape}>
      {pictures.map((picture) => (
        <li key={picture.id}>
          <ImageCard onImageClick={onImageClick} autohor={picture.user.username} likes={picture.likes} imageUrl={picture.urls.small} altText={picture.alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;