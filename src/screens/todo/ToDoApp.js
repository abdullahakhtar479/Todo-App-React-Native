import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ToDoApp = ({ navigation, addTask }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [taskDescription, setTaskDescription] = useState('');

  const handleDateChange = (event, date) => {
    const currentDate = date || selectedDate;
    setShowDatePicker(false);
    setSelectedDate(currentDate);
  };

  const handleAddTask = () => {
    if (!taskDescription.trim() || !selectedDate) {
      Alert.alert('Error', 'Please pick a date and enter a valid description.');
      return;
    }

    const newTask = {
      id: Date.now().toString(),  // Unique ID for each task
      date: selectedDate.toDateString(),
      description: taskDescription,
    };
    addTask(newTask);
    alert('Task Added');
    setTaskDescription('');  // Clear the input field
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>ToDo</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.formHeading}>Schedule a New Task</Text>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Select Date:</Text>
          <TouchableOpacity style={styles.datePicker} onPress={() => setShowDatePicker(true)}>
            <Text>{selectedDate.toDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Task Description:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter task description"
            multiline
            numberOfLines={4}
            value={taskDescription}
            onChangeText={setTaskDescription}
          />
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleAddTask}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigateButton}
          onPress={() => navigation.navigate('PendingTasks')}
        >
          <Text style={styles.navigateButtonText}>Go to Pending Tasks</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  navbar: {
    height: 60,
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbarTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  formHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  datePicker: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    color: '#333333',
    height: 100,
    textAlignVertical: 'top'
  },
  submitButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 20, // Add margin to separate from other elements
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navigateButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 20, // Add margin to separate from other elements
  },
  navigateButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ToDoApp;
