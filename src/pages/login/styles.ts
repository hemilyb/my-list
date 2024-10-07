import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  boxTop: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  boxMid: {
    height: Dimensions.get("window").height / 4,
    width: "100%",
    paddingHorizontal: 17
  },
  boxBottom: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80
  },
  text: {
    fontWeight: "bold",
    marginTop: 40,
    fontSize: 18
  },
})