import React, { forwardRef, LegacyRef } from "react"
import { View, Text, TextInput, TextInputProps, TouchableOpacity, StyleProp, TextStyle } from "react-native";
import { MaterialIcons, FontAwesome, Octicons } from "@expo/vector-icons";
import { themes } from "../../global/themes";

import { style } from "./styles";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
  React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
  React.ComponentType<React.ComponentProps<typeof Octicons>>;

type InputProps = TextInputProps & {
  IconLeft?: IconComponent,
  IconRight?: IconComponent,
  iconLeftName?: string,
  iconRightName?: string,
  title?: string,
  onIconLeftPress?: () => void,
  onIconRightPress?: () => void,
  height?: number,
  labelStyle?: StyleProp<TextStyle>
}

export const Input = forwardRef((InputProps: InputProps, ref: LegacyRef<TextInput> | null) => {

  const { IconLeft, IconRight, iconLeftName, iconRightName, title, onIconLeftPress, onIconRightPress, height, labelStyle, ...rest } = InputProps;

  return (
    <>
      {title && <Text style={[style.titleInput, labelStyle]}>
        {title}
      </Text>}
      <View style={[style.boxInput, {height: height ? height : 40, padding: 5}]}>
        {IconLeft && iconLeftName && (
          <TouchableOpacity style={{ width: "100%" }}>
            <IconLeft name={iconLeftName as any} size={20} color={themes.colors.gray} style={{ width: "100%", paddingHorizontal: 6 }} />
          </TouchableOpacity>
        )}
        <TextInput
          {...rest}
          style={[style.Input, { height: "100%" }]}
          ref={ref}

        />
        {IconRight && iconRightName && (
          <TouchableOpacity onPress={onIconRightPress} style={{ width: "100%" }}>
            <IconRight name={iconRightName as any} size={20} color={themes.colors.gray} style={{ width: "100%", paddingHorizontal: 6 }} />
          </TouchableOpacity>
        )}
      </View>
    </>
  )
})