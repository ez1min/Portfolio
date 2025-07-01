// src/App.jsx
import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Typewriter from './components/Typewriter';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <section id="typing" className="section">
        <div className="retro-text typing-wrapper">
          <Typewriter
            textList={[
              '호기심을 설계로 풀어내는 개발자 이지민 입니다.',
              '깊이 있는 이해로 완성도를 높이며',
              '지속 가능한 가치를 창출하는 개발자로 성장하고 싶습니다.',
            ]}
            typingSpeed={100}
            pause={1200}
          />
        </div>
      </section>

      <section id="aboutme" className="section">
        <AboutMe />
      </section>

      <section id="skills" className="section">
        <Skills />
      </section>

      <section id="projects" className="section">
        <Projects />
      </section>
    </div>
  );
}
