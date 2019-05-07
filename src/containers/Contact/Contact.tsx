import React, { Component } from 'react';
import classes from './Contact.module.scss';

class Contact extends Component {
    render() {
        const textareaClasses = [classes.textarea, classes.ContactFields];
        const inputFieldClasses = [classes.ContactFields];
        return (
            <form className={classes.Contact}>
                <input className={inputFieldClasses.join(' ')} type="text" name="name" placeholder="Name" />
                <input className={inputFieldClasses.join(' ')} type="email" name="email" placeholder="Email" />
                <textarea className={textareaClasses.join(' ')} name="message" placeholder="Your message" />
                <button className={classes.btn} type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Contact;
