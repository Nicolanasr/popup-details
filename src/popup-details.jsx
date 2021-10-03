import React, { useState } from 'react'

import PopupCard from './popup-card'

const PopupDetails = (props) => {
  let initial = new Array(props.data.length).fill('initial')
  let disabled = new Array(props.data.length).fill('disabled')

  const [isClicked, setisClicked] = useState(initial)

  const changeIsClicked = (index) => {
    // if the card clicked status was already 'clicked' set all cards statuses to intitial
    if (isClicked[index] === 'clicked') {
      setisClicked({ ...initial })
      return
    }
    // set the clicked card status to 'clicked' and all other cards to 'disabled'
    let tmpArr = disabled
    tmpArr[index] = 'clicked'
    setisClicked({ ...tmpArr })
  }
  return (
    <div style={{ position:'relative', width:'fit-content' }}>
      {props.data.map((item, index) => {
        return (
          <PopupCard
            key={`${item.title}-${index}`}
            title={item.title}
            time={item.time}
            type={item.type}
            description={item.description}
            borderColor={item.borderColor}
            // status of this card
            isClicked={isClicked[index]}
            onClick={() => changeIsClicked(index)}
          />
        )
      })}
    </div>
  )
}

export default PopupDetails
