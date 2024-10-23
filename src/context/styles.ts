import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
      width: "100%"
    },
    header: {
      width: "100%",
      height: 40,
      paddingHorizontal: 40,
      flexDirection: "row",
      marginTop: 20,
      justifyContent: "space-between",
      alignItems: "center"
    },
    title: {
      fontSize: 20,
      fontWeight: "bold"
    },
    content: {
      width: "100%",
      paddingHorizontal: 20
    },
    containerFlag: {
      width: "100%",
      padding: 10
    },
    label: {
      fontWeight: "bold",
      color: "000"
    },
    flag: {
      flexDirection: "row",
      gap: 10,
      marginTop: 10
    }
})