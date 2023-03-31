import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons'
import { faPython, faReact, faBootstrap, faAws, faCss3Alt, faGithub, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
const ProjectPage = () => {
  return (
    <Container fluid='true' className='main-content m-5'>
      <Row className='justify-content-center text-center m-5'>
        <Col md={{ span: 3, offset: 0 }}>
      <Card>
        <Card.Header as='h4'>Code Lab</Card.Header>
      </Card>
      </Col>
      </Row>
      <Row className='text-center justify-content-center'>
        <Col sm={6} md={6} className='pb-4' >
          <Card className='card-content'>
            <Card.Header as='h4'>Billing Buddy</Card.Header>
            <Card.Body className='text-white'>
            <Card.Title className='pt-2'>Description</Card.Title>
            <Card.Text className='text-wrap'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis eget velit. Vitae tortor
              condimentum lacinia quis vel. Donec enim diam vulputate ut. Dolor morbi non arcu risus quis varius
              quam quisque. Egestas sed sed risus pretium. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi.
              Arcu odio ut sem nulla pharetra diam sit. Pharetra massa massa ultricies mi quis. Lorem ipsum dolor sit amet.
            </Card.Text>
            <Row>
              <Col>
                <Card.Title>Languages</Card.Title>
                <Card.Text>
                  <FontAwesomeIcon data-tooltip-id="tool-tip" data-tooltip-content="Python/Django Framework" icon={faPython} size="2xl" className="f-icon-spin p-2"/>
                  <FontAwesomeIcon data-tooltip-id="tool-tip" data-tooltip-content="JavaScript" icon={faSquareJs} size="2xl" className="f-icon-spin p-2"/>
                  <FontAwesomeIcon data-tooltip-id="tool-tip" data-tooltip-content="Bootstrap" icon={faBootstrap} size="2xl" className="f-icon-spin p-2"/>
                </Card.Text>
              </Col>
              <Col>
                <Card.Title>Hosting</Card.Title>
                <Card.Text>
                <FontAwesomeIcon data-tooltip-id="tool-tip" data-tooltip-content="AWS Elastic BeanStalk" icon={faAws} size="2xl" className="f-icon-spin p-2"/>
                </Card.Text>
              </Col>
            </Row>
            <Row className='pt-2'>
              <Col>
                <Card.Title>GitHub</Card.Title>
                <Card.Text>
                <a data-tooltip-id="tool-tip" data-tooltip-content="Visit Repository" href='https://github.com/AlexProv1987/invoice_project'><FontAwesomeIcon icon={faGithub} size="2xl" className="p-2 f-icon-pop"/></a>
                </Card.Text>
              </Col>
              <Col>
                <Card.Title>Visit Site</Card.Title>
                <Card.Text>
                <a data-tooltip-id="tool-tip" data-tooltip-content="Clicky!" href='https://invapptest.aprovtestdmns.com/accounts/login/'><FontAwesomeIcon icon={faLink} size="2xl" className="p-2 f-icon-pop"/></a> 
                </Card.Text>
              </Col>
            </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6} className='pb-4'>
          <Card className='card-content'>
            <Card.Header as='h4' className='card'>Talent Trekker</Card.Header>
            <Card.Body className='text-white'>
            <Card.Title className='pt-2'>Description</Card.Title>
            <Card.Text className='text-wrap'>
              Trekking towards your dream job with a standout resume. sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis eget velit. Vitae tortor
              condimentum lacinia quis vel. Donec enim diam vulputate ut. Dolor morbi non arcu risus quis varius
              quam quisque. Egestas sed sed risus pretium. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi.
              Arcu odio ut sem nulla pharetra diam sit. Pharetra massa massa ultricies mi quis. Lorem ipsum dolor sit amet.
            </Card.Text>
            <Row>
              <Col>
                <Card.Title>Languages</Card.Title>
                <Card.Text>
                <FontAwesomeIcon data-tooltip-id="tool-tip" data-tooltip-content="React/JSx" icon={faReact} size="2xl" className="f-icon-spin p-2"/>
                <FontAwesomeIcon data-tooltip-id="tool-tip" data-tooltip-content="JavaScript" icon={faSquareJs} size="2xl" className="f-icon-spin p-2"/>
                <FontAwesomeIcon data-tooltip-id="tool-tip" data-tooltip-content="Bootstrap" icon={faBootstrap} size="2xl" className="f-icon-spin p-2"/>
                </Card.Text>
              </Col>
              <Col>
                <Card.Title>Hosting</Card.Title>
                <Card.Text>
                <FontAwesomeIcon data-tooltip-id="tool-tip" data-tooltip-content="AWS Elastic BeanStalk" icon={faAws} size="2xl" className="f-icon-spin p-2"/>
                </Card.Text>
              </Col>
            </Row>
            <Row className='pt-2'>
            <Col>
                <Card.Title>GitHub</Card.Title>
                <Card.Text>
                <a data-tooltip-id="tool-tip" data-tooltip-content="Visit Repository" href='https://github.com/AlexProv1987/resume_project'><FontAwesomeIcon icon={faGithub} size="2xl" className="f-icon-pop p-2"/></a>
                </Card.Text>
              </Col>
              <Col>
                <Card.Title>Visit Site</Card.Title>
                <Card.Text>
                <a data-tooltip-id="tool-tip" data-tooltip-content="Clicky!" href='#'><FontAwesomeIcon icon={faLink} size="2xl" className="p-2 f-icon-pop"/></a>
                </Card.Text>
              </Col>
            </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Tooltip id='tool-tip'/>
    </Container>
  );
}

export default ProjectPage;