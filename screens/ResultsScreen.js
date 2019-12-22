import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Result from '../components/Result'

const ResultsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Result />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default ResultsScreen;