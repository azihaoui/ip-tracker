import './App.css'
import Images from './assets/images/pattern-bg.png'
import Arrow from './assets/images/icon-arrow.svg'

function App() {
  

  return (
    <div className="App">
        <div className='pattern'>
            <h2 className='ip-address'>IP Address Tracker</h2>
            <div className='input'>
                <input className='input-ip-address' type="text" name="" id="" />
                <div className='input-button'>
                    <img className='arrow' src={Arrow} alt="" />
                </div>
            </div>
            <div className='box'>
                
            </div>
        </div>
       
    </div>
  )
}

export default App
