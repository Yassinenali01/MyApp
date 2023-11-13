

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


  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;