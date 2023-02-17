import { useState } from 'react'
import { m } from 'framer-motion'
import DogeImage from './doge-min.png'

const AnimatedImage = ({DEF_XSPEED, DEF_YSPEED, IMG_SIZE}) => {
  const [x, setX] = useState(Math.random() * window.innerWidth/2 - IMG_SIZE)
  const [speedX, setSpeedX] = useState(Math.random() > 0.5 ? DEF_XSPEED : -DEF_XSPEED)
  const [y, setY] = useState(Math.random() * window.innerHeight/2 - IMG_SIZE)
  const [speedY, setSpeedY] = useState(Math.random() > 0.5 ? DEF_YSPEED : -DEF_YSPEED)

  const handleAnimationComplete = () => {
    setX(x + speedX);
    setY(y + speedY);
    if (x >= window.innerWidth/2 - IMG_SIZE) {
      setSpeedX(-DEF_XSPEED * Math.random());
    }
    if (x <= -window.innerWidth/2) {
      setSpeedX(DEF_XSPEED * Math.random());
    }
    if (y >= window.innerHeight/2 - IMG_SIZE) {
      setSpeedY(-DEF_YSPEED * Math.random());
    }
    if (y <= -window.innerHeight/2) {
      setSpeedY(DEF_YSPEED * Math.random());
    }
  }

  return (
    <m.img
      src={DogeImage}
      animate={{ x: x, y: y }}
      transition={{ ease: "linear" }}
      onAnimationComplete={handleAnimationComplete}
      className='image'
      style={{ height: IMG_SIZE, width: IMG_SIZE }}
    />
  )
}

export default AnimatedImage