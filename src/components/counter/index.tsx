import React from 'react'
import './style.scss'

const Counter = ({ count, setCount }: any) => {
  return (
    <div className="counterWrapper">
      <button
        onClick={() => {
          if (count === 0) return

          setCount(count - 1)
        }}
      >
        -
      </button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter
