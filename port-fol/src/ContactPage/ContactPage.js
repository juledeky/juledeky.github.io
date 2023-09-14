import './ContactPage.css';
import { useRef, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
    return (
        <div className="ContactPage">
            <h3>This page is under construction</h3>
            <Form />
        </div>
    );
}

function Form(){
    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const messageRef = useRef(null);
    const [loading, setLoading] = useState(false);

{/*const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }*/}

    useEffect(() => emailjs.init("A3YPSnsvmUE0LJMsr"), []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_7jmk71f";
        const templateId = "template_d1rdb47";
        try {
          setLoading(true);
          await emailjs.send(serviceId, templateId, {
            from_name: nameRef.current.value,
            message: emailRef.current.value,
            email_adress: messageRef.current.value
          });
          alert("email successfully sent check inbox");
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                {/*
                <label>Your name: <input type="text" value={inputs.name || ""} onChange={handleChange}/></label>
                <label>Your e-mail adress: <input type="text" value={inputs.email || ""} onChange={handleChange} /></label>
                <label>Your message: <textarea type="text" value={inputs.message || ""} onChange={handleChange}/></label>
                <input type="submit" />
                */}
                <label>Your name: <input type="text" ref={nameRef} placeholder='Enter your name'/></label>
                <label>Your e-mail adress: <input type="text" ref={emailRef} placeholder='Enter your email, for example: Batman@mail.be'/></label>
                <label>Your message: <textarea type="text" ref={messageRef} placeholder='Enter your very detailed message'/></label>
                <input type="submit" />
            </form>
        </div>
    );
}