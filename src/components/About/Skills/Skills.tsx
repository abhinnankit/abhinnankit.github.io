import React from 'react';
import Skill from './Skill/Skill';
import classes from './Skills.module.scss';

const skills = () => {
    const languages = {
        java: 80,
        javascript: 80,
        typescript: 85,
        html: 95,
        css: 90,
        scss: 85,
        react: 60,
        angular: 75,
        'spring boot': 65,
        express: 65,
    };
    return (
        <div className={classes.Skills}>
            <h2>TECHNOLOGIES</h2>
            {Object.keys(languages).map(language => (
                <Skill key={language} skill={language} percent={languages[language]} />
            ))}
        </div>
    );
};

export default skills;
