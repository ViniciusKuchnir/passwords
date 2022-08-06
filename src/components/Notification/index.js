import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const StatusBarHeight = StatusBar.currentHeight;

export default function Notification({label}) {
 return (
   <View style={styles.container}>
    <Text style={styles.text}>{label}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        width: "100%",
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        top: StatusBarHeight + 20,
        zIndex: 999,
        borderRadius: 10,
        backgroundColor: "#219EBC"
    },
    text:{
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 0.5,
    },
});