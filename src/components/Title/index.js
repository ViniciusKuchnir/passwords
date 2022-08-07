import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Title() {
 return (
    <Text style={styles.title}>Suas senhas</Text>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 32,
        fontWeight: "bold",
        letterSpacing: 0.5
      },
});