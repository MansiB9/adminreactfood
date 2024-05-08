import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap'

function OrderList() {
  const [allorder, setallorder] = useState([]);
  const [showmodel, setshowmodel] = useState(false);
  const [selIdx, setselIdx] = useState(-1);

  const [OrderDate, setOrderDate] = useState("")
  const [OrderAmount, setOrderAmount] = useState("")
  const [ItemNo, setItemNo] = useState("")
  const [OrderItem, setOrderItem] = useState("")
  const [OrderStatus, setOrderStatus] = useState("")

  function onShowModal() {
    setshowmodel(true)
  }
  function onHideModel() {
    setshowmodel(false)
  }

  //for show get method using axios

  useEffect(() => {
    axios.get("http://localhost:5000/order")
    .then((result) => {
      setallorder(result.data)
    })
    .catch((err) => {
      console.log(err)
    }) 
  }, [])

  return (
    <div>
      <h2>All Orders</h2>
      <Container>
        <Row>
          {
            allorder.map((order,Idx)=>{
              return(
                <Col lg={3} sm={12} md={6} className='mt-5'>
                  <Card>
                  <Card.Body>
                    <h5>{order.OrderDate}</h5>
                    <h5>{order.OrderAmount}</h5>
                    <h5>{order.ItemNo}</h5>
                    <h5>{order.OrderItem}</h5>
                    <h5>{order.OrderStatus}</h5>
                  </Card.Body>

                  <Card.Footer>
                    <Button onClick={()=>{onShowModal()
                                        setselIdx(Idx)
                                        setOrderDate(allorder[Idx].OrderDate)
                                        setOrderAmount(allorder[Idx].OrderAmount)
                                        setItemNo(allorder[Idx].ItemNo)
                                        setOrderItem(allorder[Idx].OrderItem)
                                        setOrderStatus(allorder[Idx].OrderStatus)
                                        }}>Update</Button>
                  </Card.Footer>
                  </Card>
                </Col>
              )
            })
          }
        </Row>

        <Modal show={showmodel} onHide={onHideModel}>
          <Modal.Header closeButton>Update Order</Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label>Order Amount</Form.Label>
              <Form.Control type='Number' value={OrderAmount}/>
         
              <Form.Label>Order Item</Form.Label>
            <Form.Control type='Number' value={OrderItem}/>

            <Form.Label>Order Status</Form.Label>
            <Form.Control type='text' value={OrderStatus}/>

            <Form.Label>ItemNo</Form.Label>
            <Form.Control type='Number' value={ItemNo}/>

            </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='danger' onClick={() => onHideModel}>Cancel</Button>
            </Modal.Footer>
        </Modal>
      </Container>
    </div>
  )
}

export default OrderList