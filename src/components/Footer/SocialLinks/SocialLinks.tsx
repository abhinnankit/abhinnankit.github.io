import React, { FC } from 'react';
import classes from './SocialLinks.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IProps {
    icon: IconDefinition;
    link: string;
}

const socialLinks: FC<IProps> = (props) => {
    return (
        <div className={classes.SocialLinks}>
            <a href={props.link} className={classes.IconsBox} rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={props.icon} className={classes.Icons} />
            </a>
        </div>
    );
};

export default socialLinks;
