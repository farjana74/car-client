import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ManageOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit=data=>{
    console.log(data)
    fetch(`https://young-gorge-80259.herokuapp.com/statusUpdate/${orderId}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => console.log(result));
  }

    const [manageOrder,setManageOrder]=useState([])
    useEffect(()=>{
        fetch('https://young-gorge-80259.herokuapp.com/order')
        .then(res=>res.json())
        .then(data=>setManageOrder(data))
    },[])
    const { register, handleSubmit } = useForm();




      const handleOrderId = (id) => {
      setOrderId(id);
      console.log(id);
     };
    // delete use
    const handleDeleteOrder=id=>{
        const url=  `https://young-gorge-80259.herokuapp.com/order/${id}` ;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('deleted successfully')
                const remainingUsers = manageOrder.filter(service=>service._id!==id)
                setManageOrder(remainingUsers)



            }
        })

    }
    return (
        <div className="container ">
        <h1 className="text-primary  text-dark text-center">Manage Order {manageOrder?.length}</h1>
        <Table striped bordered hover className=" bg-light text-dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Price</th>
              <th>Place</th>
            <th>phone</th>
            <th>status</th>
            <th>Action</th>
            </tr>
          </thead>
          {manageOrder?.map((manage, index) => (
            <tbody>
              <tr>
                <td>{index}</td>
                <td>{manage?.name}</td>
                <td>{manage?.email}</td>
                <td>{manage?.address}</td>
                <td>{manage?.price}</td>
                <td>{manage?.place}</td>
                
                <td>{manage?.phone}</td>
                <td>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <select
                    onClick={() => handleOrderId(manage?._id)}
                    {...register("status")}
                  >
                    <option value={manage?.status}>{manage?.status}</option>
                    <option value="approve">approve</option>
                    <option value="done">Done</option>
                  </select>
                  <input type="submit" />
                </form>
                </td>
                <button className="btn bg-info text-white p-2">Update</button>
                <button onClick={()=>handleDeleteOrder(manage._id)} className="btn bg-danger p-2">Delete</button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    );
};

export default ManageOrder;