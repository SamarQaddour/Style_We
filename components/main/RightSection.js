import React, {useEffect, useState} from 'react';
import Modalproduct from './modalproduct';
import { FaStar } from 'react-icons/fa';
import data from '../../db.json';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const RightSection = () =>{
    const [selectedCard, setSelectedCard] = useState(null);
    const [product, setProduct] = useState(null)
    const handleCardClick = (index) => {
        setSelectedCard(index);
    };
 const handleProduct = () => {
     setProduct(data);
    };
    useEffect(() => {
        console.log(selectedCard,'selectedCard')
        console.log(product,'product')
        handleProduct()
    },[selectedCard])
    const RatingStars = ( numberOfStars ) => {
        const stars = Array.from({ length: numberOfStars }, (_, index) => (
            <FaStar key={index}  size={20}/>
        ));
        return <div style={{display:'flex',gap:'4px'}}>{stars}</div>;
    };
    return(
        <div className='RightSection'>
            <div className='whole__section bg-o'>
                <div className='row gap-lg-4 gap-md-3 gap-sm-2'>
                    {product ?  product?.products?.map((data,index) => (
                        <div className='card__container card border-0  bg-white  col-lg-3 col-md-4 col-sm-6' key={index}>
                            <div className='card__body'>
                                <div className='card__img  m-0 p-0'>
                                    <img className='card__img__top' src={data.image} alt='not found'/>
                                    <button className='button__cart' onClick={() => handleCardClick(index)}>Add To Bag</button>
                                    {selectedCard === index &&
                                    <Modalproduct
                                        selectedCard={selectedCard}
                                        index={index}
                                        handleCardClick={handleCardClick}
                                        data={product.products[selectedCard]}
                                    />
                                    }
                                </div>
                                <div className='card-footer flex-column' >
                                    <p style={{width: 'inherit',fontWeight:'400',fontSize:'1rem',color:'rgba(0,0,0,0.7)'}}>{data.title}</p>
                                    <h2 style={{color:'red',fontSize:'1.5rem',fontWeight:'bold'}}>{data.price}$</h2>
                                    <div className='' style={{display:'-webkit-box',margin:'0.2rem'}}>
                                        <img  style={{borderRadius:'50%',width:'2rem',height:'2rem',objectFit:'cover',marginRight:'1rem',marginTop:'2px'}} src={data.image} />
                                        <img style={{borderRadius:'50%',width:'2rem',height:'2rem',objectFit:'cover',marginTop:'2px'}} src={data.image} />
                                    </div>
                                    <span className='d-inline' style={{fontWeight:'400',fontSize:'0.9rem',color:'red'}}>
                            Buy 2 get 3rd 20% off
                        </span>
                                    <div style={{color:'rgb(245, 158, 11)',display:'-webkit-box', marginTop:'2px'}}>
                                        {RatingStars(data.rating.rate)}
                                    </div>

                                </div>
                            </div>
                        </div>
                    )) :  <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
                        <CircularProgress color="inherit" />
                    </Backdrop>}


                </div>
            </div>
        </div>
    )
}

export default RightSection