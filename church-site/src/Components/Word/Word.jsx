import React from 'react'
import './word.css';
import { Typewriter } from "react-simple-typewriter";

const Word = () => {
    return (
        <>
            <div className="containedd">
                <div className="word">
                    <h2>"...I have written to you, young men, because you are strong and vigorous, and the word of God remains [always] in you, and you have been victorious over the evil one [by accepting Jesus as Savior]"</h2>
                    <h2>

                        <h3>- 1John 2:14 (AMP)</h3>

                        <div className='text_holder'>
                            <span>
                                <Typewriter words={["Welcome to WORD HOUSE, where young people are made strong, vigorous and victorious!", ""]} loop cursor cursorStyle='|' typeSpeed={120} deleteSpeed={40} delaySpeed={1000} />
                            </span>
                        </div>
                    </h2>

                    <p>💪🏾🦾🥳</p>
                </div>

            </div>
        </>
    )
}

export default Word