// src/pages/HomePage.jsx
import React from 'react'
import Typewriter from './Typewriter'
import Divider from './Divider'
import About from './AboutMe'

export default function HomePage() {
    return (
        <>
            {/* 히어로 섹션 */}
            <section id="hero" className="hero">
                <h1>
                    <Typewriter
                        textList={['안녕하세요', 'ㅇㅇㅇㅇㄹㅇㄹ', 'ㅂㅂㅂㅂㅇㄹㄴㅇㄹ']}
                    />
                </h1>
            </section>

            {/* 히어로와 About 사이에 구분선 */}
            <Divider />

            {/* About 섹션 */}
            <About />

            {/* 추가 섹션이 필요하면 이 아래로 계속 */}
        </>
    )
}
