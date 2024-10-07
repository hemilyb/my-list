import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
 container: {
  width: 70,
  height: 30,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  backgroundColor: themes.colors.red
 },
 textColor: {
  color: themes.colors.secondary
 }
})