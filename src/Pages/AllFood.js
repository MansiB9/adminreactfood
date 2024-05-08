import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import Food from '../Component/Food';

function AllFood() {
  const [allfood, setallfood] = useState([])
  const [showmodel, setshowmodel] = useState(false);
  const [selIdx, setselIdx] = useState(-1)

  const [foodId, setFoodId] = useState("")
  const [fname, setFoodName] = useState("")
  const [ftype, setFoodType] = useState("")
  const [fcategory, setFoodCategory] = useState("")
  const [FoodPrice, setFoodPrice] = useState("")
  const [fimage, setFoodImage] = useState("")
  const [fisavailable, setFoodIsAvailable] = useState("")

  function onShowModel() {
    setshowmodel(true)
  }
  function onHideModel() {
    setshowmodel(false)
  }

  //for show get method using axios

  useEffect(() => {
    axios.get("http://localhost:5000/food")
      .then((result) => {
        setallfood(result.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  //for delete food 
  function deletefood(foodId) {
    axios.delete("http://localhost:5000/delfood",{data:{id:foodId}})
      .then((result) => {
        // alert("Food Deleted")
        window.location.reload(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //for update food
  function updatefood() {
    const upfood = {
      id: foodId,
      fprice: FoodPrice
    }

    axios.post("http://localhost:5000/updateprice", upfood)
      .then((updatefood) => {
        onHideModel()
        alert("Food Updated")
        window.location.reload(false)
      })
      .catch((err) => {
        console.log(err)
      });
  }



  return (
    <div>
      <h1>All Food</h1>

      <Container>
        <Row>
          {
            allfood.map((foods, Idx) => {
              return (
                <Col lg={3} sm={12} md={6} className='mt-5'>
                  <Card className='data'>
                    <Card.Header className='Cimg'>
                    <Card.Img className='style' src={`http://localhost:5000${foods.FoodImage}`} />
                    </Card.Header>
                    
                    <Card.Body>
                      <h3 className='w-100 text-start ms-4 mb-3'>{foods.FoodName}</h3>
                      <h5 className='w-100 ms-4 mb-3'>{foods.FoodType}</h5>
                      <h5 className='w-100 ms-4 mb-3'>{foods.FoodCategory}</h5>
                      <h5 className='w-100 ms-4 mb-3'>{foods.FoodPrice}</h5>
                      <h5 className='w-100 ms-4 mb-3'>{foods.FoodIsAvailable ? "Available" : "Not Available"}</h5>
                    </Card.Body>

                    <Card.Footer>
                      <Button className='button w-50' variant='outline-primary' size='sm' onClick={() => {
                        onShowModel()
                        setselIdx(Idx)
                        setFoodName(allfood[Idx].FoodName)
                        setFoodType(allfood[Idx].FoodType)
                        setFoodCategory(allfood[Idx].FoodCategory)
                        setFoodImage(allfood[Idx].FoodImage)
                        setFoodPrice(allfood[Idx].FoodImage)
                        setFoodIsAvailable(allfood[Idx].FoodIsAvailable)
                        setFoodId(allfood[Idx]._id)
                      }}>Update</Button>

                      <Button className='button w-50' varient='outline-danger' size='sm'
                        onClick={() => deletefood(foods._id)}>Delete</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              )
            })
          }
        </Row>

        <Modal show={showmodel} onHide={onHideModel}>
          <Modal.Header closeButton>Update Food</Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label>Food Name</Form.Label>
              <Form.Control type='text' value={fname} />

              <Form.Label>Food Type</Form.Label>
              <Form.Select value={ftype}>
                <option>Select</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
              </Form.Select>

              <Form.Label>Food Category</Form.Label>
              <Form.Select value={fcategory} />
              <option>Select</option>
              <option value="Chinese">Chinese</option>
              <option value="Indian">Indian</option>
              <option value="Punjabi">Punjabi</option>

              <Form.Label>Food Price</Form.Label>
              <Form.Control type='Number' value={FoodPrice} />

              <Form.Label>FoodImage</Form.Label>
              <Form.Control type='file' value={fimage} />

              <Form.Label>FoodIsAvailable</Form.Label>
              <Form.Control type='Number' value={fisavailable} />

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => updatefood}>Update</Button>
            <Button variant='danger' onClick={() => onHideModel}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  )
}

export default AllFood