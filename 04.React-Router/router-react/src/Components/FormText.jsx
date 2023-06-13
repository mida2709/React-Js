import { useRef, useState } from "react"

export const FormTesxt = () => {
    const textFieldRef = useRef(null)
    const [text, setText] = useState('')
    const onSubmit = () => {
        const text = textFieldRef.current.value
        setText(text)
        textFieldRef.current.value = ''
    }

    return <div>
        <h2>Form</h2>
        <input type="text" ref={textFieldRef } />
        <button onClick={onSubmit} type="submit">Submit</button>
        <p>Text: {text} </p>
    </div>
}
