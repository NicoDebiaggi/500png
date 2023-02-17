import AnimatedImage from './AnimatedImage'
import './App.css'

const IMG_SIZE = 300

function App() {
  return (
    <div className="app">
      {[...Array(500)].map((_, i) => (
        <AnimatedImage key={i} IMG_SIZE={IMG_SIZE} />
      ))}
    </div>
  )
}

export default App;
