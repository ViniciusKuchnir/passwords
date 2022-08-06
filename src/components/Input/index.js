import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Input({label, value, setValue}) {
 return (
   <TextInput 
    style={styles.container}
    placeholder={label}
    onChangeText={setValue}
    value={value}
   />
  );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 56,
        marginBottom: 24,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#DADADA",
        paddingStart: 10,
        paddingEnd: 10,
        fontSize: 16,
        textAlign: "center",
    }
});