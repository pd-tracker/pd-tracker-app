import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class ExamplePage extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <Text> You are on the example page! </Text>
                <Button title={"Click me!"}
                        onPress={() => this.props.navigation.navigate("ExampleOther")}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
