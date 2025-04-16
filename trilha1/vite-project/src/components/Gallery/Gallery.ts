import './gallery.css'

type GalleryProps = {
  images: string[]
}

export function Gallery({ images }: GalleryProps) {
  return (
    <div className="gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Gallery item ${index + 1}`} className="gallery-item" />
      ))}
    </div>
  )
}