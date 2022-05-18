import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageurl, newsUrl, author, date, source } = props;               // destruturing : 
    return (
        <div className=" my-3 mx-3 ">
            <div className="card" >
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className=" badge rounded-pill bg-danger" style={{ left: '89%', zIndex: '1' }}> {source} </span>
                </div>
                <img src={!imageurl ? "src/components/images.png" : imageurl} className="card-img-top" alt="..." />
                <div className="card-body" >
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description} <b>Read more...</b></p>
                    <p className="card-text"><small className="text-info">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read News</a>
                </div>
            </div>
        </div>
    )
}
export default NewsItem;