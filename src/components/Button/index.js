import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Button({text, onPress}) {
 return (
   <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
   </TouchableOpacity>
  );
}

const styles= StyleSheet.create({
    container:{
        width: "100%",
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
        marginBottom: 16,
        borderRadius: 48 / 2,
        backgroundColor: "#FFAC33",
    },
    text:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFFF",
        letterSpacing: 0.5
    }
});