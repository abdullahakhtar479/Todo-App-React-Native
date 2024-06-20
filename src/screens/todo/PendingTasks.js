import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PendingTasks = ({ tasks, archiveTask, navigation }) => {
  return (
    <View style={styles.container}>
      {tasks.length === 0 ? (
        <Text style={styles.noTasksText}>No Pending Tasks</Text>
      ) : (
        tasks.map((task) => (
          <View key={task.id} style={styles.task}>
            <Text style={styles.taskText}>{task.date}: {task.description}</Text>
            <View style={styles.taskButtons}>
              <TouchableOpacity onPress={() => archiveTask(task.id)} style={styles.completeButton}>
                <Text style={styles.completeButtonText}>Mark as Complete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditTask', { task })}
                style={styles.editButton}
              >
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}
      <TouchableOpacity
        style={styles.navigateButton}
        onPress={() => navigation.navigate('ArchivedTasks')}
      >
        <Text style={styles.navigateButtonText}>Go to Archived Tasks</Text>
      </TouchableOpacity>
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
  taskButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  completeButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 4,
    flex: 1,
    marginRight: 5,
  },
  completeButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  editButton: {
    backgroundColor: '#FF9800',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 4,
    flex: 1,
    marginLeft: 5,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
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

export default PendingTasks;
