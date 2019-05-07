import React from 'react';
import classes from './Footer.module.scss';
import SocialLinks from './SocialLinks/SocialLinks';
import Container from '../../hoc/Container/Container';
import Row from '../../hoc/Row/Row';
import { faGithub, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const footer = () => {
    return (
        <footer className={classes.FooterWrapper}>
            <Container>
                <Row style={{ position: 'relative' }}>
                    <div className={classes.Footer}>
                        <div className={classes.FooterIconsWrapper}>
                            <SocialLinks icon={faLinkedinIn} link="https://www.linkedin.com/in/abhinn-ankit/" />
                            <SocialLinks icon={faGithub} link="https://github.com/abhinn-ankit" />
                            <SocialLinks
                                icon={faStackOverflow}
                                link="https://stackoverflow.com/users/8616210/abhinnankit"
                            />
                        </div>
                        <div className={classes.FooterAbout}>&copy; ABHINN ANKIT 2019</div>
                    </div>
                </Row>
            </Container>
        </footer>
    );
};

export default footer;
