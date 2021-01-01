import React, { Component } from 'react';
import Footer from './Footer';
import Expertise from './Expertise';
import Nav from './Nav'

class Education extends Component {
  render() {
    return (
      <div class="show2">
        <Nav header="EDUCATION"/>
        <Expertise margin="100px" expert="hgccec"/>
        <Expertise margin="300px" expert="hgccec"/>
        <Expertise margin="500px" expert="hgccec"/>
        <Expertise margin="700px" expert="hgccec"/>
        <Expertise margin="900px" expert="hgccec"/>
        <Expertise margin="700px" expert="hgccec"/>
        <Expertise margin="500px" expert="hgccec"/>
        <Expertise margin="300px" expert="hgccec"/>
        <Footer />
        
        
      </div>
    )
  }
}

export default Education
