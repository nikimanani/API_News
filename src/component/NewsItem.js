import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,url,newsurl}=this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width:"18rem"}}>
                    <img src={url?url:"https://images.firstpost.com/wp-content/uploads/2022/09/Apple-is-unlikely-to-hold-a-launch-event-in-October-will-launch-iPads-and-Macs-via-press-releases.jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
                )
            }
        }
        
        export default NewsItem
