import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { style } from "./styles";

type FlagProps = {
  caption?: string,
  color?: string
}

export function Flag({ ...rest }: FlagProps) {
  return (
    <TouchableOpacity style={[style.container, {backgroundColor: rest.color}]}>
      <Text style={style.textColor}>
        {rest.caption}
      </Text>
    </TouchableOpacity>
  )
}