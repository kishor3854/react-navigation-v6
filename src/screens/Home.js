import React, { useEffect, useState } from "react";
import '../App.css';
import {
    Link
} from "react-router-dom";
import Card from '../components/Card'

export default function Home() {
    const [loading, setLoading] = useState(true)
    const [productData, setProductData] = useState([])

    const fetchProductData = () => {
        setLoading(true)
        fetch('https://dummyjson.com/products')
            .then((response) => {
                return response.json()
            }).then((data) => {
                setProductData(data?.products)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchProductData()
    }, [])


    const renderCard = () => {
        return (
            productData.map((cardItem, index) => {
                return (
                    <li>
                        <Card cardData={cardItem} onClickCard={(id) => <Link to={`/${id}`} />} />
                    </li>
                )
            })
        )
    }

    return (
        <div className="home-component">
            <p>FleepCart</p>
            {loading ? <div class="loader"></div> :
                <ul className="image-gallery">
                    {renderCard()}
                </ul>
            }
        </div>
    )
}