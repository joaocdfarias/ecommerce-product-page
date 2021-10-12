import React from 'react'
import './style.scss'

const Counter = () => {
  const [count, setCount] = React.useState(0)

  const addCountHandler = () => {
    setCount(count + 1)
  }
  const removeCountHandler = () => {
    if (count === 0) {
      return
    }
    setCount(count - 1)
  }

  return (
    <div className="counterWrapper">
      <button onClick={removeCountHandler}>-</button>
      <p>{count}</p>
      <button onClick={addCountHandler}>+</button>
    </div>
  )
}

export default Counter
