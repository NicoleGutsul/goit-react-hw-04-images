import { GalleryImage } from "./ImageGallery.styled";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ gallery }) => {
   if (gallery.length > 0) {

    return (
        <GalleryImage>
            {gallery.map(image => (
                 <ImageGalleryItem 
                 item={image}
                 key={image.id}
             />
            ))}
        </GalleryImage>
    );
   }  
};

export default ImageGallery;