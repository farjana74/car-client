import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from './../../../hooks/useAuth';
import './AddReview.css'

const AddReview = () => {
    const {user}=useAuth();
    const { register, reset,handleSubmit,formState: { errors }} = useForm();
    const onSubmit=data=>{
        console.log(data)


        fetch('https://young-gorge-80259.herokuapp.com/review',{
            method:"POST",
            headers:{
                'content-type':'application/json'

            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                alert('added successfully')
                reset();
            }
        })
    }
    return (
        <div className="add-service">
            <h2 className="text-center">Add review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={user.email} {...register("email")} />
      
      {errors.email && <span>This field is required</span>}
      <input {...register("name", { required: true, maxLength: 20 })} placeholder=" Customer Name" />
      <input {...register("img")} placeholder="Image" />
      <textarea {...register("description")} placeholder="Description" />
     
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddReview;