import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {

        let { title, description, imageUrl, url, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '88%',zIndex: '1'}}>
                        {source}

                    </span>
                    <img src={imageUrl ? imageUrl : "https://deadline.com/wp-content/uploads/2024/02/Annie-Awards.jpg?w=1024"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title ? title.slice(0, 30) : ""}...</h5>
                        <p className="card-text">{description ? description.slice(0, 90) : ""}...</p>
                        <p className="card-text"><small className="text-info">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
