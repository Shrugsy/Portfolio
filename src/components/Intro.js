import React, { Component } from 'react'

export class Intro extends Component {
    render() {
        return (<React.Fragment>
            <div id="#" className="pimg1">
                <div className="ptext">
                    <div id="about"></div>
                    <span className="border-custom">
                        <span className="h1 h1-mob">Colin Joshua Fraser</span>
                        <br/>
                        <span className="h4 h4-mob">Full Stack Web Developer</span>
                    </span>

                </div>
            </div>
            <section className="section section-light">
                <div className="m-auto">
                <h1 className="display-3">About Me</h1>
                <div className="container">
                <p>
                    Full Stack Web Developer currently residing in Wollongong, NSW. I have experience working with React, Redux, HTML, Javascript and CSS among others.
                </p>
                <p>I am passionate about learning new technologies and implementing them to create functional applications for any problem, as well as keeping up to date on cutting edge technologies in order to improve work efficiency and streamline output.</p>
                </div>

                </div>
            </section>
            </React.Fragment>
        )
    }
}

export default Intro
