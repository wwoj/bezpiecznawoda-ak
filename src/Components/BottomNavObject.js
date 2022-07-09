import React, { useEffect,useState } from 'react'
function MyComponent() {
    const [width,setWidth]=useState(0)
    let windowWidth=0;
  useEffect(() => {
    function handleResize() {
    //   console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
      setWidth(window.innerWidth)
      windowWidth=window.innerWidth;
      setWidth(window.innerWidth)
      console.log("windowWidth",windowWidth)
}

    window.addEventListener('resize', handleResize)
  })
  return <div>{width >800? <div>Dupa</div>:<div>Kupa</div>}
  <div><button onClick={()=>{
    console.log("Width size:",width)
  }}></button></div></div>
}
export default MyComponent;