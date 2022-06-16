import { Button, Typography } from '@mui/material'
import React from 'react'
import './Card.css'
import SellIcon from '@mui/icons-material/Sell';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Card = ({ Name, loss, price }) => {
    return (
        <div className="card">
            <div className="cardLeft">
                <div>Name</div>
                <Typography>{Name}</Typography>
            </div>
            <div className="middle">
                <Button className="buy" style={{"color":"black","borderWidth":"1px","backgroundColor":"rgba(0, 128, 0, 0.606)","borderStyle":"solid","borderColor":"black"}}><ShoppingCartSharpIcon />BUY</Button>
                <Button className="sell" style={{"color":"black","borderWidth":"1px","backgroundColor":"rgba(255, 0, 0, 0.622)","borderStyle":"solid","borderColor":"black"}}><SellIcon />SELL</Button>
            </div>
            <div className="cardRight">
                <div>Percentage Loss/Gain</div><div className="loss">{loss > 0 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}<Typography>{loss}</Typography></div>
                <div>Price</div><Typography>Rs. {price} /-</Typography>
            </div>
        </div>
    )
}

export default Card