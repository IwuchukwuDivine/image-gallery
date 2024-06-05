const ImageCard = ({image}) => {
    return(
        <div className="imagecard">
            <div className="imgcontainer">
                <img src={image.webformatURL} alt="" />
            </div>
            <div className="image-text">
                <h4>Photo by {image.user}</h4>
                <div className="tags">
                    {image.tags.split(',').map((tag, index) => (
                        <span key={index}>#{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageCard