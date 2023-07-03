import React from 'react'
import {GrNext} from "react-icons/gr";
const TopSection = () =>{
    const data = [
        {
            "name": "Tops",
            "id": 1,
            "is_red":'0',
            "is_fire":"1"
        },
        {
            "name": "Dresses",
            "id": 1,
            "is_red":'0',
            "is_fire":"0"
        },
        {
            "name": "Matching Sets",
            "id": 1,
            "is_red":'0',
            "is_fire":"1"
        },
        {
            "name": "Bottoms",
            "id": 1,
            "is_red":'0',
            "is_fire":"1"
        },
        {
            "name": "Denim",
            "id": 1,
            "is_red":'0',
            "is_fire":"0"
        },
        {
            "name": "Jackets $ Cats",
            "id": 1,
            "is_red":'0',
            "is_fire":"1"
        },
        {
            "name": "Beachwear",
            "id": 1,
            "is_red":'0',
            "is_fire":"1"
        }]
    return(
    <div className='TopSection'>
      <div className='cantainer__bar__categorey'>
       <div className='cantainer__bar__categorey__top'>
       <span> Home </span> <GrNext/><span style={{fontWeight:'bold'}}>Best Sellers</span>
        </div>
    <div className='cantainer__bar__categorey__bottom'>
        <p>Recommend</p>
        {data.map((data,index) => (
                <>{data.is_fire === '1' ? <span key={index}> 🔥{data.name} </span>: <span key={index}> {data.name}</span>}</>
        ))}
    </div>
</div>
</div>
   )
}

export default TopSection