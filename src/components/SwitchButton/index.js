import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export default function SwitchButton({ label, textFalse, textTrue, isEnabled, setIsEnabled }) {
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.switch}>
        <Text style={styles.textOption}>{textFalse}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#FFAC33" }}
          thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.textOption}>{textTrue}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 48,
    paddingStart: 8,
    paddingEnd: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#DADADA",
  },
  label: {
    fontSize: 16,
    letterSpacing: 0.5,
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
  },
  textOption:{
    fontSize: 16,
    fontWeight: "bold",
  }
});
