import React from 'react'
import '../style/Home/index.module.less'
import Header from '../component/Header'
import Button from '../component/Button'


const Home = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <div>
        <Button width={80} height={40} fontSize={10}></Button>
        <Button
          shape="circle"
          width={200}
          height={50}
          fontSize={20}
          backgroundColor={{
            direction: 'right',
            startColor: '#43C6AC',
            endColor: '#F8FFAE'
          }}
          type={{
            name: 'tipple',
            color: '#fff',
            radius: 100
          }}>
          Click Me
        </Button>
        <Button width={300} height={100} fontSize={24} type={{name: 'snakeBorder', color: 'red'}}
          borderColor="#fff" backgroundColor={{startColor: '#000'}} hoverColor="#fff"></Button>
      </div>
    </div>
  )
}

export default Home
