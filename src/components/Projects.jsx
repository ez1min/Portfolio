// src/components/Projects.jsx
import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

const projects = [
    { title: 'Python Notebook 프로젝트', date: '2025.07', description: 'Jupyter Notebook을 활용한 데이터 분석 및 시각화', tech: 'Python, Jupyter Notebook', github: 'https://github.com/ez1min/2025-python' },
    { title: 'HTML 학습 자료', date: '2025.07', description: 'HTML 기초 및 실습 예제 정리', tech: 'HTML,CSS', github: 'https://github.com/ez1min/2025-HTML' },
    { title: 'Mini Project 1', date: '2025.03', description: '영화예매 키오스크', tech: 'Python', github: 'https://github.com/ez1min/mini_project_2025-03' },
    { title: 'Mini Project 2', date: '2025.06', description: '자격증조회커뮤니티', tech: 'Spring, React', github: 'https://github.com/ez1min/Mini_Project2' },
    { title: 'Spring Boot 웹앱', date: '2025.04', description: 'Java와 Spring Boot로 구현한 웹 애플리케이션', tech: 'Java, Spring Boot', github: 'https://github.com/ez1min/java-springboot-2025' },
    { title: 'Database 예제', date: '2025.03', description: 'Java 개발자 과정 Database 예제 및 실습', tech: 'Java, SQL', github: 'https://github.com/ez1min/java-database-2025' }
];

export default function Projects() {
    return (
        <section id="projects" className="projects-section">
            <hr className="neon-divider" />
            <h2 className="title">Projects</h2>
            <div className="projects-wrapper">
                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <div key={idx} className="project-card neon-card">
                            <h3 className="neon-title">{project.title}</h3>
                            <small>{project.date}</small>
                            <p>{project.description}</p>
                            <span className="tech neon-tech">{project.tech}</span>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noreferrer" className="link-neon">
                                    <FaGithub /> GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
