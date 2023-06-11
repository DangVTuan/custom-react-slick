import React from 'react'

function Parent() {
    const [count, setCount] = useState(0)
  return (
    <div>Parent {count}
        <button onClick={() => setCount(count + 1)} >Click me</button>
    </div>
  )
}

export default Parent