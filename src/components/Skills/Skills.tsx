import React, { FC } from 'react';
import Skill from './Skill/Skill';
import SkillsLayout from './SkillsLayout/SkillsLayout';
import Card from './Card/Card';
import classes from './Skills.module.scss';
import { ReactComponent as NetworkWired } from '../../assets/images/svg/networkwired.svg';
import { ReactComponent as Laptop } from '../../assets/images/svg/laptop.svg';
import { ReactComponent as Cloud } from '../../assets/images/svg/cloud.svg';

interface IProps {
    animate: boolean;
}

interface IDevType {
    icon: any;
    headerPart1: string;
    headerPart2: string;
    description: string;
}

const skills: FC<IProps> = React.memo(props => {
    const devTypes: IDevType[] = [
        {
            icon: <NetworkWired />,
            headerPart1: 'Backend',
            headerPart2: 'Development',
            description: 'I build server-side applications using best-in practice technologies & frameworks.',
        },
        {
            icon: <Laptop />,
            headerPart1: 'Frontend',
            headerPart2: 'Development',
            description: 'I build server side applications using best-in practice technologies & frameworks.',
        },
        {
            icon: <Cloud />,
            headerPart1: 'Cloud',
            headerPart2: 'Computing',
            description: 'I build server side applications using best-in practice technologies & frameworks.',
        },
    ];
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
            <SkillsLayout
                animate={props.animate}
                colClass="col-12 col-lg-6"
                firstHalfHeader="EXPER"
                secondHalfHeader="TISE"
            >
                {devTypes.map((devType: IDevType) => {
                    const keys = Object.keys(devType);
                    return (
                        <Card
                            key={devType[keys[1]]}
                            animate={props.animate}
                            icon={devType[keys[0]]}
                            headerPart1={devType[keys[1]]}
                            headerPart2={devType[keys[2]]}
                            description={devType[keys[3]]}
                        />
                    );
                })}
            </SkillsLayout>
            <div className="col-lg-1 col-md-1" />
            <SkillsLayout
                animate={props.animate}
                colClass="col-lg-5 col-md-10 col-12"
                firstHalfHeader="TECHNO"
                secondHalfHeader="LOGIES"
            >
                <div className={classes.SkillWrapper}>
                    {Object.keys(technologies).map(technology => (
                        <Skill
                            key={technology}
                            animate={props.animate}
                            skill={technology}
                            percent={technologies[technology]}
                        />
                    ))}
                </div>
            </SkillsLayout>
        </>
    );
});

export default skills;
