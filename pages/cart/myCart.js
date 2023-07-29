import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import {AiOutlineRight} from "react-icons/ai";
import {CheckBox} from "@mui/icons-material";
import {RiArrowDropDownFill, RiDeleteBinLine} from "react-icons/ri";
function mycart () {
    const Router = useRouter();
    const data = Router.query.data;
    const [DataId, setDataId] = useState(null)
    const handleGoHome = () => {
        Router.push('/');
    };
  const modalcontainer = {
        position:'fixed',
        top:'0',
        right:'0',
        bottom:'0',
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        backdropFilter:'blur(5px)',
        zIndex:9999999999,
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        width: '100vw',
        height: '100vh'
    };
  const modal = {
    backgroundColor:'#fff',
    width: '600px',
    height:'100vh',
   boxShadow:' 0 0 10px rgba(0, 0, 0, 0.3)'
}
   const containerheader = {
       borderBottom: '1px solid #dee2e67d',
   }
   const header = {
       padding:'4px',
       height: '4%',
       margin:'0.7rem 0 0.7rem 0',
       justifyContent: 'space-between',
       display: 'flex',
   }
   const heardername = {
      fontSize:'2rem',
       fontWeight:'600'
  }
  const giftContainer = {
      fontSize: '1.2rem',
      fontWeight: '400',
  }
  const topOfGift = {

  }

useEffect(() =>{
// console.log(data,'data')
// console.log(DataId,'DataId')

    setDataId(data)
},[DataId])


    return (
        <div style={modalcontainer}>
             <div style={modal}>
               <div style={containerheader}>
                   <div style={header}>
                       <h1 style={heardername}>Cart</h1>
                       <span onClick={handleGoHome}> <CloseIcon /> </span>
                   </div>
               </div>
                 <div style={{borderBottom:'8px solid #dee2e67d', margin:'2rem 0 2rem 0' }}>
                     <div style={{display:'flex', justifyContent:'space-between', marginTop:'2rem'}}>
                         <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
                             <div style={{display:'flex'}}>
                                 <span style={{width:'auto',height:'1.5rem',backgroundColor:'pink',color:'red',padding:'4px',fontSize:'0.8rem',margin:'1rem'}}>GIFT</span>
                                 <img src='/ring.webp' style={{width:'3rem', height:'3rem'}} alt='not found' />
                             </div>
                             <div style={topOfGift}>
                                 <div style={giftContainer}>
                                     <p>Urban Casual Wheat Ear Pattern</p>
                                     <span style={{color:'#a39d9d'}} >Brown/One-size</span>
                                     <div><span style={{color:'red',fontSize:'1.7rem',fontWeight:'700'}}>$0</span> <span style={{textDecoration:'line-through',color:'#a39d9d'}}> $10.99</span></div>
                                 </div>
                             </div>
                             <div>
                                 <button style={{lineHeight:'1',display:'flex',fontWeight:'bold',width:'unset'}}>view Gift <AiOutlineRight /></button>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div>
                     <div>
                         <CheckBox />
                         <img src={DataId?.image} alt='not found'/>
                     </div>
                     <div>
                         <span>Urban High Waist Plain Fashion Straigh...</span>
                         <span>5564 {DataId?.price}</span>
                         <span>Black,S <RiArrowDropDownFill /></span>
                         <div>
                             <button> - </button>
                             <button> 1 </button>
                             <button> + </button>
                         </div>
                         <div>
                              <RiDeleteBinLine />
                             <div>
                                 <span>Total:</span>
                                 <span>254</span>
                             </div>
                         </div>
                     </div>
                 </div>
                 </div>

        </div>

    )
}

export default mycart