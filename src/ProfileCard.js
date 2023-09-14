//argument destructuring
function ProfileCard ({title, handle, image, alt}) {
    //with named variables
    //const title = props.title;
    //const handle = props.handle;

    //destructured as line of code
    //const {title, handle} = props;


    return <div>ProfileCard !!! Now with argument list destructuring
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
            <img src={image} alt ={alt}></img>
            <hr></hr>
    </div>
}

export default ProfileCard;