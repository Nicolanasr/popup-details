import React from 'react'

import classes from './PopupCardBody.module.css'

const PopupCardBody = (props) => {
  return (
    <div>
      {/* if the card has a status of clicked show the body  */}
      <div
        className={`${classes.cardBody} ${
          props.isClicked === 'clicked' ? classes.show : classes.hide
        }`}
      >
        <div className={classes.closeBtn} onClick={() => props.onClick()}>
          <span className='material-icons'>cancel</span>
        </div>
        <div className={classes.head}>
          <div className={`${classes.title}`}>
            <h5>{props.title}</h5>
          </div>
          <div className={classes.moreInfo}>
            <div
              className={classes.time}
              dangerouslySetInnerHTML={{ __html: props.time }}
            />

            <div
              className={classes.type}
              dangerouslySetInnerHTML={{ __html: props.type }}
            />
          </div>
        </div>
        <hr />
        <div className={classes.body} dangerouslySetInnerHTML={{__html:props.description}} />
      </div>
    </div>
  )
}

export default PopupCardBody
