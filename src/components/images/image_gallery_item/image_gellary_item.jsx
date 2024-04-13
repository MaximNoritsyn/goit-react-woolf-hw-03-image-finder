import css from './image_gallery_item.module.css';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
    return <li className={css.ImageGalleryItem}>
        <img src={webformatURL} alt={tags} className={css.ImageGalleryItemImage} />
    </li>
}