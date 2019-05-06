import React from 'react';
import classes from './Footer.module.scss';
import SocialLinks from './SocialLinks/SocialLinks';
import { faLinkedinIn, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const footer = () => {
    return (
        <footer className={classes.Footer}>
            <SocialLinks icon={faLinkedinIn} link="https://www.linkedin.com/in/abhinn-ankit/" />
            <SocialLinks icon={faStackOverflow} link="https://stackoverflow.com/users/8616210/abhinnankit" />
            <SocialLinks icon={faGithub} link="https://github.com/abhinn-ankit" />
        </footer>
    );
};

export default footer;
