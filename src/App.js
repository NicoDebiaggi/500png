import { LazyMotion, domAnimation } from 'framer-motion'
import AnimatedImage from './AnimatedImage'
import './App.css'

const IMG_SIZE = 300
const DEF_XSPEED = 150
const DEF_YSPEED = 150

function App() {
  return (
    <div className="App">
      <LazyMotion features={domAnimation}>
        {[...Array(500)].map((_, i) => (
          <AnimatedImage key={i} DEF_XSPEED={DEF_XSPEED} DEF_YSPEED={DEF_YSPEED} IMG_SIZE={IMG_SIZE} />
        ))}
      </LazyMotion>
    </div>
  )
}

export default App;
