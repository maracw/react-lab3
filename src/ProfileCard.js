//argument destructuring
function ProfileCard ({title, handle, image, alt, description}) {
    return (
        <div className="card">
                <div className="card-image">
                    <figure className="image is-1by1">
                        <img src={image} alt ={alt}></img>
                    </figure>
                </div>

                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{handle}</p>
                    </div>
                    <div className="content">
                        <p>{description}</p>
                    </div>
                </div>
            <hr></hr>
    </div>);
}

export default ProfileCard;