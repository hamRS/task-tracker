//import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


//components imports
import Header from './components/Header'
import Tasks from './components/Tasks';

function App() {
  //const name = 'Brad';
  const [tasks , setTasks] = useState(
    [
        {
            id : 1,
            text: 'Doctors Appointment',
            day : 'Feb 5th at 2:30pm',
            reminder : true,
        },
        {
            id : 2,
            text: 'Meeting at School',
            day : 'Feb 6th at 1:30pm',
            reminder : true,
        },
        {
            id : 3,
            text: 'Food shopping',
            day : 'Feb 5th at 2:30pm',
            reminder : false,
        }
    ]
)
  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
