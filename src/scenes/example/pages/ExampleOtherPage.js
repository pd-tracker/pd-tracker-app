import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ExampleOtherPage extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <Text> You are on a new page! </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
