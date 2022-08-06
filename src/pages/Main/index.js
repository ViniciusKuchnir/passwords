import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";


export default function Main() {
    const [characters, setCharacters] = useState(2);
 return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    <View style={styles.content}>
      <Image source={require("../../assets/img/icon-noneBackground.png")} />
      <Text style={styles.characters}>Caracteres: {characters}</Text>
      <Slider
        style={styles.slider}
        minimumValue={2}
        maximumValue={20}
        step={2}
        thumbTintColor="#232323"
        minimumTrackTintColor="#FFAC33"
        maximumTrackTintColor="#232323"
        onValueChange={setCharacters}
        value={characters}
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.button__text}>Gerar Senha</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#FFF",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    characters: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#232323",
    },
    slider: {
      width: "100%",
      height: 48,
    },
    button: {
      width: "50%",
      height: 48,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 48 / 2,
      backgroundColor: "#FFAC33",
    },
    button__text: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#FFF",
      letterSpacing: 0.5,
    },
  });