import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../actions/trade'
import Card from '../Card/Card'
import "./HomePage.css"

export default function HomePage() {
    const dispatch = useDispatch()

    const { loading, message } = useSelector((state) => state.productReducer);

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch])


    return (
        <div className="homePage">
            {loading ? (<h1>Hello</h1>) : (
                message && message.length > 0 ? (
                    message.map((message) => (
                        <Card key={message._id} Name={message.name} loss={message.percentage} price={message.price} />
                    ))
                ) : (<h1>No Item</h1>)
            )}
        </div >
    )
}