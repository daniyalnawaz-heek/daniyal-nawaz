import React,  { Component } from 'react';
import ReactDOM from 'react-dom';

import './portfolio.css';

import Skill from "./Skill";
import Expertise from './Expertise'
import App from './App'

import { BrowserRouter, Link } from 'react-router-dom';






ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>,document.getElementById("root"));


