import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Timer({ time }) {
  
  const timeFormatted = `${Math.floor(time / 60).toString().padStart(2,'0')}:${(time % 60).toString().padStart(2, '0')}`
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{timeFormatted}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 0.3,
    marginTop: 10,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#c4cece'
    
  },
  time: {
    fontSize: 80,
    fontWeight: 'bold',
   textAlign: 'center'
  }

})