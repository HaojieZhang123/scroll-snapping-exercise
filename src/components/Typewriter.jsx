import { useState, useEffect } from 'react';
const useTypewriter = (text, speed = 50) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        setDisplayText(''); // reset text on change
        const typingInterval = setInterval(() => {
            i++;
            // each cycle, DisplayText is set to the first i characters of the text
            setDisplayText(text.slice(0, i));
            if (i === text.length) {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => clearInterval(typingInterval);
    }, [text, speed]);

    return displayText;
}

const Typewriter = ({ text, speed }) => {
    const displayText = useTypewriter(text, speed);

  return (
    <span>{displayText}</span>
  )
}

export default Typewriter