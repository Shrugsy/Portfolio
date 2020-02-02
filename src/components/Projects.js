import React, { Component } from "react";
import Project from "./Project";


import warbler1 from "../images/projects/warbler1.jpg";
import warbler2 from "../images/projects/warbler2.png";

import yelpcamp1 from "../images/projects/yelpcamp1.jpg";
import yelpcamp2 from "../images/projects/yelpcamp2.jpg";
import yelpcamp3 from "../images/projects/yelpcamp3.jpg";
import yelpcamp4 from "../images/projects/yelpcamp4.jpg";

import sudoku1 from '../images/projects/sudoku1.png';

import clock1 from '../images/projects/clock1.png';
import clock2 from '../images/projects/clock2.png';
import clock3 from '../images/projects/clock3.png';

import palette1 from '../images/projects/paletteGenerator1.png';
import palette2 from '../images/projects/paletteGenerator2.png';
import palette3 from '../images/projects/paletteGenerator3.png';




// expected props to pass to Project:
// props:
// image
// title
// description
// tech
// linkLive
// linkSource

// Warbler
// Yelpcamp
// Sudoku
// Clock with countdown timer

export class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="projects" name="projects" className="pimg3">
          <div className="ptext">
            <span className="border trans h1">
              <i className="far fa-keyboard mr-2"></i>Projects
            </span>
          </div>
        </div>
        <section className="section section-light">
          <div className="m-auto">
            <div className="container">
              <div className="row">

              <div className="col-12 col-lg-6 mb-5">
                  <Project
                    images={[palette1, palette2, palette3]}
                    title="Palette Generator"
                    description="Web app to generator a colour palette based on an image URL or uploaded image file."
                    tech={["Node.js", "Express", "React", "Material UI", "HTML", "CSS", "JS"]}
                    linkLive="https://cjf-palette-generator.herokuapp.com/"
                    linkSource="https://github.com/Shrugsy/Palette-Generator"
                  />
                </div>

                <div className="col-12 col-lg-6 mb-5">
                  <Project
                    images={[clock1, clock2, clock3]}
                    title="Clock with countdown timer"
                    description="A desktop clock with toggleable timer in the style of google.com's inbuilt timer. Built in order to experiment with using React for a desktop application."
                    tech={["Node.js", "Electron", "React", "HTML", "CSS", "JS"]}
                    linkSource="https://github.com/Shrugsy/Clock_with_Countdown_Timer"
                  />
                </div>

                <div className="col-12 col-lg-6 mb-5">
                  <Project
                    images={[warbler1, warbler2]}
                    title="Warbler"
                    description="Full Stack mock Twitter clone created as a code-along exercise as part of 'The Advanced Web Developer Bootcamp' course on Udemy. The demo explores authentication using jsonwebtoken & bcrypt, as well as creating a user friendly experience using react router."
                    tech={["Node.js", "Express", "React", "mongoDB", "HTML", "CSS", "JS"]}
                    linkLive="https://warbler-client-cjf.herokuapp.com/"
                    linkSource="https://github.com/Shrugsy/warbler"
                  />
                </div>

                <div className="col-12 col-lg-6 mb-5">
                  <Project
                    images={[yelpcamp1, yelpcamp2, yelpcamp3, yelpcamp4]}
                    title="YelpCamp"
                    description="Full Stack mock website created as part of 'The Web Developer Bootcamp' by Colt Steele on Udemy."
                    tech={["Node.js", "Express", "mongoDB", "EJS", "HTML", "CSS", "JS"]}
                    linkSource="https://github.com/Shrugsy/yelpCamp"
                  />
                </div>

                <div className="col-12 col-lg-6 mb-5">
                  <Project
                    images={[sudoku1]}
                    title="Sudoku"
                    description="Client side implementation of Sudoku to explore React."
                    tech={["Node.js", "React", "HTML", "CSS", "JS"]}
                    linkLive="https://sudokuboardgame.herokuapp.com/"
                    linkSource="https://github.com/Shrugsy/Sudoku"
                  />
                </div>




                
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Projects;
