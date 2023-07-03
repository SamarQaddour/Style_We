import React from 'react'

const modalcart = ( ) => {
    const MODAL_STYLES = {
        position: 'fixed',
        display:'flex',
        top: '52%',
        right: '0%',
        transform: 'translate(-50%, -50%)',
        width:'60%',
        height:'100%',
        background:'white',
        padding:'4px',
        zIndex: 100000,
        overflow:'hidden',
        borderRadius:'6px',
        textAlign:'left',
        fontSize: '1.7rem',


    }

    return(
        <>
           <div style={MODAL_STYLES} />
           <div className='bg-black'>tesssssssssssst</div>
        </>
    )
}

export default modalcart;