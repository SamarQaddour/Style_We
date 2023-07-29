import React, {useEffect} from 'react';
import {useRouter} from "next/router";

function mycart () {
    const Router = useRouter()
    const { name, age } = Router.query

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
    padding: '20px',
    width: '600px',
    height:'100vh',
    borderRadius: '10px',
   boxShadow:' 0 0 10px rgba(0, 0, 0, 0.3)'
}

useEffect(() =>{

},[])
    return (
        <div style={modalcontainer}>
            <div style={modal}>
             <h1>test</h1>
            </div>
        </div>
    )
}

export default mycart