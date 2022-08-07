import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import {css} from '../../assets/styles/global';
import {Feather} from '@expo/vector-icons';
import * as Clipboard from "expo-clipboard";

const StatusBarHeight = StatusBar.currentHeight;

export default function List() {
  const [values, setValues] = useState([]);
  
  const copyToClipboard = async (password) => {
    await Clipboard.setStringAsync(password);
  };
  
  useEffect(() =>{
    let response = fetch('http://192.168.15.4:3000/list')
    .then(response => response.json())
    .then(passwords => setValues(passwords));
  }, [values]);


 return (
   <View style={[css.container, styles.container]}>
      <StatusBar
        hidden={false}
        animated={true}
        backgroundColor="#FFF"
        barStyle="dark-content"
        showHideTransition={"fade"}
      />
      <Text style={styles.title}>Suas senhas</Text>
      <ScrollView>
        {
          values.map((item, index) =>{
            return(
              <View style={styles.item} key={index}>
                <View style={styles.viewUtility}>
                  <Text style={styles.utility}>{item.utility}</Text>
                </View>
                <TouchableOpacity style={styles.clipboard} onPress={() => copyToClipboard(item.password)}>
                  <Feather name="clipboard" size={32} color="#232323" />
                  <Text>Copiar</Text>
                </TouchableOpacity>
              </View>
            );
          })
        }
      </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: StatusBarHeight
  },
  title:{
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 0.5
  },
  item:{
    height: 64,
    flex: 1,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingStart: 8,
    paddingEnd: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DADADA",
  },
  viewUtility:{
    width: "80%"
  },
  utility:{
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.5
  },
  clipboard:{
    justifyContent: "center",
    alignItems: "center"
  }
})