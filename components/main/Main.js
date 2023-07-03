import React from 'react'
import TopSection from './TopSection'
import LeftSection from './LeftSetion'
import RightSection from './RightSection'


const Main = () =>{
    return<div className='container__main'>
      <TopSection/>
     <div className='container__leftSection__rightSection'>
     <LeftSection/>
      <RightSection/>
     </div>
    </div>
}

export default Main