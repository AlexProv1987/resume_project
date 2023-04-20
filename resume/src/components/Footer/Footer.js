import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhoneVolume, faMessage } from '@fortawesome/free-solid-svg-icons'
// bounce={bounceToggle} onMouseOver={() => mouseIn()} onMouseOut={() => mouseOut()}
import { useState } from 'react';
const Footer = () => {
    let [ldToggle, setLdToggle] = useState(false)
    let [gitToggle, setGitToggle] = useState(false)
    let [phoneToggle, setPhoneToggle] = useState(false)
    let [mailToggle, setMailToggle] = useState(false)

    return (
        <Container fluid ='true'>
        <footer className="py-4 bg-dark text-white-50">
                <Row xs='auto' className="justify-content-center">
                    <Col>
                        <Nav.Link onMouseOver={() => setLdToggle(true)} onMouseOut={() => setLdToggle(false)} href='https://www.linkedin.com/in/john-provenzano-953067169/'>
                            <FontAwesomeIcon className="test" icon={faLinkedin} size="lg" bounce={ldToggle} />
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link onMouseOver={() => setGitToggle(true)} onMouseOut={() => setGitToggle(false)} href='https://github.com/AlexProv1987'>
                            <FontAwesomeIcon icon={faGithub} size="lg" bounce={gitToggle} />
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link onMouseOver={() => setPhoneToggle(true)} onMouseOut={() => setPhoneToggle(false)} href="tel:PHONE_NUM">
                            <FontAwesomeIcon icon={faPhoneVolume} size="lg" bounce={phoneToggle} /> 1-816-663-1496
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link onMouseOver={() => setMailToggle(true)} onMouseOut={() => setMailToggle(false)}>
                            <FontAwesomeIcon icon={faMessage} size="lg" bounce={mailToggle} /> alex.provenzano87@gmail.com
                        </Nav.Link>
                    </Col>
                </Row>
        </footer>
        </Container>
    );
}
export default Footer;
