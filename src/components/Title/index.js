import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Title({text}) {
 return (
    <Text style={styles.title}>{text}</Text>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 32,
        fontWeight: "bold",
        letterSpacing: 0.5
      },
});