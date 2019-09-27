import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';

export class PossibleAnswer extends Component {
    
    render() {
        return (
            <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this._handlePress}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.optionIconContainer}>
                    <Ionicons name={this.state.isMarked ? 'ios-checkbox-outline' : 'ios-checkbox'} size={26} color="#2e78b7" />
                </View>
                <View style={styles.optionTextContainer}>
                    <Text style={styles.optionText}>{this.props.text}</Text>
                </View>
            </View>
        </Touchable>
    );
    }

    state = { isMarked: true};

    _handlePress = () => {
    var marked = !this.state.isMarked;
    this.setState({isMarked: marked});
    if(this.state.isMarked && this.props.isCorrect)
      alert('correct!');
  }
}

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
