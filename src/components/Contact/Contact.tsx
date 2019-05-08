import React from 'react';
import classes from './Contact.module.scss';

const contact = props => {
    const textareaClasses = [classes.textarea, classes.ContactFields];
    const inputFieldClasses = [classes.ContactFields];
    return (
        <form action="https://formspree.io/abhinnankit@outlook.com" method="POST" className={classes.Contact}>
            <input className={inputFieldClasses.join(' ')} type="text" name="name" placeholder="Name" required={true} />
            <input
                className={inputFieldClasses.join(' ')}
                type="email"
                name="email"
                placeholder="Email"
                required={true}
            />
            <textarea className={textareaClasses.join(' ')} name="message" placeholder="Your message" />
            <button className={classes.btn} type="submit">
                Submit
            </button>
        </form>
    );
};

export default contact;
