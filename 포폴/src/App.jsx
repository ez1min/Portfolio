// src/App.jsx
import React from 'react'
import './App.css'

// 네비게이션
import Navbar from './components/Navbar'

// 히어로(타이핑) 섹션
import Typewriter from './components/Typewriter'

// ABOUT ME 섹션
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

// (추가로 Projects, Contact 섹션이 있다면 이 아래에 import)
/* import Projects from './components/Projects'
import Contact from './components/Contact' */

function App() {
  return (
    <>
      {/* 1) 고정된 네비게이션 바 */}
      <Navbar />

      {/* 2) 히어로 섹션 (Typewriter) */}
      <section id="typing" className="section typing">
        <h1>
          <Typewriter
            textList={[
              'Welcome to My Portfolio',
              'I am Jimin',
              'Let’s build something amazing'
            ]}
            typingSpeed={80}
            pause={1200}
          />
        </h1>
      </section>

      {/* 3) ABOUT ME */}
      <section id="aboutme" className="section">
        <AboutMe />
      </section>

      {/*  4) Projects 섹션 (예시) */}
      <section id="skills" className="section">
        <Skills />
      </section>


      {/* 5) Contact 섹션 (예시) */}
      {/*      <section id="contact" className="section">
        <Contact />
      </section> */}


    </>
  )
}

export default App
