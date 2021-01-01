import React, { Component } from 'react';
import Footer from './Footer';
import Workleft from './Workleft';
import Workright from './Workright'
import Nav from './Nav'

export class Project extends Component {
  render() {
    return (
      <div class="show2">
        <Nav header="PROJECTS"/>
        <Workleft link="" detail="" title="TIP CALCULATOR" />
        <Workright link="" detail="" title="SPAM BOT"  />
        <Workleft  link="" detail="" title="TWEET AUTOMATION" />
        <Workright link="" detail="" title="TIP CALCULATOR"  />
        <Workleft  link="" detail="" title="SMS FLOODING" />
        <Workright link="" detail="" title="MUSIC PLAYER"  />
        <Workleft  link="" detail="" title="PASSWORD GENERATOR" />
        <Workright link="" detail="" title="WEATHER WEBSITE"  />
        <Workleft  link="" detail="" title="PASSOWRD VALIDATOR" />
        <Workright link="" detail="" title="VIRTUAL KEYBOARD"  />
        <Workleft  link="" detail="" title="URL SHORTNER" />
        <Workright link="" detail="" title="QR CODE GENERATOR"  />
        <Workleft  link="" detail="" title="WHATSAPP AUTOMATION" />
        <Workright link="" detail="" title="LOGIN AUTHENTICATION" />
        <Workleft link="" detail="" title="PDF TO SPEECH"    />
        <Workright link="" detail="" title="TEXT TO SPEECH"     />
        <Workleft  link="" detail="" title="SPEECH TO TEXT"   />
        
        <Workright link="" detail="" title="URL SHORTNER"    />
        <Workleft  link="" detail="" title="URL SHORTNER"   />
        <Workright link="" detail="" title="URL SHORTNER"    />
        <Workleft  link="" detail="" title="URL SHORTNER"   />
        <Workright link="" detail="" title="URL SHORTNER"    />
        <Workleft  link="" detail="" title="URL SHORTNER"   />
        <Workright link="" detail="" title="URL SHORTNER"    />
        <Footer />
        
      </div>
    )
  }
}

export default Project
