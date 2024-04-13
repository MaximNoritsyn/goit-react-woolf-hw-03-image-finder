import css from './image_gallery_item.module.css';

export const ImageGalleryItem = ({ image }) => {
    return <li className={css.ImageGalleryItem}>
        <img src={image.webformatURL} alt={image.tags} className={css.ImageGalleryItemImage} />
    </li>
}