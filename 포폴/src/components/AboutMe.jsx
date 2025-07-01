import React from 'react'
import { FaUser, FaPhone, FaCalendarAlt, FaEnvelope, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa'
import './AboutMe.css'
import { FaLink } from 'react-icons/fa'

export default function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="title">
                <FaLink className="title-icon" />
                ABOUT
            </h2>
            <div className="info-grid">
                {/* 1열 */}
                <div className="info-item">
                    <FaUser className="info-icon" />
                    <div>
                        <p className="label">이름</p>
                        <p className="value">이지민</p>
                    </div>
                </div>
                <div className="info-item">
                    <FaPhone className="info-icon" />
                    <div>
                        <p className="label">연락처</p>
                        <p className="value">010-6709-7749</p>
                    </div>
                </div>
                {/* 2열 */}
                <div className="info-item">
                    <FaCalendarAlt className="info-icon" />
                    <div>
                        <p className="label">생년월일</p>
                        <p className="value">2000.11.02</p>
                    </div>
                </div>
                <div className="info-item">
                    <FaEnvelope className="info-icon" />
                    <div>
                        <p className="label">이메일</p>
                        <p className="value">erer988872@gmail.com</p>
                    </div>
                </div>
                {/* 3열 */}
                <div className="info-item">
                    <FaMapMarkerAlt className="info-icon" />
                    <div>
                        <p className="label">위치</p>
                        <p className="value">대구광역시</p>
                    </div>
                </div>
                <div className="info-item">
                    <FaGraduationCap className="info-icon" />
                    <div>
                        <p className="label">학력</p>
                        <p className="value">계명대학교 게임소프트웨어전공</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
