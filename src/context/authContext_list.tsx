import React, { createContext, useContext, useRef, useState } from "react";
import { Dimensions, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { style } from "./styles";
import { Input } from "../components/input";
import { themes } from "../global/themes";
import { Flag } from "../components/flag";
import CustomDateTimePicker from "../components/customDateTimePicker";

export const AuthContextList: any = createContext({});

const flags = [
  { caption: "urgente", color: themes.colors.red },
  { caption: "opcional", color: themes.colors.blueLight }
]

export const AuthProviderList = (props: any) => {
  const modalizeRef = useRef<Modalize>(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFlag, setSelectedFlag] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onOpen = () => {
    modalizeRef.current?.open();
  }

  const onClose = () => {
    modalizeRef.current?.close();
  }

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time: any) => {
    setSelectedTime(time)
  }

  const renderFlags = () => {
    return (
      flags.map((item, index) => (
        <TouchableOpacity key={index}>
          <Flag
            caption={item.caption}
            color={item.color}
          />
        </TouchableOpacity>
      ))
    )
  }

  const container = () => {
    return (
      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={style.header}>
          <TouchableOpacity onPress={onClose}>
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
            value={title}
            onChangeText={setTitle}
          />
          <Input
            title="Descrição:"
            labelStyle={style.label}
            height={100}
            multiline
            numberOfLines={5}
            value={description}
            onChangeText={setDescription}
            textAlignVertical="top"
          />

          <View style={{ width: "40%" }}>
            <View style={{ flexDirection: "row", gap: 10, width: "100%" }}>
              <TouchableOpacity
                onPress={() => setShowDatePicker(true)}
                style={{ width: 200 }}
              >
                <Input
                  title="Data limite:"
                  labelStyle={style.label}
                  editable={false}
                  value={selectedDate.toLocaleDateString("pt-BR")}
                  onPress={() => setShowDatePicker(true)}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShowTimePicker(true)}
                style={{ width: 120 }}
              >
                <Input
                  title="Hora limite:"
                  labelStyle={style.label}
                  editable={false}
                  value={selectedTime.toLocaleTimeString("pt-BR")}
                  onPress={() => setShowTimePicker(true)}
                />
              </TouchableOpacity>
            </View>
            <CustomDateTimePicker
              onDateChange={handleDateChange}
              setShow={setShowDatePicker}
              show={showDatePicker}
              type={"date"}
            />

            <CustomDateTimePicker
              onDateChange={handleTimeChange}
              setShow={setShowTimePicker}
              show={showTimePicker}
              type={"time"}
            />
          </View>
          <View style={style.containerFlag}>
            <Text style={style.label}>Flags:</Text>
            <View style={style.flag}>
              {renderFlags()}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }

  return (
    <AuthContextList.Provider value={{ onOpen }}>
      {props.children}
      <Modalize
        ref={modalizeRef}
        childrenStyle={{ height: Dimensions.get("window").height / 1.7 }}
        adjustToContentHeight={true}
      >
        {container()}
      </Modalize>
    </AuthContextList.Provider>
  )
}

export const useAuth = () => useContext(AuthContextList);