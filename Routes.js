import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./core/Home"
import Signup from './user/Signup';
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/userdashboard";
import AdminDashBoard from "./user/Admindashboard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProduct from "./admin/ManageProduct";
import Updateproduct from './admin/Updateproduct';
import cart from './core/cart';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Signup" exact component={Signup} />
                <Route path="/Signin" exact component={Signin} />
                <Route path="/cart" exact component={cart} />
                <PrivateRoute path="/user/dashboard" exact component={UserDashBoard}/>
                <AdminRoute path="/Admin/dashboard" exact component={AdminDashBoard}/>
                <AdminRoute 
                path="/Admin/create/category" 
                exact 
                component={AddCategory}
                />
               <AdminRoute 
                path="/Admin/categories" 
                exact 
                component={ManageCategories}
                />
                 <AdminRoute 
                path="/Admin/create/product" 
                exact 
                component={AddProduct}
                />
                 <AdminRoute 
                path="/Admin/products" 
                exact 
                component={ManageProduct}
                />
                <AdminRoute 
                path="/admin/products/update/:productId" 
                exact 
                component={Updateproduct}
                />
        </Switch>
        </BrowserRouter>
    );
}
export default Routes;