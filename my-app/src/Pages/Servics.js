import React from 'react'
import {Jumbotron,Button,Card,Container,Row,Col} from 'react-bootstrap'
import Menu from '../Components/Menu'



function Servics() {
    return (
        <>
<Menu>
        
                             <Jumbotron>
                       <h1>Service Me!</h1>
                       <p>
                         This is a simple hero unit, a simple jumbotron-style component for calling
                         extra attention to featured content or information.
                       </p>
                       <p>
                         <Button variant="primary " >Learn more</Button>
                       </p>
                     </Jumbotron>
                     <Container >
                         <Row>
                             <Col className='lg-4 border-color-red'>
                     
                     <Card>
                       <Card.Body className='card-body'>
                         <Card.Title className=''>Card Title</Card.Title>
                         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                         <Card.Text>
                           Some quick example text to build on the card title and make up the bulk of
                           the card's content.
                         </Card.Text>
                         <Card.Link href="#">Card Link</Card.Link>
                         <Card.Link href="#">Another Link</Card.Link>
                       </Card.Body>
                     </Card>
                     </Col>
                     
                     <Col className='lg-4'>
                     <Card>
                       <Card.Body>
                         <Card.Title>Card Title</Card.Title>
                         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                         <Card.Text>
                           Some quick example text to build on the card title and make up the bulk of
                           the card's content.
                         </Card.Text>
                         <Card.Link href="#">Card Link</Card.Link>
                         <Card.Link href="#">Another Link</Card.Link>
                       </Card.Body>
                     </Card>
                     </Col>
                     
                     <Col className='lg-4'>
                     <Card>
                       <Card.Body>
                         <Card.Title>Card Title</Card.Title>
                         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                         <Card.Text>
                           Some quick example text to build on the card title and make up the bulk of
                           the card's content.
                         </Card.Text>
                         <Card.Link href="#">Card Link</Card.Link>
                         <Card.Link href="#">Another Link</Card.Link>
                       </Card.Body>
                     </Card>
                     </Col>
                     
                     <Col className='lg-4'>
                     <Card>
                       <Card.Body>
                         <Card.Title>Card Title</Card.Title>
                         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                         <Card.Text>
                           Some quick example text to build on the card title and make up the bulk of
                           the card's content.
                         </Card.Text>
                         <Card.Link href="#">Card Link</Card.Link>
                         <Card.Link href="#">Another Link</Card.Link>
                       </Card.Body>
                     </Card>
                     </Col>
                     </Row>
                     </Container>


                     
                  </Menu>   
               
        </>
    )
}

export default Servics
