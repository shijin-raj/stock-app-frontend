import React from 'react'
import './StockDetails.css'

export default function StockDetails(props) {
    return (
        <div className='stock-details'>
            <h1>{props.NAME}</h1>
            <div className='stock-property'> MARKET CAP <span>{props.MARKET_CAP}</span></div>
            <div className='stock-property'> CURRENT PRICE <span>{props.CURRENT_PRICE}</span></div>
            <div className='stock-property'> STOCK P/E <span>{props.STOCK_PE}</span></div>
            <div className='stock-property'> DIVIDENT YIELD <span>{props.DIV_YLD}</span></div>
            <div className='stock-property'> ROCE <span>{props.ROCE}</span></div>
            <div className='stock-property'> ROE <span>{props.ROE}</span></div>
            <div className='stock-property'> DEBT TO EQUITY <span>{props.DEBT_TO_EQ}</span></div>
            <div className='stock-property'> EPS <span>{props.EPS}</span></div>
            <div className='stock-property'> RESERVES <span>{props.RESERVES}</span></div>
            <div className='stock-property'> DEBT <span>{props.DEBT}</span></div>
        </div>
    )
}
