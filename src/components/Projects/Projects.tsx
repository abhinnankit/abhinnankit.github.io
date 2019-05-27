import React, { useLayoutEffect, useRef, useState } from 'react';
import Project from './Project/Project';
import classes from './Projects.module.scss';
import styleItRightUrl from '../../assets/images/style_it_right/1-min.png';
import bostonEventsUrl from '../../assets/images/boston_events/1-min.png';

const Projects = React.memo(() => {
    const projects = [
        {
            title: 'Style It Right',
            technologies: 'Angular 4 + Express.js',
            imgUrl: styleItRightUrl,
            animateLate: false,
            about: 'E-commerce',
            description:
                'Style It Right is an online shopping website that facilitate online purchase of clothes. ' +
                'It was my final project for the web design course. Built with Angular 4, Express.js and' +
                ' MongoDb.',
        },
        {
            title: 'Boston Events',
            technologies: 'Angular 5 + Node.js',
            imgUrl: bostonEventsUrl,
            animateLate: true,
            about: 'Event organization',
            description:
                'Boston Events is an event management and ticketing website, where users can browse, create,' +
                ' and promote local events. An academic project on my credit developed using Angular 5, Node.js and' +
                ' MongoDb.',
        },
    ];
    const moreSection = [classes.More, 'col-12'];
    const projectRef = useRef(null);
    const threshold = window.innerHeight / 1.6 - 100;
    const [animate, setAnimate] = useState(false);
    const scrollListener = () => {
        console.log(threshold + ' ' + projectRef.current.getBoundingClientRect().top);
        if (!animate && projectRef.current && projectRef.current.getBoundingClientRect().top < threshold) {
            setAnimate(true);
            window.removeEventListener('scroll', scrollListener);
        }
    };
    useLayoutEffect(() => {
        window.addEventListener('scroll', scrollListener);
        // eslint-disable-next-line
    }, []);
    if (animate) {
        moreSection.push(classes.Visible);
    }
    return (
        <>
            <div className={classes.Projects} ref={projectRef}>
                <div className={'col-lg-1 ' + classes.Gutter} />
                {projects.map(project => (
                    <Project
                        key={project.title}
                        animate={animate}
                        imgUrl={project.imgUrl}
                        title={project.title}
                        description={project.description}
                        about={project.about}
                        technologies={project.technologies}
                        animateLate={project.animateLate}
                    />
                ))}
            </div>
            <div className={moreSection.join(' ')}>
                More projects on&nbsp;
                <a href="https://github.com/abhinn-ankit?tab=repositories" rel="noopener noreferrer" target="_blank">
                    github
                </a>
                .
            </div>
        </>
    );
});

export default Projects;
