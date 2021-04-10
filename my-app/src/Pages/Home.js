import React from 'react'
import {Jumbotron,Button,Card,Container,Row,Col} from 'react-bootstrap'
import Menu from '../Components/Menu'



function Home() {
    return (
        <>
      
<Menu>
                             
        <Jumbotron>
  <h1 className='FistTag'>Home Me!</h1>
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
        <Col className='lg-4 '>
        <div className="card">
  <div className="card-body">
    <h5 className="card-title">This is Home</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className='btn btn-success mr-2'>Add To</button>
    <button className='btn btn-success'>Order To</button>
  </div>
</div>

</Col>

<Col className='lg-4'>

<div className="card">
  <div className="card-body">
    <h5 className="card-title">This is About</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className='btn btn-success mr-2'>Add To</button>
    <button className='btn btn-success'>Order To</button>
  </div>
</div>
</Col>

<Col className='lg-4'>
<div className="card">
  <div className="card-body">
    <h5 className="card-title">This is Contact</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className='btn btn-success mr-2'>Add To</button>
    <button className='btn btn-success'>Order To</button>
  </div>
</div>
</Col>

<Col className='lg-4'>
<div className="card">
  <div className="card-body">
    <h5 className="card-title">This is Services</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className='btn btn-success mr-2'>Add To</button>
    <button className='btn btn-success'>Order To</button>
  </div>
</div>
</Col>
</Row>
</Container>

</Menu>

        </>
    )
}

export default Home
