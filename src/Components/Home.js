import React from 'react'
import Todos from './Todos'

import style from './home.module.css'

const dummyTodos =[
    {
        id : 1,
        title : "Todo 1",
        desc : "Here is todo 1",
    },
    {
        id : 2,
        title : "Todo 2",
        desc : "Here is todo 2",
    },
]

const Home = () => {
  return (
    <div className={style.container}>
      <h1 style={{color : "white"}}>ToDo App</h1>
        < Todos todos ={dummyTodos} />
    </div>
  )
}

export default Home