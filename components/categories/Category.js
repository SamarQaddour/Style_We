import {useEffect,useState} from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import {GrNext} from "react-icons/gr";
export default function Category({ categories }) {
    const [category, setCategory] = useState('');

    useEffect(() => {
        console.log(category,'itecategorym')
    },[category])
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
    const feature = [
    {
        "name": "BEST SELLERS",
        "id": 1,
        "is_red":'0',
    },
    {
        "name": "Special Event",
        "id": 1,
        "is_red":'0'
    },
    {
        "name": "SS 2023",
        "id": 1,
        "is_red":'0'
    },
    {
        "name": "Casual Shop",
        "id": 1,
        "is_red":'0'
    },
    {
        "name": "Print Shop",
        "id": 1,
        "is_red":'0'
    },
    {
        "name": "Work Shop",
        "id": 1,
        "is_red":'0'
    },
    {
        "name": "Basic Shop",
        "id": 1,
        "is_red":'0'
    },
    {
        "name": "Designer Shop",
        "id": 1,
        "is_red":'0'
    }
    ]
    const view = [
    {
        "name": "Dress",
        "id": 1,
        "is_red":'0',
    },
    {
        "name": "Tops",
        "id": 1,
        "is_red":'0'
    },
    {
        "name": "Outerwear",
        "id": 1,
        "is_red":'0'
    },
    {
        "name": "Bottoms",
        "id": 1,
        "is_red":'0'
    },
    {
        "name": "Swimear",
        "id": 1,
        "is_red":'0'
    },
    {
        "name": "Assessories",
        "id": 1,
        "is_red":'0'
    }
    ]
  return <div className='cantainer__categories__div'>
         <ul className='container__categories__ul'>
        {categories.map((category,index) => (
                 <>
                     <li key={index}  >
                      <Link href='/' style={{color : category?.is_red === '1' ? "red" : "black"}}>
                      <span > {category?.name}</span>
                      </Link>
                         <div className='cartegories__hover_sub_1'>
                             <ul>
                                 <li><h6>Shop by Categories</h6>
                                     {data.map((data, index) => (
                                         <span key={index}>{data?.name}</span>
                                     ))}</li>

                                 <li><h6>feature Shops</h6>
                                     {feature.map((data,index) => (
                                         <span key={index}>{data?.name}</span>
                                     ))}
                                 </li>
                                 <li>
                                     <img src='/hover1.webp' alt=''/>
                                 </li>
                                 <li>
                                     <img src='/hover2.webp' alt='' />
                                 </li>

                             </ul>

                         </div>
                         <div className='cartegories__hover_sub_2'>
                             <ul>
                                 <li><h6>View All New</h6>
                                     {view.map((data,index) => (
                                         <span key={index}>{data?.name}</span>
                                     ))}</li>
                                 <li><img src='/view1.webp' alt='' /></li>
                                 <li><img src='/view2.webp' alt='' /></li>
                             </ul>
                         </div>
                     </li>
                 </>
        ))}
        </ul>
     </div>
}
