import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const EditTask = ({ route, navigation, updateTask }) => {
  const { task } = route.params;
  const [selectedDate, setSelectedDate] = useState(new Date(task.date));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [taskDescription, setTaskDescription] = useState(task.description);

  const handleDateChange = (event, date) => {
    const currentDate = date || selectedDate;
    setShowDatePicker(false);
    setSelectedDate(currentDate);
  };

  const handleSave = () => {
    if (!taskDescription.trim() || !selectedDate) {
      Alert.alert('Error', 'Please pick a date and enter a valid description.');
      return;
    }

    const updatedTask = {
      ...task,
      date: selectedDate.toDateString(),
      description: taskDescription,
    };
    updateTask(updatedTask);
    Alert.alert('Success', 'Task Updated');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formHeading}>Edit Task</Text>
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
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    height: 100, // Adjust height as needed
  },
  saveButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 20, // Add margin to separate from other elements
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditTask;
