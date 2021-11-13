import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Explore from './Pages/Explore/Explore';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './Pages/Login/Register/Register';
import AddService from './Pages/Dashboard/AddService/AddService';
import Booking from './Pages/Home/Booking/Booking';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import ManageOrder from './Pages/Dashboard/ManageOrder/ManageOrder';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div>
   <AuthProvider>
   <BrowserRouter>
    <Navigation></Navigation>
    <Switch>
<Route exact path="/">
  <Home></Home>

</Route>
<Route exact path="/home">
  <Home></Home>

</Route>
<Route exact path="/explore">
  <Explore></Explore>

</Route>
<Route path="/login">
  <Login></Login>

</Route>
<Route path="/myOrder">
<MyOrder></MyOrder>

</Route>
<Route path="/manageOrder">
<ManageOrder></ManageOrder>

</Route>
<Route path="/addReview">
<AddReview></AddReview>

</Route>
<Route path="/addService">
  <AddService></AddService>
</Route>
<PrivateRoute path="/booking/:bookingId">
  <Booking></Booking>
</PrivateRoute>

<Route path="/register">
  <Register></Register>
</Route>
<PrivateRoute path="/dashboard">
  <Dashboard></Dashboard>
</PrivateRoute>

    </Switch>
    <Footer></Footer>
    </BrowserRouter>
   </AuthProvider>
    </div>
  );
}

export default App;
