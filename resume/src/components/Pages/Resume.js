import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

const Resume = () => {
  return (
    <Container fluid='true' className='main-content mb-4'>
      <Row className='justify-content-center mt-2 mb-2'>
        <Col md={{ span: 5, offset: 0 }}>
          <Card className='text-center'>
            <Card.Header as='h2'>
              John 'Alex' Provenzano
            </Card.Header>
          </Card>
        </Col>
      </Row>

      <Row className='justify-content-center pt-4'>
        <Col sm={8} md={6} className='mb-4 d-flex align-items-stretch'>
          <Card>
            <Card.Header className='text-center' as='h4'>My Journey</Card.Header>
            <Card.Body className='text-white'>
              <Row>
                <p className='pt-1'>Experience Support Software Engineer with a demonstrated history of working in the information
                  technology and service industry. Skilled in Python,Django Framework C#, React, CSS, JavaScript, SQL Dialects, PostGresSQL,
                  and CCL (CernerProprietary Language). Strong account management skilled with high level of customer service
                  satisfaction. Proficient in the Software Development Life Cycle.</p>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={8} md={6} className='mb-4 d-flex align-items-stretch'>
          <Card>
            <Card.Header className='text-center' as='h4'>Education</Card.Header>
            <Card.Body className='text-white'>
              <Row >
                <Col sm={8} md={6} className='text-start'>
                  <p><b>Friends University</b></p>
                </Col>
                <Col sm={8} md={6} className='text-end'>
                  <p><b>Wichita, KS</b></p>
                </Col>
              </Row>
              <Row>
                <p>Bachelor of Science</p>
                <p>Major: Computer Information Systems</p>
                <p>Minor: Software Development</p>
                <p>Overall GPA 3.7, Major GPA 4.0 out of 4.0 scale</p>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
        
        <Row className='p-2 mb-4'>
          <Card className='p-0'>
            <Card.Header as='h4' className='text-center'>Employment</Card.Header>
            <Card.Body fluid='true' className='text-white'>

              <Row>
                <h5>Cerner/Oracle Health</h5>
              </Row>
              <hr />
              <Row>
                <Col sm={8} md={6} className='text-start'>
                  <p><b>Support Services Owner -- 07/02/21-Present</b></p>
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

              <Row>
                <Col sm={8} md={6} className='text-start'>
                  <p><b>Software Engineer -- 01/02/20-07/01/21</b></p>
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
              <Row>
                <Col>
                  <p><b>Technical Solutions Analyst -- 1/03/19-1/01/20</b></p>
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

              <hr />

              <Row>
                <h5>Olathe Public School District</h5>
              </Row>
              <hr />
              <Row>
                <Col sm={8} md={6} className='text-start'>
                  <p><b>Substitute Teacher -- 12/2015-12/2019</b></p>
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
              <hr />
              <Row>
                <h5>Johnson County Sheriffs Office</h5>
              </Row>
              <hr />
              <Row>
                <Col sm={8} md={6} className='text-start'>
                  <p><b>Deputy Sheriff -- 05/20/10-12/2015</b></p>
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

            </Card.Body>
          </Card>
        </Row>
    </Container>
  );
}

export default Resume;