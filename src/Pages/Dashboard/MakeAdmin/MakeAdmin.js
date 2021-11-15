import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, reset,handleSubmit,formState: { errors }} = useForm();
    const onSubmit=(data)=>{
        console.log(data)
        fetch("https://young-gorge-80259.herokuapp.com/makeAdmin",{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(data),

        })
        .then(res=>res.json())
        .then(result=>console.log(result))
    }
    return (
        <div className="add-service">
            <h2 className="text-center">Make Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input  {...register("email")} placeholder="email" className="p-3" />
      
      {errors.email && <span>This field is required</span>}
     
      
      <input type="submit" value="make admin"  className="w-25 bg-dark text-white p-3"/>
    </form>
        </div>
    );
};

export default MakeAdmin;
