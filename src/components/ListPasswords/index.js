import React from 'react';
import { 
    View, 
    Text, 
    ScrollView,
    TouchableOpacity,
    StyleSheet 
} from 'react-native';
import { Feather } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";

export default function ListPasswords({list}) {

    const copyToClipboard = async (password) => {
        await Clipboard.setStringAsync(password);
      };

 return (
    <ScrollView>
    {list.map((item, index) => {
      return (
        <View style={styles.item} key={index}>
          <View style={styles.viewUtility}>
            <Text style={styles.utility}>{item.utility}</Text>
          </View>
          <TouchableOpacity
            style={styles.clipboard}
            onPress={() => copyToClipboard(item.password)}
          >
            <Feather name="clipboard" size={32} color="#232323" />
            <Text>Copiar</Text>
          </TouchableOpacity>
        </View>
      );
    })}
  </ScrollView>
  );
}

const styles = StyleSheet.create({
    item: {
        height: 64,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingStart: 8,
        paddingEnd: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: "#DADADA",
      },
      viewUtility: {
        width: "80%",
      },
      utility: {
        fontSize: 24,
        fontWeight: "bold",
        letterSpacing: 0.5,
      },
      clipboard: {
        justifyContent: "center",
        alignItems: "center",
      },
});