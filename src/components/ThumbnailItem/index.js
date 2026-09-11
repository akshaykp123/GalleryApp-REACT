// src/components/ThumbnailItem/index.js
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, isActiveImgItem} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickThumbnail = () => {
    isActiveImgItem(id)
  }

  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  return (
    <li className="galleryItem">
      <button className="btn" type="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
