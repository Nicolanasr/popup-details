import React from 'react'

import PopupCardBody from './popup-body'

import classes from './popup-card.module.css'

const PopupCard = (props) => {
  return (
    // if status of this card is 'disabled' add the disabled class
    <div
      className={` ${classes.cardWrapper} ${props.className} ${
        props.isClicked === 'disabled' && classes.disabled
      }`}
    >
      <div className={classes.popupCard} onClick={props.onClick}>
        <div className={`${classes.cardInfo}`}>
          <div className={`${classes.title}`}>{props.title}</div>
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
        <div className={classes.advanceButton} onClick={() => props.onClick()}>
            {/* // TODO to add arrow icon */}
        </div>
        <div
          className={classes.cardBorder}
          style={{ backgroundColor: props.borderColor }}
        ></div>
      </div>
      <div className={classes.cardBodyWrapper}>
        <PopupCardBody
          title={props.title}
          time={props.time}
          type={props.type}
          info={props.info}
          description={props.description}
          // pass the card status to the card body
          isClicked={props.isClicked}
          onClick={props.onClick}
        />
      </div>
    </div>
  )
}

export default PopupCard
