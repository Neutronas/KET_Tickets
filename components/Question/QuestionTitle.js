import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default QuestionTitle = ({ children }) => {
    return (
        <Text style={styles.title}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});