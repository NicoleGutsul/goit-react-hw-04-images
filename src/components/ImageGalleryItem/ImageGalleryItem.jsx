import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ gallery, onClickModal, getImage }) => {
    return gallery.map(data => {
        return (
            <GalleryItem
              key={data.id}
              onClick={() => {
                onClickModal();
                getImage(data.webformatURL, data.tags);
              }}
            >
                <GalleryItemImage
                  src={data.webformatURL}
                  alt={data.tags}
                  width="180"
                />
            </GalleryItem>
        )
    })
}

export default ImageGalleryItem;