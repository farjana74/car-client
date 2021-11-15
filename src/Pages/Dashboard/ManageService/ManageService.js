import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';

const ManageService = () => 
{
    const[services,setServices]=useState([])
    useEffect(() => {
        fetch("https://young-gorge-80259.herokuapp.com/services")
          .then((res) => res.json())
          .then((data) => setServices(data));
      }, []);


      const handleDeleteOrder=id=>{
        const url=  `https://young-gorge-80259.herokuapp.com/services/${id}` ;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('deleted successfully')
                const remainingUsers = services.filter(service=>service._id!==id)
                setServices(remainingUsers)



            }
        })

    }
    return (
        <div className="container">
        <h1 className="text-primary text-center">Manage Order {services?.length}</h1>
        <Table striped bordered hover class="text-dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          {services?.slice(7-14).map((more, index) => (
            <tbody>
              <tr>
                <td>{index}</td>
                <td>{more?.name}</td>
                <td>{more?.price}</td>
                <td>{more?.description}</td>
                <button onClick={()=>handleDeleteOrder(more._id)} className="btn bg-danger p-2">Delete</button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    );
};

export default ManageService;