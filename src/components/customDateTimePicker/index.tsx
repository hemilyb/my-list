import { Modal, Platform, View } from "react-native";
import { style } from "./styles";
import { useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

interface CustomDateTimePickerProps {
 type: any,
 onDateChange: (date: Date) => void,
 show: boolean,
 setShow: (boolean: boolean) => void
}

const CustomDateTimePicker = ({ type, onDateChange, show, setShow }: CustomDateTimePickerProps) => {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if(onDateChange) {
      onDateChange(date)
    }
  }, [date, onDateChange])

  const onChange = (e: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
  }

  return (
    <Modal
      transparent={true}
      visible={show}
      onRequestClose={() => setShow(false)}
    >
      <View style={style.modalOverlay}>
        <View style={[
          style.container,
          Platform.OS === "android" && { backgroundColor: "transparent" }
        ]}>
          <DateTimePicker
            value={date}
            mode={type}
            display={Platform.OS === "ios" ? "inline" : "default"}
            onChange={onChange}
          />
        </View>
      </View>
    </Modal>
  )
}

export default CustomDateTimePicker;