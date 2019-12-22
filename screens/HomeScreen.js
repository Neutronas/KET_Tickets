import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import Ticket from '../components/Ticket';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Ticket />
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'KET Bilietas',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
