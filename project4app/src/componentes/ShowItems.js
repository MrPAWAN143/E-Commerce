import React from 'react'
import Img1 from './assest/images/col-6-item1.avif'
import img2 from './assest/images/col-3-item1.avif'
import img3 from './assest/images/col3-item1.avif'
import img4 from './assest/images/col3-item2.avif'
import img5 from './assest/images/col-6-item2.avif'
import img6 from './assest/images/con-3-item2.avif'
import { Link } from 'react-router-dom'
import image_1 from './assest/images/image-1.avif'
import image_2 from './assest/images/image-2.avif'
import image_3 from './assest/images/image-3.avif'
import image_4 from './assest/images/image-4.avif'
import image_5 from './assest/images/image-5.avif'
import image_6 from './assest/images/image-6.avif'

export default function ShowItems() {


    // window.addEventListener('scroll', function() {
    //     document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
    //   });

    // function scroll(){

    // }
    return (
        <>
            <div className='container-fluid text-white ms-4 me-4 showitems overflow-scroll mt-2'>
                <div className='slidershow d-flex align-items-center justify-content-between '>
                    <div className='item1 border-3 d-grid '>
                        <div className='row row1 '>
                            <div className='col-6 p-2 h-100'>
                                <div className='h-100'>
                                  <Link to='/interiors' >  <img src={Img1} className='h-100 w-100 rounded-3 object-fit-cover' /> </Link>
                                </div>
                            </div>
                            <div className='col-3 p-2 h-100'>
                                <div className='h-100'>
                                    <img className='h-100 w-100 rounded-3 object-fit-cover' src={img2}/>
                                    
                                </div>
                            </div>
                            <div className='col-3 p-2 h-100'>
                                <div className='h-100'>
                                <img className='h-100 w-100 rounded-3 object-fit-cover' src={img3}/>
                                </div>
                            </div>
                        </div>



                        <div className='row row2 '>
                            <div className='col-3 p-2 h-100'>
                                <div className='h-100'>
                                    <img src={img6} className=' h-100 w-100 rounded-3 object-fit-cover'/>
                                </div>
                            </div>
                            <div className='col-6 p-2 h-100'>
                            <div className='h-100'>
                                    <img src={img5} className=' h-100 w-100 rounded-3 object-fit-cover'/>
                                </div>
                            </div>
                            <div className='col-3 p-2 h-100'>
                            <div className='h-100'>
                                    <img src={img4} className=' h-100 w-100 rounded-3 object-fit-cover'/>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='item2 h-100 border-3 d-grid ms-4'>
                    <div className='row row1 '>
                            <div className='col-6 p-2 h-100'>
                                <div className='h-100'>
                                  <Link to='/interiors' >  <img src={image_1} className='h-100 w-100 rounded-3 object-fit-cover' /> </Link>
                                </div>
                            </div>
                            <div className='col-3 p-2 h-100'>
                                <div className='h-100'>
                                    <img className='h-100 w-100 rounded-3 object-fit-cover' src={image_2}/>
                                    
                                </div>
                            </div>
                            <div className='col-3 p-2 h-100'>
                                <div className='h-100'>
                                <img className='h-100 w-100 rounded-3 object-fit-cover' src={image_3}/>
                                </div>
                            </div>
                        </div>



                        <div className='row row2 '>
                            <div className='col-3 p-2 h-100'>
                                <div className='h-100'>
                                    <img src={image_4} className=' h-100 w-100 rounded-3 object-fit-cover'/>
                                </div>
                            </div>
                            <div className='col-6 p-2 h-100'>
                            <div className='h-100'>
                                    <img src={image_5} className=' h-100 w-100 rounded-3 object-fit-cover'/>
                                </div>
                            </div>
                            <div className='col-3 p-2 h-100'>
                            <div className='h-100'>
                                    <img src={image_6} className=' h-100 w-100 rounded-3 object-fit-cover'/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}
