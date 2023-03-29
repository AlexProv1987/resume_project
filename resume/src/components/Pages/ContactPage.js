import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhoneVolume, faEnvelope, faAddressBook, faBriefcase, faShare } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
const ContactPage = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [subBounce, setSubBounce] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [subIcon, setSubIcon] = useState(faShare)

  const SubmitHover = (e) => {
    if (!submitting){
      setSubBounce(true)
    }
  }

  const SubmitLeaveHover = (e) => {
    setSubBounce(false)
  }

  const SubmitForm = async (e) => {
    /*
    well use a django rest back end to make a call to it here to send emails for fun
    change value of submitting and the submit icon while sending
    */
  }

  const TextChange = (e) => {
    switch(e.target.id){
      case 'name':       
        setName(e.target.value)
        break;
      case 'email':      
        setEmail(e.target.value)
        break;
      case 'phone':     
        setPhone(e.target.value)
        break;
      case 'company':      
        setCompany(e.target.value)
        break;
      case 'message':        
        setMessage(e.target.value)
        break;
      default:
        break;
    }
  }

  return (
    <Container fluid='true' className="main-content m-4">
      <Row className='text-center justify-content-center m-5'>
        <Col md={{ span: 4, offset: 0 }} className='pt-4'>
          <Card className='card-content'>
            <Card.Header as='h4'>Contact Me</Card.Header>
            <Card.Body>
              <Form>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="person-fa">
                    <FontAwesomeIcon icon={faUser} size="xl" />
                  </InputGroup.Text>
                  <Form.Control
                    id='name'
                    value={name}
                    onChange={e => TextChange(e)}
                    placeholder="John Doe"
                    aria-label="Name"
                    aria-describedby="person-fa"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="email-fa">
                    <FontAwesomeIcon icon={faAddressBook} size="xl" />
                  </InputGroup.Text>
                  <Form.Control
                   id='email'
                   value={email}
                    onChange={e => TextChange(e)}
                    placeholder='jDoe@email.com'
                    aria-label="Email"
                    area-aria-describedby='email-fa'
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="phone-fa">
                    <FontAwesomeIcon icon={faPhoneVolume} size="xl" />
                  </InputGroup.Text>
                  <Form.Control
                   id='phone'
                   value={phone}
                    onChange={e => TextChange(e)}
                    placeholder='1-888-222-2222'
                    aria-label="Phone"
                    aria-describedby='phone-fa' />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="company-fa">
                    <FontAwesomeIcon icon={faBriefcase} size="xl" />
                  </InputGroup.Text>
                  <Form.Control
                   id='company'
                   value={company}
                    onChange={e => TextChange(e)}
                    placeholder='JDoe Company'
                    aria-label="Company"
                    aria-describedby='company-fa' />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} size="xl" />
                  </InputGroup.Text>
                  <Form.Control
                  rows='6'
                   id='message'
                   value={message}
                    onChange={e => TextChange(e)}
                    placeholder='Your Message . . .'
                    as="textarea"
                    aria-label="Message" />
                </InputGroup>
              </Form>
              <Row className='justify-content-center'>
                <Col>
                  <Button className='w-25' onMouseOver={()=>SubmitHover()} onMouseLeave={()=>SubmitLeaveHover()} variant='btn-sm bg-light' id='submitForm' type='submit' onClick={() => SubmitForm()}>
                    <FontAwesomeIcon bounce={subBounce}  icon={subIcon} size="xl" />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;