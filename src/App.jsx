import React, { lazy } from 'react';
import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Skills from './components/Skills'


function App() {
 

  return (
    <div className='w-screen'>
    <Sidenav />
        <Main />
        <About />
        <Work />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default App
