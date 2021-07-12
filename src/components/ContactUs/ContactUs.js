import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

import './style.css';

const ContactUs = () => {
    const [inputValue, setInputValue] = useState('');
    const [input2Value, setInput2Value] = useState('');
    const [input3Value, setInput3Value] = useState('');

    useEffect(() => {
        gsap.from('.ContactUs__header', { x: -40, opacity: 0, duration: 1, ease: "bounce" });
        gsap.from('.ContactUs__content', { x: 40, opacity: 0, duration: 1, ease: "bounce" });
    }, []);

    return(
            <section className="ContactUs" >
                <div className="ContactUs__header">
                    <div className="ContactUs__headerName">
                        <h1 className="ContactUs__headerTitle">
                            Get in touch and we'll be happy to answer all your inquiries
                        </h1>
                        <p className="ContactUs__headerText">
                                Whether you’re looking for an experienced agency to boost your digital business, or seeking a new career opportunity in an exciting and fast-paced industry, please get in touch using our details.<br />
                            <span className="ContactUs__addition">
                                If you prefer, you can always arrange to pop into our offices for a brew and a chat about how we can help you.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="ContactUs__content" >
                    <h1 className="ContactUs__title" >Contact Us</h1>
                    <p className="ContactUs__text" >
                        
                    </p>

                    <form>
                        <input value={inputValue} onChange={e => setInputValue(e.target.value)} className="ContactUs__input" type="text" placeholder="Your Name" required />
                        <input value={input2Value} onChange={e => setInput2Value(e.target.value)} className="ContactUs__input" type="email" placeholder="Email" required />
                        <input value={input3Value} onChange={e => setInput3Value(e.target.value)} className="ContactUs__input" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" placeholder="Phone Number" required />
                        <button className="ContactUs__button" >Contact Us</button>
                    </form>
                </div>
            </section>
    );
}

export default ContactUs;