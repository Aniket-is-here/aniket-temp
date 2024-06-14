import React from 'react'

export default function Searchdiv({title,onClickhandler,isopen}) {
    console.log(isopen)
  return (
    <div>
          <span>{title}</span>
          <span
            style={{ margin: "30px", cursor: "pointer" }}
            onClick={onClickhandler}
          >
            ↓
          </span>
    </div>
  )
}
