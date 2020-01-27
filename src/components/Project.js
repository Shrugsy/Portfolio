import React, { Component } from 'react'
import CrossfadeImage from 'react-crossfade-image';

// expected props:
// props:
// images (array)
// title
// description
// tech (array)
// linkLive
// linkSource

export class Project extends Component {
    constructor(props) {
        super(props);
        let {images} = this.props
        this.state = {
            image: images[0]
        }
    }

    componentDidMount(){
        let {images} = this.props
        if (images.length > 1) {
            let ctr = 1
            setInterval(() =>{
                this.setState({
                    image: this.props.images[ctr]
                }, ()=>{
                    (ctr < images.length -1) ? ctr++ : ctr = 0
                })
            }, 5000)
        }
    }

    render() {
        let {title, description, tech, linkLive, linkSource} = this.props
        let liveButton, liveImage
        if (linkLive){
            liveButton = <a href={linkLive}><button className="w-100 project-demo-button btn btn-outline-info"><i className="fas fa-arrow-circle-right mr-2"></i>Live Demo</button></a>;
            liveImage = <a href={linkLive}><CrossfadeImage src={this.state.image} alt="" containerClass="CrossfadeImage card-img-top project-img hasLink"/></a>;
        } else {
            liveButton = <button className="w-100 project-demo-button btn btn-outline-info" disabled>Demo not available</button>;
            liveImage = <CrossfadeImage src={this.state.image} alt="" containerClass="CrossfadeImage card-img-top project-img"/>;
        }
        
        return (
            <div className="card project">
                {liveImage}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p>Technologies used: {tech.join(', ')}</p>
                    {liveButton}
                    <a href={linkSource}><button className="w-100 project-source-button btn btn-outline-primary"><i className="fab fa-github mr-2"></i>View Source</button></a>
                </div>
            </div>
        )
    }
}

export default Project