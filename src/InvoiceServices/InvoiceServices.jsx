import React from 'react';

export default class InvoiceServices extends React.Component{


    render(){
        return <div id="invoice-services" className="sort-vertical">
            Here will come INVOICE SERVICES
            <button>CREATE INVOICE</button>
            <button>FIND INVOICE by Number</button>
            <button>FIND INVOICES by client</button>
            <button>FIND INVOICES by specified period</button>
            <button>FIND INVOICES by client && specified period</button>
        </div>

    }
}