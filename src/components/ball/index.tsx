import React from "react";
import { View } from "react-native";
import { style } from "./styles";
import { themes } from "../../global/themes";

type BallProps = {
  color?: string
}

export function Ball({ ...rest }: BallProps) {
  return (
    <View style={[style.ball, { borderColor: rest.color || themes.colors.gray }]}></View>
  )
}