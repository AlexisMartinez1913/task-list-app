
import freeCodeCampLogo from './images/freecodecamp-logo.png';

import './App.css'
import Task from './components/Task';

function App() {
  

  return (
    <div className='task-app'>
      <div className='freecodecamp-logo-container'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt="Logo" 
        />
      </div>
      <div className='task-list-main'>
        <h1>My Tasks</h1>
        <Task text='Learn React' />

      </div>
      
    </div>
  )
}

export default App
