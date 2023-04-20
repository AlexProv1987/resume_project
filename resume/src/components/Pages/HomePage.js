import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact, faBootstrap, faAws, faCss3Alt, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Tooltip } from 'react-tooltip';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
const HomePage = () => {
    return (
        <Container className="main-content m-4 text-white">
            <Row>
                <Col className="pb-2" md={{ span: 4, offset: 4 }}>
                    <img className="my-pic rounded-circle" width="250" height="250" src='./mePhoto.png' />
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 6 }} className="text-wrap">
                    <h3>
                        <b>Alex Provenzano</b>
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 6 }} className="text-wrap">
                    <h4>
                        Full Stack Web Development
                    </h4>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 6 }} className="text-wrap">
                    <p>
                        <b>Who Am I? </b>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        <b>My Goals? </b>
                        To obtain a position working with Python, Django, React and Bootstrap in a reputable organization
                        that will allow me to utilize my skills, knowledge,
                        and experience to contribute to the growth and success of the company.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 6 }}>
                    <p><b>Profiencies? </b></p>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 6 }}>
                    <FontAwesomeIcon data-tooltip-id="tool-tip" data-tooltip-content="CSS" icon={faCss3Alt} size="2xl" className="f-icon-spin p-2" />
                    <FontAwesomeIcon data-tooltip-id="tool-tip" data-tooltip-content="BootStrap" icon={faBootstrap} size="2xl" className="f-icon-spin p-2" />
                    <FontAwesomeIcon data-tooltip-id="tool-tip" data-tooltip-content="AWS Elastic BeanStalk" icon={faAws} size="2xl" className="f-icon-spin p-2" />
                    <FontAwesomeIcon data-tooltip-id="tool-tip" data-tooltip-content="React" icon={faReact} size="2xl" className="f-icon-spin p-2" />
                    <FontAwesomeIcon data-tooltip-id="tool-tip" data-tooltip-content="Python / Django Framework" icon={faPython} size="2xl" className="f-icon-spin p-2" />
                    <FontAwesomeIcon data-tooltip-id="tool-tip" data-tooltip-content="GitHub" icon={faGithub} size="2xl" className="f-icon-spin p-2" />
                </Col>
            </Row>
            <Row className="pb-4">
                <Col md={{ span: 4, offset: 6 }}>
                    <Button as={Link} to="/projects" className='m-2 btn btn-sm btn-light'>Projects</Button>
                    <Button as={Link} to="/resume" className='btn btn-sm btn-light'>Resume</Button>
                </Col>
            </Row>
            <Tooltip id='tool-tip' />
        </Container>
    );
}

export default HomePage;
