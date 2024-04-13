import css from './image_gallery.module.css';
import { ImageGalleryItem } from '../image_gallery_item/image_gellary_item';

export const ImageGallery = ({ images }) => {
    return <ul className={css.imageGallery}>
        {images.map((image) => <ImageGalleryItem key={image.id} image={image} />)}
    </ul>
}