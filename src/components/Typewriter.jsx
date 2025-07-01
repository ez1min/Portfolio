// src/components/Typewriter.jsx
import { useState, useEffect } from 'react';
import './Typewriter.css';

export default function Typewriter({
    textList,
    typingSpeed = 100,
    pause = 800,
}) {
    const [display, setDisplay] = useState('');
    const [line, setLine] = useState(0);
    const [char, setChar] = useState(0);

    /* 타이핑 효과 */
    useEffect(() => {
        if (line >= textList.length) return;           // ★ 모든 줄 완료

        const current = textList[line];

        const timer = setTimeout(() => {
            if (char < current.length) {
                /* 1) 글자 하나씩 추가 */
                setDisplay(prev => prev + current.charAt(char));
                setChar(c => c + 1);
            } else {
                /* 2) 현재 줄 끝 → [마지막 줄이 아니면] 개행 후 다음 줄 */
                if (line < textList.length - 1) {
                    setDisplay(prev => prev + '\n');         // ★ 마지막 줄엔 개행 X
                }
                setLine(l => l + 1);
                setChar(0);
            }
        }, char < current.length ? typingSpeed : pause);

        return () => clearTimeout(timer);
    }, [char, line, textList, typingSpeed, pause]);

    /* 단일 <pre> 노드로 렌더링 */
    return (
        <pre className="typewriter">
            {display}
            <span className="cursor">|</span>
        </pre>
    );
}
