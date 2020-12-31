import React, { Component } from 'react';
import Footer from './Footer';
import Nav from './Nav'

class About extends Component {
  render() {
    return (
      <div class="show1">
        <Nav header="ABOUT"/>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut mollitia quaerat delectus facilis debitis? Laudantium amet atque autem voluptatum mollitia, sunt veniam? Sequi temporibus placeat suscipit rem ipsam libero!
        </div>
        <Footer />
        
      </div>
    )
  }
}

export default About
