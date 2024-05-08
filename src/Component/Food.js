import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom'
import AddFood from '../Pages/AddFood'
import AllFood from '../Pages/AllFood'
import CustomerList from '../Pages/CustomerList'
import Dashboard from '../Pages/Dashboard'
import OrderList from '../Pages/OrderList'

function Food() {
  return (
    <div>
       <Container fluid>
        <Row className='mcontainer'>
          <Col lg={2} className='mnav'>
            <Nav className='flex-column'>
              <Nav.Link>
                <Link to="/" className='mlink'>AddFood</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/all"className='mlink'>AllFood</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/customer" className='mlink'>CustomerList</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/dashboard" className='mlink'>Dashboard</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/order" className='mlink'>Order List</Link>
              </Nav.Link>
            </Nav>
          </Col>
          <Col lg={10}>
            <Routes>
              <Route path='/' element={<AddFood/>}></Route>
              <Route path='/all' element={<AllFood/>}></Route>
              <Route path='/customer' element={<CustomerList/>}></Route>
              <Route path='/dashboard' element={<Dashboard/>}></Route>
              <Route path='/order' element={<OrderList/>}></Route>
            </Routes>
          </Col>
        </Row>
       </Container>
    </div>
  )
}

export default Food