import React from 'react'
import './Skills.css'
import { FaLink, FaCode, FaHtml5, FaDatabase, FaCloud } from 'react-icons/fa'

export default function Skills() {
    const sections = [
        { label: 'Language', icon: <FaCode />, items: ['JavaScript', 'Python'] },
        { label: 'Frontend', icon: <FaHtml5 />, items: ['Next.js (React)', 'CSS'] },
        { label: 'Backend', icon: <FaDatabase />, items: ['Oracle', 'Spring Boot'] },
        { label: 'DevOps', icon: <FaCloud />, items: ['Github', 'Docker'] },
    ]

    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-title">
                <FaLink className="title-icon" />
                SKILLS
                <span className="title-underline" />
            </h2>

            <div className="skills-card">
                {sections.map(({ label, icon, items }) => (
                    <div key={label} className="skill-row">
                        <div className="skill-label">
                            {icon}
                            <span>{label}</span>
                        </div>
                        <div className="skill-items">
                            {items.map(s => (
                                <span key={s} className="badge">{s}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
