import React from 'react'
import '../style/Home/index.module.less'
import Header from '../component/Header'
import Button from '../component/Button'


const Home = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <div>
        <Button width={80} height={40} fontSize={10} onClick={e => console.log(e.target)}></Button>
      </div>
    </div>
  )
}

export default Home
