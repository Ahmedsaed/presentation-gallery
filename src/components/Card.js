import "./Card.css";

export default function Card({ title, img, video, slides, code, display }) {


    return (
        <div className="card-body">
            {
                img ?
                <img src={img} alt="slide" className="card-img"/> :
                <img src="https://via.placeholder.com/1600x900" alt="slide" className="card-img"/>
            }
            <div className="card-badge">
                {
                    display ? 
                    <>
                        {
                            video &&
                            <a href={video} target="_blank" rel="noreferrer" className="card-badge-text">Video</a>
                        }
                        {
                            slides && 
                            <a href={slides} target="_blank" rel="noreferrer" className="card-badge-text">Slides</a>    
                        }   
                        {
                            code && 
                            <a href={code} target="_blank" rel="noreferrer" className="card-badge-text">Code</a>    
                        }
                    </> :
                    <p className="card-badge-text">Coming soon</p>
                }

            </div>
            <h2 className="card-title">{title}</h2>
        </div>
    )
}