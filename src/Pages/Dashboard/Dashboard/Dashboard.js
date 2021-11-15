import React, { useState } from 'react';
import Button from '@restart/ui/esm/Button';
import './Dashboard.css'
import { useEffect } from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyOrder from '../MyOrder/MyOrder';
import Review from './../../Home/Review/Review';
import AddService from '../AddService/AddService';
import ManageOrder from '../ManageOrder/ManageOrder';
import AddReview from './../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from './../../../hooks/useAuth';
import ManageService from '../ManageService/ManageService';
import Payment from './../Payment/Payment';

const Dashboard = () => {
     const {user,logOut}=useAuth()
   
    
    const[isAdmin,setIsAdmin]=useState(false)
    useEffect(()=>{
fetch(`https://young-gorge-80259.herokuapp.com/checkAdmin/${user.email}`)
.then(res=>res.json())
.then(data=>{
    if(data[0]?.role==="admin"){
        setIsAdmin(true);
    }
    else{
        setIsAdmin(false);
    }
})
    },[user.email])
    console.log(isAdmin)
    let { path, url } = useRouteMatch();
    return (
//         
<div class="d-flex" id="wrapper">
{/* <!-- Sidebar --> */}
<div class="bg-white" id="sidebar-wrapper">
    <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
            class="fas fa-user-secret me-2"></i>ROTORS</div>
    <div class="list-group list-group-flush my-3">
        <Link to="#" class="list-group-item list-group-item-action bg-transparent second-text active"><i
                class="fas fa-tachometer-alt me-2"></i>Dashboard</Link>
      {
          !isAdmin &&( <Link>
            <Link to={`${url}/myOrder`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold">My order</Link>
            <Link to={`${url}/payment`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold">Payment</Link>
             <Link to={`${url}/addReview`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold">Add Review</Link>
             <Button on className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
        class="fas fa-power-off me-2"></i> Logout</Button>
             </Link>)
      }
       {
           isAdmin && (<Link>
            <Link to={`${url}/makeAdmin`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold">Make Admin</Link>
        <Link to={`${url}/manageOrder`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold">Manage allOrder</Link>
        <Link to={`${url}/manageService`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold">Manage serviecs</Link>
        <Link to={`${url}/addService`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold">Add service</Link>
        <Button on className="bg-primary"><i
        class="fas fa-power-off me-2"></i> Logout</Button>
        </Link>)
        
       }
    
   
      
        
    </div>
</div>
{/* <!-- /#sidebar-wrapper --> */}

{/* <!-- Page Content --> */}
<div id="page-content-wrapper">
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
        <div className="d-flex align-items-center">
            <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
            <h2 className="fs-2 m-0">Dashboard</h2>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <Link className="nav-link text-dark dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown"
                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-user me-2"></i>{user.displayName}
                    </Link>
                   
                </li>
            </ul>
        </div>
    </nav>

    <div class="container-fluid px-4">
        <div class="row g-3 my-2">
            <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 class="fs-2">720</h3>
                        <p class="fs-5">Products</p>
                    </div>
                    <i class="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
            </div>

            <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 class="fs-2">4920</h3>
                        <p class="fs-5">Sales</p>
                    </div>
                    <i
                        class="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
            </div>

            <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 class="fs-2">3899</h3>
                        <p class="fs-5">Delivery</p>
                    </div>
                    <i class="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
            </div>

            <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 class="fs-2">%25</h3>
                        <p class="fs-5">Increase</p>
                    </div>
                    <i class="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
            </div>
        </div>

        <Switch>
        <Route exact path={`${path}/myOrder`}>
             <MyOrder></MyOrder>
              </Route>
        <Route exact path={`${path}/payment`}>
            <Payment></Payment>
              </Route>
 
               <Route exact path={`${path}/addReview`}>
                 <AddReview></AddReview>
               </Route>
               <Route exact path={`${path}/makeAdmin`}>
                 <MakeAdmin></MakeAdmin>
               </Route>               <Route exact path={`${path}/manageOrder`}>
               <ManageOrder></ManageOrder>
               </Route>
               <Route exact path={`${path}/manageService`}>
                   <ManageService></ManageService>
               </Route>               
           
<Route exact path={`${path}/addService`}>
                <AddService></AddService>             
               </Route>
              
              
/            </Switch>
    </div>
</div>
</div>
// <!-- /#page-content-wrapper -->


    





















    );
};

export default Dashboard;