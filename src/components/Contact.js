import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="contact" name="contact" className="pimg4">
          <div className="ptext">
            <span className="border trans h1">
              <i className="fas fa-id-card mr-2"></i>Contact
            </span>
          </div>
        </div>
        <section className="section section-light section-25">
          <div className="m-auto">
            <div className="container">
              <p>Please feel free to contact me below</p>
              <p><i className="fas fa-phone-alt mr-2"></i>Phone: <a href="tel:0450-702-072">0450 702 072</a></p>
              <p>
              <i className="fas fa-envelope mr-2"></i>Email:
                <a className="pl-2" href="mailto: joshfraser91@gmail.com">
                  joshfraser91@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;
