import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const PossibleAnswer = ({ text, onChange, isChecked }) => {
  const [isMarked, setIsMarked] = useState(isChecked);

  useEffect(() => {
    setIsMarked(isChecked)
  }, [isChecked]);

  const handlePress = () => {
    onChange();
  };

  return (
    <TouchableWithoutFeedback
      style={styles.option}
      onPress={handlePress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={isMarked ? 'ios-checkbox' : 'ios-checkbox-outline'} size={26} color="#2e78b7" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{text}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  optionIconContainer: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#EDEDED',
  },
  optionText: {
  },
});

export { PossibleAnswer };