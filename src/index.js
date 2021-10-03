import React, { useState } from 'react'

import PopupCard from './popup-card'

const dummyData = [
  {
    title: 'Lorem ipsum dolor sit amet',
    time: '11 hours ago',
    type: 'For Fun',
    description:
      'Lorem ipsum dolor sit amet,<h1>h1</h1> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    borderColor: 'orange'
  },
  {
    title: 'consectetur adipiscing elit',
    time: '2 Days ago',
    type: 'Full-Time',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <button>Apply now</button>',
    borderColor: 'green'
  },
  {
    title: 'laboris nisi ut aliquip ex ea commodo consequat.',
    time: '3 weeks ago',
    type: 'Full-Time',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    borderColor: 'blue'
  }
]

const PopupDetails = (props) => {
  const data = props.data || dummyData

  let initial = new Array(data.length).fill('initial')
  let disabled = new Array(data.length).fill('disabled')

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
      {data.map((item, index) => {
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

