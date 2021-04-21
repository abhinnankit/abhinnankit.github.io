import React, { useLayoutEffect, useRef, useState } from 'react';
import classes from './Contact.module.scss';

const Contact = (props) => {
    const [animate, setAnimate] = useState(false);
    const textAreaRef = useRef(null);
    const threshold = window.innerHeight / 1.6;
    const scrollListener = () => {
        // console.log(threshold + ' ' + textAreaRef.current.getBoundingClientRect().top);
        if (!animate && textAreaRef.current && textAreaRef.current.getBoundingClientRect().top < threshold) {
            setAnimate(true);
            window.removeEventListener('scroll', scrollListener);
        }
    };
    useLayoutEffect(() => {
        window.addEventListener('scroll', scrollListener);
        // eslint-disable-next-line
    }, []);
    const textareaClasses = [classes.textarea, classes.ContactFields, 'opaque'];
    const nameClasses = [classes.ContactFields, 'opaque'];
    const emailClasses = [classes.ContactFields, 'opaque'];
    const btnClasses = [classes.btn, 'opaque'];
    if (animate) {
        nameClasses.push(classes.AnimateForm);
        emailClasses.push(classes.Delay1, classes.AnimateForm);
        textareaClasses.push(classes.Delay2, classes.AnimateForm);
        btnClasses.push(classes.Delay3, classes.AnimateForm);
    }
    return (
        <form action="https://formspree.io/abhinnankit@outlook.com" method="POST" className={classes.Contact}>
            <input className={nameClasses.join(' ')} type="text" name="name" placeholder="Name" required={true} />
            <input className={emailClasses.join(' ')} type="email" name="email" placeholder="Email" required={true} />
            <textarea
                ref={textAreaRef}
                className={textareaClasses.join(' ')}
                name="message"
                placeholder="Your message"
            />
            <button className={btnClasses.join(' ')} type="submit">
                Submit
            </button>
        </form>
    );
};

export default Contact;
