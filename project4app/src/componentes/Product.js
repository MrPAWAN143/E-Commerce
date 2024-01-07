import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null,
            message: 'Hello World'
        }


    }
    componentDidMount() {
        fetch('https://dummyjson.com/products').then(response => response.json()).then(data=>this.setState({data:data.products}))
    }

    render() {
        return (
            <>


                <div className='container-fluid product_main mt-4'>
                    <div className='product d-flex mt-5'>
                        <div className='items d-flex flex-wrap m-auto w-100'>
                            {(this.state.data!=null)?this.state.data.map((item)=> <div className='box col-md-6'>
                            <Link to={'/products/'+ item.id} className='text-decoration-none text-dark'><div className='ns_items rounded position-relative'>
                                 <div className='w-100 h-50 images'><img className='w-100 rounded-2 mt-0' src={item.images[0]}/> </div>
                                 <h5 className='mt-2 text-center heading d-block'>{item.title}</h5>
                                <span className='d-block mt-1 discripation'>{item.description}</span>
                                <span className='d-inline-block mt-0 text-danger ps-2  me-5'>{'Price'+': ' + item.price + '$'}</span>
                                <span className='d-inline-block mt-0 text-danger rating ps-2 ms-2'>{'Rating'+': ' + item.rating }</span>

                                <button className='btn btn-primary aadtocart  d-block position-absolute w-100 rounded rounded-0'>+ Add To Card</button>

                            </div>
                            </Link>
                            </div> ):<h2 className='text-center w-100 display-1'>Data is loading</h2>}
                        </div>

                    </div>
                    <button className='btn btn-light d-block m-auto border-0 mt-3'>View More</button>

                </div>

            </>
        )
    }
}