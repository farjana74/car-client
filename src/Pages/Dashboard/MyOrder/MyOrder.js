import React, { useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';

const MyOrder = () => {

    const {user}=useAuth();
    const[orders,setOrders]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/order/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[user.email])


    const handleDeleteOrder=id=>{
        const url=  `http://localhost:5000/order/${id}` ;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('deleted successfully')
                const remainingUsers = orders.filter(user=>user._id!==id)
                setOrders(remainingUsers)



            }
        })

    }
    return (
        <div className="container">
        <h1 className="text-primary text-center">My Order {orders?.length}</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Price</th>
              <th>Place</th>
            <th>phone</th>
            <th>Action</th>
            </tr>
          </thead>
          {orders?.map((last, index) => (
            <tbody>
              <tr>
                <td>{index}</td>
                <td>{last?.name}</td>
                <td>{last?.email}</td>
                <td>{last?.address}</td>
                <td>{last?.price}</td>
                <td>{last?.place}</td>
                
                <td>{last?.phone}</td>
                <button onClick={()=>handleDeleteOrder(last._id)} className="btn bg-danger p-2">Delete</button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>

    );
};

export default MyOrder;