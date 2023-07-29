import React, {useEffect, useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import {CircularProgress} from '@material-ui/core';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {RiArrowDropDownLine} from "react-icons/ri";
import Link from "next/link";
import Mycart from './Mycart'
import {useRouter} from "next/router";
const size = [
    {value: 'XS(2-4)'},
    {value: 'S(6-8)'},
    {value: 'M(10)'},
    {value: 'L(12)'},
    {value: 'XL(14)'},
    {value: 'XXL(16)'}
    ]
const Modalproduct = ({selectedCard, index, handleCardClick, data}) => {
     const passData = {data}
    const [active, setActive] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(true);
    const router = useRouter();

    const [showModal, setShowModal] = useState(true);
    const [dataModal, setDataModal] = useState({});

    const handleCloseModal = async () => {
        try {

            const fetchedData = passData;
            console.log(fetchedData); // do something with the fetched data
            setDataModal(fetchedData); // set the data state variable
            handleCardClick(null); // close the modal
             router.push({
                pathname: '/cart/Mycart',
                query: { data: JSON.stringify(fetchedData) },
            })
            console.log(data ,'query')
        } catch (error) {
            console.error(error);
        }
    };
    // const handleClickLoading = () => {
    //     handleCardClick(null);
    //     setTimeout(() => {
    //         setIsLoading(false);
    //         handleCardClick(null)
    //
    //     }, 2000);
    //     setIsPopupOpen(true);
    //     // setIsLoading(true);
    //     // Perform async operation here
    //
    //
    // };
    const handleClickCartModal = () => {
        setTimeout(() => {
            setIsPopupOpen(true)
        }, 4000);

    }
    const MODAL_STYLES = {
        position: 'fixed',
        display:'flex',
        top: '52%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
         width:'60%',
        height:'75%',
        background:'white',
         padding:'4px',
        zIndex: 1000,
        overflow:'hidden',
        borderRadius:'6px',
        textAlign:'left',
        fontSize: '1.7rem'

    }
    const OVERLAY_STYLES = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backdropBlur:'blur(2px)',
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .7)',
        zIndex: 1000,
        transition:'all 7s ease-in-out'
    }
    const title__product = {
        fontWeight:'600',
        margin: '2rem 0 0 0',
        padding:'1rem',
        width:'90%'
    }
    useEffect(()=>{
        console.log(data, 'data')
        console.log(isLoading, 'isLoading')
        console.log(isPopupOpen, 'isPopupOpen')
        console.log(passData, 'passData')
    },[isLoading,isPopupOpen])
    return (
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
           <div className='container__img'>
                    <img src={data.image} className='img__product'  />
           </div>
            <div className='position-relative container__of__product'  >
                   <div className='mt-4' >
                       <button onClick={()=> handleCardClick(null)} style={{position:'absolute',margin:'1rem',right:'0%',top:'0%'}}> <CloseIcon /> </button>
                       <p style={title__product}>{data.title}</p>
                   </div>
                   <div className='container__price__product'>
                       <div><span style={{fontWeight:'bold',color:'red',marginRight:'0.5rem'}}>${data.price}</span><span style={{color:'gray',textDecoration:'line-through',marginRight:'0.9rem',fontSize:'1.2rem',fontWeight:'500'}}>$33.99</span> <span style={{color:'#ecdddd',background:'black',fontSize:'1.2rem',fontWeight:'500',padding:'1px'}}> -20%</span></div>
                       <p  style={{fontSize:'1.2rem',color:'red'}}>Pre-sale item will be shipped separately</p>
                   </div>
                    <div className='container__proprties'>
                       <div style={{margin:'3rem 0 1rem 0'}}>
                           <h3 style={{color:'gray',fontWeight:'600'}}>Color : <span style={{color:'black',fontWeight:'1.4rem'}}> White</span></h3>
                           <img src={data.image} style={{width:'2rem',height:'2rem',borderRadius:'50%',objectFit:'cover',border:'1px solid black',padding:'2px',marginTop:'0.7rem'}}/>
                       </div>
                        <div className='flex-column'>
                          <div className='size__type'>
                              <span  >Size :</span>
                              <PopupState variant="popover" popupId="demo-popup-menu" >
                              {(popupState) => (
                                  <React.Fragment>
                                      <button
                                          style={{
                                              width:'4rem',
                                              height:'3rem',
                                              fontSize:'1.7rem',
                                              fontWeight:'bold',
                                              display:'flex',
                                              outline:'none'
                                          }}
                                          {...bindTrigger(popupState)}>
                                         us <RiArrowDropDownLine style={{marginTop:'10px'}}/>
                                      </button>
                                      <Menu {...bindMenu(popupState)} style={{width:'16rem'}}>
                                          <MenuItem onClick={popupState.close}>US</MenuItem>
                                          <MenuItem onClick={popupState.close}>UK</MenuItem>
                                          <MenuItem onClick={popupState.close}>EUR</MenuItem>
                                          <MenuItem onClick={popupState.close}>AU</MenuItem>
                                      </Menu>
                                  </React.Fragment>
                              )}
                          </PopupState>
                          </div>
                             <div >
                                 {size.map((s,index) => (
                                    <button key={index} className={`container__button ${active === index ? "active" : ""}`}
                                            onClick={() => setActive(index)}
                                    >{s.value}</button>
                                     ))}
                                <div style={{lineHeight:'1.7',margin:'2rem 0 0 0',padding:'4px',fontWeight:'500',fontSize:'0.9rem',background:'rgb(250 250 250/1)',width:'95%',height:'4.5rem'}}>
                                    <span style={{color:'rgb(93 98 106/1)', marginTop:'3rem'}}>Product Measurement</span>
                                    <p>Bust: 94, Length: 44.8, Hem Width: 104 (cm)</p>
                                </div>
                                 <div className='cart__buy' style={{margin:'10% 0 0 0',fontSize:'1.3rem',fontWeight:'500'}}>
                                     <button
                                         style={{background:'#31353C',color:'#ffffff',borderRadius:'4px',width:'55%',height:'3rem',margin:'0 4% 0 0'}}
                                         onClick={handleCloseModal}

                                     >
                                        <span onClick={handleClickCartModal}> {isLoading ?  <CircularProgress />  : 'Add to Cart' }</span>



                                         {/*{isLoading ? <CircularProgress size={24} color="inherit" /> :*/}
                                         {/*    <Link className='button_link'  href={{ pathname: 'cart/Mycart', query: {  passData } }}>*/}
                                         {/*   Add to Cart*/}
                                         {/*    </Link>*/}
                                         {/*}*/}
                                     </button>

                                     <button style={{border:'1px solid #31353C' ,color:'#31353C',borderRadius:'4px',height:'3rem',width:'auto'}}><Link  className='button_link'  style={{padding:'4px'}} href='#'>Buy it now</Link></button>

                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )







}

export default Modalproduct