import React, { useState } from "react";

function InputSample() {
    const [text, setText] = useState('')

    function onChange(e) {
        setText(e.target.value)
    }

    function onReset() {
        setText('')
    }

    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    )
}

export default InputSample