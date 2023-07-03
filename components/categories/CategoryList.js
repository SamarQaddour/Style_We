import Link from "next/link"
import Category from "./Category"
import Clothes from "./Clothes";
export default function CategoryList({ categories }) {
  if (!categories) return null
  return (
   <>
     <div className='container__categories'>
       <img src='/bag.png' alt='not found'/>
       <Category categories={categories} />
     </div>
   </>
  )
}
