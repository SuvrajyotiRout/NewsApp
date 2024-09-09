import image from "../assets/OIP.jpeg";
const Newscard = ({ title, description, newsurl, imgurl }) => {

    return (<>
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3" style={{ maxWidth: "330px", maxHeight: "700px", padding: "6px" }} >
            <img src={imgurl ? imgurl : image} className="card-img-top" style={{ height: "200px" }} />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">{description ? description.slice(0, 90) : "Loading..."}</p>
                <a href={newsurl} className="btn btn-primary">Read More</a>
            </div>
        </div>
    </>)
}
export default Newscard