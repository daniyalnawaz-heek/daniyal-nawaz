import React, { Component } from 'react';
import Footer from './Footer';
import Skill from './Skill';
import Nav from './Nav'

class Skills extends Component {
  render() {
    return (
      <div class="show1">
        <Nav header="SKILLS"/>
        <Skill margin="200px" skill="HTML" about="A standard markup language for documents designed to be displayed in a web browser." />
        <Skill margin="400px" skill="CSS" about="A style sheet language used for describing the presentation of a document written in a markup language such as HTML. " />
        <Skill margin="600px" skill="JAVASCRIPT" about=" A programming language that conforms to the ECMAScript specification.It is a high-level, often just-in-time compiled, and multi-paradigm." />
        <Skill margin="800px" skill="REACT JS" about="It is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies." />
        <Skill margin="600px" skill="NODE JS" about="It is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser. " />
        <Skill margin="400px" skill="MYSQL" about=" It is an open-source relational database management system, the abbreviation for Structured Query Language." />
        <Skill margin="200px" skill="MONGODB" about="It is a cross-platform document-oriented database program.It uses JSON-like documents with optional schemas." />
        <Skill margin="400px" skill="EXPRESS JS" about="It is a back end web application framework for Node.js, released as free and open-source software.It is designed for building web applications and APIs." />
        <Skill margin="600px" skill="PYTHON" about="It is an interpreted, high-level and general-purpose programming language. " />
        <Skill margin="800px" skill="C LANGUAGE" about="It is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. " />
        <Skill margin="600px" skill="AUTOMATION" about="It is the technology by which a process or procedure is performed with minimal human assistance" />
        <Skill margin="400px" skill="GIT" about="It is a distributed version-control system for tracking changes in any set of files, originally designed for coordinating work among programmers cooperating on source code during software development." />
        
        
        

        <Footer />
        
      </div>
    )
  }
}

export default Skills
