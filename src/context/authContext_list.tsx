import React, { createContext, useContext, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { style } from "./styles";
import { Input } from "../components/input";

export const AuthContextList: any = createContext({});

export const AuthProviderList = (props: any) => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open()
  }

  const container = () => {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <TouchableOpacity>
            <MaterialIcons
              name="close"
              size={30}
            />
          </TouchableOpacity>
          <Text style={style.title}>
            Criar Tarefa
          </Text>
          <TouchableOpacity>
            <AntDesign
              name="check"
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View style={style.content}>
          <Input 
          title="Título:"
          labelStyle={style.label}
          />
          <Input 
          title="Descrição:"
          labelStyle={style.label}
          height={100}
          multiline
          numberOfLines={5}
          />

          <View style={{ width: "40%" }}>
            <Input 
            title="Tempo limite:"
            labelStyle={style.label}
            />
          </View>
          <View style={style.containerFlag}>
            <Text style={style.label}>Flags:</Text>
            <View style={{}}>

            </View>
          </View>
        </View>
      </View>
    )
  }

  return (
    <AuthContextList.Provider value={{ onOpen }}>
      {props.children}
      <Modalize
        ref={modalizeRef}
        childrenStyle={{ height: 600 }} adjustToContentHeight={true} >
        {container()}
      </Modalize>
    </AuthContextList.Provider>
  )
}

export const useAuth = () => useContext(AuthContextList);