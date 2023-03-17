import React, { Component } from "react";
import "../App.css";

class Certifications extends Component {
  render() {
    if (this.props.data) {
      var certifications = this.props.data.certifications.map(function (cert) {
        return (
          <li key={cert.institute} className="certificateInfo">
            <blockquote>
              <p className="certificateName">{cert.courseName}</p>
              <cite className="certificatecite">{cert.institute}</cite>
            </blockquote>
          </li>
        );
      });
    }

    return (
      <section id="certification">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col"></div>

            <div className="ten columns flex-container">
              <u>
                <h1 className="certificationTitle slides">Certifications</h1>
              </u>
              <br />
              <ul className="slides">{certifications}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Certifications;
