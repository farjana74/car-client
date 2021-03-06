import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://young-gorge-80259.herokuapp.com/services',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('added succesfully')
               reset();
           }
        })
    }
    return (
        <div className="add-service">
            <h2 className="text-center text-white my-5">Added service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <textarea {...register("description")} placeholder="Description" />
      <input {...register("img")} placeholder="Image" />
      <input type="number" {...register("price")}placeholder="Price" />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;
