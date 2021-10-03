import React from 'react'

import PopupDetails from './popup-details'

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

export const ExampleComponent = (props) => {
  return <PopupDetails data={props.data || dummyData} />
}
