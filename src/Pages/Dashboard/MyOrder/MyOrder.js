import React, { useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './MyOrder.css'

const MyOrder = () => {

    const {user}=useAuth();
    const[orders,setOrders]=useState([]);
    
    useEffect(()=>{
        fetch(`https://young-gorge-80259.herokuapp.com/order/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[user.email])

    




    const handleDeleteOrder=id=>{
        const url=  `https://young-gorge-80259.herokuapp.com/order/${id}` ;
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
        <h1 className="text-dark text-center">My Order {orders?.length}</h1>
        <div className="row my-5">
          <div className="col">
          <Table className="table bg-light rounded shadow-sm  table-hover">
          <thead>
            <tr>
              <th scope="col" width="50">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Price</th>
              <th scope="col">Place</th>
            <th scope="col">phone</th>
            {/* <th scope="col">status</th> */}
            <th scope="col">Action</th>
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

                
               
                <button onClick={()=>handleDeleteOrder(last._id)} className="btn button  p-2">Delete</button>
              </tr>
            </tbody>
          ))}
        </Table>
          </div>

        </div>
      </div>

    );
};

export default MyOrder;
