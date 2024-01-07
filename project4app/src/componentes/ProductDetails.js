import React, { Component } from 'react'

export default class ProductDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: window.location.href.split('/')[4],
            data: null
        }
    }

    componentDidMount() {
        fetch('https://dummyjson.com/products/' + this.state.id).then(response => response.json()).then((data) => this.setState({ data: data }))
    }

    render() {
        console.log(this.state.data)
        return (


            <div className='eachProduct  d-block text-center'>
                {(this.state.data != null) ? <div className='w-50 m-auto border-1 mt-4'>
                    <div className='w-100 m-auto overflow-scroll h-50'>
                        <img src={this.state.data.images[0]} className='w-50 m-auto d-block '/>
                    </div>
                    <h2 className='w-75 m-auto'>{this.state.data.title}</h2>
                    <span className='w-50 m-auto'>{this.state.data.description}</span>
                    <span className='d-block text-danger proPrice'>{'Price:' + ' ' + this.state.data.price + '$'}</span>
                    <div className='btn btn-primary aadtocartD m-auto d-block position-absolute rounded rounded-0 '>+ Add To Card</div>
                </div> : <div className='display-1 w-50 m-auto'>
                    Loading...
                </div>}
            </div>

        )
    }
}
