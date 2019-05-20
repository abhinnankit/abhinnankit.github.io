import React, { FC } from 'react';
import Skill from './Skill/Skill';
import SkillsLayout from './SkillsLayout/SkillsLayout';
import Expertise from './Expertise/Expertise';

interface IProps {
    animate: boolean;
}

const skills: FC<IProps> = props => {
    const technologies = {
        java: 80,
        javascript: 80,
        typescript: 85,
        html: 95,
        css: 90,
        scss: 85,
        react: 80,
        angular: 85,
        'spring boot': 65,
        express: 65,
        aws: 70,
        circleci: 65,
    };
    return (
        <>
            <SkillsLayout animate={props.animate} firstHalfHeader="What" secondHalfHeader="i work on">
                <Expertise />
            </SkillsLayout>
            <SkillsLayout animate={props.animate} firstHalfHeader="WHAT" secondHalfHeader="I KNOW">
                {Object.keys(technologies).map(technology => (
                    <Skill
                        key={technology}
                        animate={props.animate}
                        skill={technology}
                        percent={technologies[technology]}
                    />
                ))}
            </SkillsLayout>
        </>
    );
};

export default skills;
