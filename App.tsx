import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function App() {
 return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}> I Failed the First Quarter of a Class in School</Text>
        <Text style={styles.text}> I Made a Fake Report Card</Text>
        {/* Add more chapters here */}
      </ScrollView>
      <Button title="Next Chapter" onPress={() => console.log('Next Chapter')} />
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 },
 scrollView: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 30,
 },
 text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
 },
});