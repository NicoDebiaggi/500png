import DogeImage from './doge-min.png'

const speedX = 2500
const AnimatedImage = ({IMG_SIZE}) => {
  return (
    <img
      src={DogeImage}
      alt='doge'
      className='image'
      style={{
        height: IMG_SIZE,
        width: IMG_SIZE,
        animationDelay: `${Math.random() * 10}s`,
        '--randomnessDelta': `${Math.random() > 0.5 ? speedX * Math.random() : speedX * Math.random() * -1}px`
      }}
    />
  )
}

export default AnimatedImage