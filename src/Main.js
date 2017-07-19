import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Services from './AllServices/AllServices';
import ClientServices from './ClientServices/ClientServices'
import ProductServices from './ProductServices/ProductServices'
import OrderServices from './OrderServices/OrderServices'
import InvoiceServices from './InvoiceServices/InvoiceServices'
import Login from './Login/Login'


export default class Main extends React.Component{


    render(){
    return <div>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/service' component={Services}/>
                <Route path='/service/client' component={ClientServices}/>
                <Route path='/service/product' component={ProductServices}/>
                <Route path='/service/invoice' component={InvoiceServices}/>
                <Route path='/service/order' component={OrderServices}/>
            </Switch>
        </div>
        }

}