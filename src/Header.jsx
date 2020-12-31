import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiJavascript}  from 'react-icons/si'
import {FaPython} from 'react-icons/fa'
import {SiCss3} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'



class Header extends Component {
  render() {
    return (
      <div>
        <div class="header">
        
        <Typewriter
          options={{
            strings: ["Hi, I'm Daniyal Nawaz.", 'A MERN web developer.',"This is my Portfolio.","Made in the A.M."],
            autoStart: true,
            loop: true,}}/>
            <div class="headicons">
            <FaReact />
            <SiMongodb />
            <FaNodeJs />
            <FaPython />
            <SiJavascript />
            <SiMysql />
            <SiHtml5 /> 
            <SiCss3 />
            
        
            </div>
          
            
            
        </div>
        
      </div>
    )
  }
}

export default Header
