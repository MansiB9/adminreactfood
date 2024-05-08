import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import Food from '../Component/Food'


function AddFood() {
  const [FoodName, setFoodName] = useState("")
  const [FoodType, setFoodType] = useState("")
  const [FoodCategory, setFoodCategory] = useState("")
  const [FoodPrice, setFoodPrice] = useState("")
  const [FoodImage, setFoodImage] = useState("")
  const [FoodIsAvailable, setFoodIsAvailable] = useState(false)


function Addfoods() {
  const Food = {
    fname: FoodName,
    ftype: FoodType,
    fcategory: FoodCategory,
    fprice: FoodPrice,
    fimage: FoodImage,
    fisavailable: FoodIsAvailable
  }
  
axios.post("http://localhost:5000/addfood",Food)
.then((result) => {
  console.log(result.data)
  alert("Food Data Added")
})
.catch((err) => {
  console.log(err)
});

}


function AddImage(e) {
  const data = new FormData();
  data.append("image",e.target.files[0])

  axios.post("http://localhost:5000/uploadimage",data)
  .then((result) => {
    console.log(result.data)
    setFoodImage(result.data.filepath)
    alert("Uploaded")
  })
  .catch((err) => {
    console.log(err)
  });
}


  return (
    <div className='d-flex justify-content-center mt-3'>
      <Row>
         <Form onSubmit={() => Addfoods()}>
          <Form.Group>
            <Form.Label>FoodName</Form.Label>
            <Form.Control type='Text' onChange={(e) => { setFoodName(e.target.value) }}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>FoodType</Form.Label>
            <Form.Select onChange={(e) => { setFoodType(e.target.value) }}>
              <option>Select</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>FoodCategory</Form.Label>
            <Form.Select onChange={(e) => { setFoodCategory(e.target.value) }}>
              <option>Select</option>
              <option value="Chinese">Chinese</option>
              <option value="Indian">Indian</option>
              <option value="Punjabi">Punjabi</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>FoodPrice</Form.Label>
            <Form.Control type='Number' onChange={(e) => { setFoodPrice(e.target.value) }}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>FoodImage</Form.Label>
            <Form.Control type='file' onChange={(e) => { AddImage(e) }}></Form.Control>
          </Form.Group>

          <Form.Group controlId='FoodIsAvailable'>
           
            <Form.Check type='checkbox' label="Available" onChange={(e) => { setFoodIsAvailable(true) }}></Form.Check>
          </Form.Group>

          <Button type='submit' className='m-2'>Save</Button>
         </Form>
      </Row>
    </div>
  )
}

export default AddFood