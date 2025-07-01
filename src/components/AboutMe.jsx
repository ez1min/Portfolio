import React from 'react'
import {
    FaUser,
    FaPhone,
    FaCalendarAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaGraduationCap,
    FaLink
} from 'react-icons/fa'
import './AboutMe.css'

export default function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__title">
                <FaLink className="about-me__title-icon" />
                ABOUT
            </h2>

            <div className="about-me__grid">
                {/* Column 1 */}
                <div className="about-me__col">
                    <div className="about-me__item">
                        <FaUser className="about-me__icon" />
                        <div>
                            <p className="about-me__label">이름</p>
                            <p className="about-me__value">이지민</p>
                        </div>
                    </div>
                    <div className="about-me__item">
                        <FaPhone className="about-me__icon" />
                        <div>
                            <p className="about-me__label">연락처</p>
                            <p className="about-me__value">010-6709-7749</p>
                        </div>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="about-me__col">
                    <div className="about-me__item">
                        <FaCalendarAlt className="about-me__icon" />
                        <div>
                            <p className="about-me__label">생년월일</p>
                            <p className="about-me__value">2000.11.02</p>
                        </div>
                    </div>
                    <div className="about-me__item">
                        <FaEnvelope className="about-me__icon" />
                        <div>
                            <p className="about-me__label">이메일</p>
                            <p className="about-me__value">erer988872@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="about-me__col">
                    <div className="about-me__item">
                        <FaMapMarkerAlt className="about-me__icon" />
                        <div>
                            <p className="about-me__label">위치</p>
                            <p className="about-me__value">대구광역시</p>
                        </div>
                    </div>
                    <div className="about-me__item">
                        <FaGraduationCap className="about-me__icon" />
                        <div>
                            <p className="about-me__label">학력</p>
                            <p className="about-me__value">계명대학교 게임소프트웨어전공</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
