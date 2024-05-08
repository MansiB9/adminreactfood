import axios from 'axios'
import React, { useEffect, useState } from 'react'


function CustomerList() {

  const [allcust, setallcust] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/customer")
      .then((result) => {
        setallcust(result.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className='justify-content-center align-items-center'> 
      
    <h2>All Customer List</h2>

    <table className='striped bordered hover'>
      <thead>
        <tr>
          
          <th>Customer Name</th>
          <th>Mobile No</th>
          <th>Address</th>
        </tr>
      </thead>
      
      <thead>
        {
                allcust.map((customer) => {
                return (
                  <tr border="secondary" style={{ width: '18rem' }}>
                    
                    <td>{customer.CustomerName}</td>
                    <td>{customer.MobileNo}</td>
                    <td>{customer.Address}</td>
                   
                    
                  </tr>
                   )
                  })
                }
      </thead>
      
    </table>
    </div>
  )
}

export default CustomerList