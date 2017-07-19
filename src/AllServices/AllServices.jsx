import "./AllServices.css"

import React from 'react';

export default class Services extends React.Component{

    constructor() {
        super();
    }

    handleClickClients() {
        //window.location = "service/client";

        return window.location.assign("service/client");
    }

    handleClickProducts() {

        return window.location.assign("service/product");
    }

    handleClickOrders() {

        return window.location.assign("service/order");
    }

    handleClickInvoices() {

        return window.location.assign("service/invoice");
    }


    render(){
        return <div id="all-services" className="sort-horizontal">
                <button onClick={this.handleClickClients.bind(this)}>CLIENTS</button>
                <button onClick={this.handleClickProducts.bind(this)}>PRODUCTS</button>
                <button onClick={this.handleClickOrders.bind(this)}>ORDERS</button>
                <button onClick={this.handleClickInvoices.bind(this)}>INVOICES</button>
        </div>

    }
}