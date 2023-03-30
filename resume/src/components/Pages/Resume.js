import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

const Resume = () => {
  return (
    <Container fluid='true' className='main-content m-4'>
      <Container className='resume-content'>
        <Row className='d-flex resume-row resume-header text-center'>
          <h2 className='name-field'>John 'Alex' Provenzano</h2>
          <h4>217 N Cherry St. Garder,KS 66030</h4>
          <h4>Cell: (816) 663-1496</h4>
          <h4>Email: alex.provenzano87@gmail.com </h4>
        </Row>
        <hr/>
        <Row className='resume-row resume-exp text-center'>
          Experience Support Software Engineer with a demonstrated history of working in the information
          technology and service industry. Skilled in Python,Django Framework C#, React, CSS, JavaScript, SQL Dialects, PostGresSQL,
          and CCL (CernerProprietary Language). Strong account management skilled with high level of customer service
          satisfaction. Proficient in the Software Development Life Cycle.
        </Row>
        <hr/>
        <Row className='resume-row text-center'>
          <h4>Employment Experience</h4>
        </Row>
        {/*Company Section*/}
        <hr/>
        <Row className='resume-row'>
          <h5>Cerner/Oracle Health</h5>
        </Row>
        <hr/>
        <Row className='resume-row'>
          <Col md={8}>
            <h5>Support Services Owner</h5>
          </Col>
          <Col md={4} className='text-end'>
            <h5>07/02/21 - Present</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Responsible for maintaining the Client Cerner Relationship.</li>
              <li>Following code defects reported by support associates to have them delivered by
                development teams to the client.</li>
              <li>Worked closely with client-side resources and Cerner side resources to manage overall code
                upgrades for the client.</li>
              <li>Developed two internal tools for other Support Service Owners to use to track metrics and
                follow up on problem issues. Both tools developed using C# (More detail on the tools
                developed can be provided upon request)</li>
            </ul>
          </Col>
        </Row>
        <Row className='resume-row'>
          <Col md={8}>
            <h5>Production Software Engineer</h5>
          </Col>
          <Col md={4} className='text-end'>
            <h5>01/02/20- 07/01/21</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Responsible for investigating code functionality and how it pertains to the user workflow.</li>
              <li>4 th Highest producing Engineer in Patient Accounting Department.</li>
              <li>Associate of the Quarter 3 of 2020.</li>
              <li>Mentor new analyst in Patient Accounting Department.</li>
              <li>Modified Code Base to correct defects.</li>
              <li>High Client Satisfactions Ratings.</li>
              <li>Met and Exceeds company productivity metrics.</li>
              <li>Highly Valued Plus Rating during review cycle.</li>
              <li>Working within a Linux based environment.</li>
              <li>Work in a team-based environment.</li>
            </ul>
          </Col>
        </Row>
        <Row className='resume-row'>
          <Col md={8}>
            <h5>Technical Solutions Analyst</h5>
          </Col>
          <Col md={4} className='text-end'>
            <h5>1/03/19-1/01/20</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Responsible for identifying high level software issues based on workflow knowledge.</li>
              <li>Promotion to Software Engineer after eight months.</li>
            </ul>
          </Col>
        </Row>
        {/*End Company Section*/}
        {/*Company Section*/}
        <hr/>
        <Row className='resume-row'>
          <h5>Olathe Public School District</h5>
        </Row>
        <hr/>
        <Row className='resume-row'>
          <Col md={8}>
            <h5>Substitute Teacher</h5>
          </Col>
          <Col md={4} className='text-end'>
            <h5>12/2015-12/2019</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Maintain classrooms for students of all ages.</li>
              <li>Trouble shoot problems as they arise in the classroom.</li>
              <li>Utilize strong interpersonal communication skills.</li>
            </ul>
          </Col>
        </Row>
        {/*End Company Section*/}
        {/*Company Section*/}
        <hr/>
        <Row className='resume-row'>
          <h5>Johnson County Sheriffs Office</h5>
        </Row>
        <hr/>
        <Row className='resume-row'>
          <Col md={8}>
            <h5>Deputy Sheriff</h5>
          </Col>
          <Col md={4} className='text-end'>
            <h5>05/20/10-12/2015</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Coordinate and manage inmates.</li>
              <li>Member of Segregation Team working with maximum security inmates.</li>
              <li>Crisis Intervention Certified.</li>
            </ul>
          </Col>
        </Row>
        <hr/>
        {/*End Company Section*/}
        {/*Education Section */}
        <Row className='resume-row'>
          <h5>Education</h5>
        </Row>
        <hr/>
        <Row className='resume-row'>
            <p>Friends University - Wichita, KS</p>
        </Row>
        <Row className='resume-row'>
          <p>Bachelor of Science</p>
        </Row>
        <Row className='resume-row'>
          <p>Major: Computer Information Systems</p>
        </Row>
        <Row className='resume-row'>
          <p>Minor: Software Development</p>
        </Row>
        <Row className='resume-row'>
          <p>Overall GPA 3.7, Major GPA 4.0 out of 4.0 scale</p>
        </Row>
        {/*End Enducation Section */}
      </Container>
    </Container>
  );
}

export default Resume;