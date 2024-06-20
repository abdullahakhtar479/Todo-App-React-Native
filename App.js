import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoApp from './src/screens/todo/ToDoApp';
import PendingTasks from './src/screens/todo/PendingTasks';
import ArchivedTasks from './src/screens/todo/ArchivedTasks';
import EditTask from './src/screens/todo/EditTask'; // Import EditTask screen

const Stack = createStackNavigator();

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const archiveTask = (taskId) => {
    const taskToArchive = tasks.find(task => task.id === taskId);
    setArchivedTasks([...archivedTasks, taskToArchive]);
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ToDoApp">
        <Stack.Screen name="ToDoApp">
          {props => <ToDoApp {...props} addTask={addTask} />}
        </Stack.Screen>
        <Stack.Screen name="PendingTasks">
          {props => <PendingTasks {...props} tasks={tasks} archiveTask={archiveTask} navigation={props.navigation} />}
        </Stack.Screen>
        <Stack.Screen name="ArchivedTasks">
          {props => <ArchivedTasks {...props} archivedTasks={archivedTasks} />}
        </Stack.Screen>
        <Stack.Screen name="EditTask">
          {props => <EditTask {...props} updateTask={updateTask} navigation={props.navigation} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
