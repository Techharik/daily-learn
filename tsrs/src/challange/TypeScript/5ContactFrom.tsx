import React, { FormEvent, useRef, useState } from "react"




type FormDataType = {
    name: string,
    email: string
}
const ContactForm = () => {
    const [formData, setFormData] = useState<FormDataType>({ name: '', email: "" })
    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setFormData({
            name: name.current!.value,
            email: name.current!.value
        })

    }
    console.log(formData)
    return <form onSubmit={handleSubmit}>
        <input type="text" ref={name} />
        <input type="text" ref={email} />
        <button>submit</button>
    </form>
};

export default ContactForm;
