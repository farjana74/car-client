import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import useAuth from './../../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const Booking = () => {
    const {user}=useAuth();
    const { register, handleSubmit,reset, formState: { errors } } = useForm();


const onSubmit=(data)=>{
    console.log(data)
    data.status="Pending";
    fetch('https://young-gorge-80259.herokuapp.com/order',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(result=>{
        if(result){
            alert('Added succesfully')
            reset();
        }
    })


}


    const {bookingId}=useParams()
    const[book,setBook]=useState({})
    useEffect(()=>{
        fetch(`https://young-gorge-80259.herokuapp.com/services/${bookingId}`)

        .then(res=>res.json())
        .then(data=>setBook(data))
    },[])
    return (
        <div className="container my-5 bg-light">
        <div className="row justify-content-between">
<div className="col-md-6 border shadow border-primary rounded
">
<div class="card">
  <img src={book.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text fs-5 fw-bold fst-italic text-muted  text-start">{book.description} we are now offering your car at discount price and you have o be habby that you are now our familly member and your car are most probably </p>
  </div>
</div>


</div>
<div className="col-md-4">
    <h3 className="my-2 fs-3 fw-bold  text-center">Please place your order</h3>
<form onSubmit={handleSubmit(onSubmit)
} className=" submit border text-center p-3 bg-light shadow-lg">
      
      <input defaultValue={user.displayName} {...register("name")} />
      <br />
      <br />
      <input defaultValue={user.email} {...register("email")} />
      
      {errors.email && <span>This field is required</span>}
      <br />
      <br />
      <input {...register("address")} placeholder="Address" />
      <br />
      <br />
      <input {...register("price")} placeholder="Price" />
      <br />
      <br />
      <input {...register("place")} placeholder=" place" />
      <br />
      <br />
     
      <input type="number" {...register("phone")} placeholder="phone" />
      <br />
      <br />
     
      
      <input  className="bg-primary text-white p-3 rounded " type="submit" />
    </form>
</div>

        </div>
          
        </div>
    );
};

export default Booking;