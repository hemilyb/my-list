import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { style } from "./styles";

type FlagProps = {
  caption?: string,
  color?: string,
  selected?: boolean
}

export function Flag({ ...rest }: FlagProps) {
  return (
    <TouchableOpacity
      style={[
        style.container, 
        { backgroundColor: rest.color },
        rest.selected && {borderWidth: 1}
      ]}
    >
      <Text style={style.textColor}>
        {rest.caption}
      </Text>
    </TouchableOpacity>
  )
}