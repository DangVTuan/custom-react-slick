import React from 'react'

function Children(Props) {
  return (
    <div>Children {Props}</div>
  )
}

export default memo(Children)