import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Alert,
} from "react-native";

import { style } from "./styles";
import Logo from "../../assets/logo.png"
import { themes } from "../../global/themes";
import { Input } from "../../components/input";
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { Button } from "../../components/button";
import { useNavigation, NavigationProp } from "@react-navigation/native"

export default function Login() {

  const navigation = useNavigation<NavigationProp<any>>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);
      if (!email || !password) {
        setLoading(false);
        return Alert.alert("Atenção", "informe os campos obrigatórios!");
      }
      setTimeout(() => {
        setLoading(false);
        navigation.reset({
          routes: [
            { name: "BottomRoutes" }
          ]
        })
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image
          source={Logo}
          style={style.logo}
          resizeMode="contain"
        />
        <Text style={style.text}>
          Bem-vindo de volta!
        </Text>
      </View>
      <View style={style.boxMid}>
        <Input
          title="ENDEREÇO E-MAIL"
          value={email}
          onChangeText={setEmail}
          IconRight={MaterialIcons}
          iconRightName="email"
        />
        <Input
          title="SENHA"
          value={password}
          onChangeText={setPassword}
          IconRight={Octicons}
          iconRightName={showPassword ? "eye-closed" : "eye"}
          onIconRightPress={() => setShowPassword(!showPassword)}
          secureTextEntry={showPassword}
        />
      </View>
      <View style={style.boxBottom}>
        <Button
          text="ENTRAR"
          loading={loading}
          onPress={() => getLogin()}
        />
      </View>
      <Text
        style={{ color: themes.colors.gray }}>
        Não possui conta? <Text style={{ color: themes.colors.primary }}>Crie agora!
        </Text>
      </Text>
    </View>
  )
}