import { useState, useEffect } from 'react'
import './Typewriter.css'

/**
 * textList: ['첫 번째 줄', '두 번째 줄', '세 번째 줄']
 * typingSpeed: 한 글자당 찍히는 속도(ms)
 * pause: 한 줄이 끝나고 다음 줄 타이핑 전 대기(ms)
 */
export default function Typewriter({ textList, typingSpeed = 100, pause = 800 }) {
    const [display, setDisplay] = useState('')    // 현재까지 화면에 보이는 텍스트
    const [lineIndex, setLineIndex] = useState(0) // 지금 타이핑 중인 줄 인덱스
    const [charIndex, setCharIndex] = useState(0) // 줄 내에서 타이핑 중인 글자 인덱스

    useEffect(() => {
        // 모든 줄을 다 찍었으면 종료
        if (lineIndex >= textList.length) return

        const currentLine = textList[lineIndex]

        let timeout = null
        if (charIndex <= currentLine.length) {
            // 1) 현재 줄에서 한 글자씩 추가 타이핑
            timeout = setTimeout(() => {
                setDisplay(prev => prev + currentLine.charAt(charIndex))
                setCharIndex(ci => ci + 1)
            }, typingSpeed)
        } else {
            // 2) 현재 줄이 끝나면 줄바꿈 문자 추가 후 다음 줄로 이동
            timeout = setTimeout(() => {
                setDisplay(prev => prev + '\n')      // 줄바꿈
                setLineIndex(li => li + 1)           // 다음 줄로
                setCharIndex(0)                      // 글자 인덱스 초기화
            }, pause)
        }

        return () => clearTimeout(timeout)
    }, [charIndex, lineIndex, pause, textList, typingSpeed])

    return (
        // white-space: pre-wrap 로 줄바꿈을 그대로 살립니다
        <pre className="typewriter">
            {display}
            <span className="cursor">|</span>
        </pre>
    )
}
