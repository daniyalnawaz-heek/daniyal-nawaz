import React, {Component} from 'react';
import Header from './Header';
import footer from './Footer';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Sample from './Sample';




class Home extends Component {
  render() {
    return (
      <div class="top main">
        <Header />

        <Sidebar />
        <div id="scroll">SCROLL DOWN</div>
        <Sample link="/about" linkdata="ABOUT" margin="300px"/>
        <Sample link="/project" linkdata="PROJECTS" margin="500px"/>
        <Sample link="/education" linkdata="EDUCATION" margin="700px"/>
        <Sample link="/skills" linkdata="SKILLS" margin="900px"/>
        
        <Footer />
        
      </div>
    )
  }
}

export default Home
