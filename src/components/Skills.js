import React, { Component } from "react";

export class Skills extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="skills" name="skills" className="pimg2">
          <div className="ptext">
            <span className="border trans h1">
              <i className="fas fa-book mr-2"></i>Skills
            </span>
          </div>
        </div>
        <section className="section section-light">
          <div className="m-auto">
            <div className="container">
              <div className="icons">
                <i className="fab fa-git mx-2" title="git"></i>
                <a className="icon mx-2 p-0" href="https://github.com/Shrugsy">
                  <i className="fab fa-github m-0 p-0" title="github"></i>
                </a>
                <i className="fab fa-react mx-2" title="react"></i>
                <i className="fab fa-node mx-2" title="nodejs"></i>
                <i className="fab fa-css3-alt mx-2" title="css3"></i>
                <i className="fab fa-html5 mx-2" title="html5"></i>
                <i className="fab fa-js-square mx-2" title="javascript"></i>
                <i className="fab fa-bootstrap mx-2" title="bootstrap"></i>
              </div>
              <p className="container">
                I am versed in the following modern languages, libraries and
                frameworks used to create full stack web applications:
              </p>
              <div className="row justify-content-center">
                <div className="col-4">
                  <h3>Front End</h3>
                  <ul className="pl-0">
                      <li>React</li>
                      <li>HTML 5</li>
                      <li>CSS 3</li>
                      <li>Vanilla Javascript</li>
                      <li>jQuery</li>
                      <li>Bootstrap</li>
                  </ul>
                </div>
                <div className="col-5">
                  <h3>Back End</h3>
                  <ul className="pl-0">
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                  </ul>
                </div>
              </div>
              <p className="mt-2">
                In addition to to the above, I have experience in many other
                technologies including EJS, Python, AutoLisp, Visual Basic For
                Applications and C.
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Skills;
