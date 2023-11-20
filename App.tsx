

import React, { useState } from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './ToDoList.jsx';
import ToDoForm from './ToDoForm';


function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to the gym',
    'Walk the dog'
  ]);


  const addTask = (taskText : any) => {
    setTasks([...tasks, taskText]);
  }


  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask}/>
    </SafeAreaView>
  );
}

export default App;