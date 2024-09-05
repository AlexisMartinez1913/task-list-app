
import freeCodeCampLogo from './images/freecodecamp-logo.png';

import './App.css'
import TasksList from './components/TasksList';

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
        
        <TasksList />
      </div>
      
    </div>
  )
}

export default App
