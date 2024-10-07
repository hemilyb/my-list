import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  titleInput: {
    marginLeft: 5,
    color: themes.colors.gray,
    marginTop: 20
  },
  boxInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: themes.colors.bgScreen,
    borderColor: themes.colors.lightGray
  },
  Input: {
    height: "100%",
    width: "90%",
    paddingHorizontal: 20
  },
})