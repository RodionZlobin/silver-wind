import React from 'react';

export default class OrderServices extends React.Component{


    render(){
        return <div id="invoice-services" className="sort-vertical">
            Here will come ORDER SERVICES
            <button>CREATE ORDER</button>
            <button>FIND ORDER by Number</button>
            <button>FIND ORDERS by client</button>
            <button>FIND ORDERS by specified period</button>
            <button>FIND ORDERS by client && specified period</button>
        </div>

    }
}