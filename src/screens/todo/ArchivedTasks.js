import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ArchivedTasks = ({ archivedTasks }) => {
  return (
    <View style={styles.container}>
      {archivedTasks.length === 0 ? (
        <Text style={styles.noTasksText}>No Archived Tasks</Text>
      ) : (
        archivedTasks.map((task) => (
          <View key={task.id} style={styles.task}>
            <Text style={styles.taskText}>{task.date}: {task.description}</Text>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  noTasksText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  task: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
  },
});

export default ArchivedTasks;
