import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { style } from "./styles";
import { Input } from "../../components/input";
import { Ball } from "../../components/ball";
import { Flag } from "../../components/flag";
import { themes } from "../../global/themes";

type PropCard = {
  item: number,
  title: string,
  description: string,
  flag: 'urgente' | 'opcional'
}

const data: any = [
  {
    item: 0,
    title: 'Realizar a lição de casa!',
    description: 'página 10 a 20',
    flag: 'urgente'
  },
  {
    item: 1,
    title: 'Passear com cachorro!',
    description: 'página 10 a 20',
    flag: 'urgente'
  },
  {
    item: 2,
    title: 'Sair para tomar açai!',
    description: 'página 10 a 20',
    flag: 'urgente'
  }
]

export default function List() {

  const renderCard = (item: PropCard) => {
    return (
      <TouchableOpacity style={style.card}>
        <View style={style.rowCard}>
          <View style={style.rowCardLeft}>
            <Ball color="red"/>
            <View>
              <Text style={style.titleCard}>{item.title}</Text>
              <Text style={style.descpCard}>{item.description}</Text>
            </View>
          </View>
          <Flag caption="Urgente!"
          color={themes.colors.red}
          />
        </View>
      </TouchableOpacity>

    )
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.greeting}>Olá!</Text>
        <View style={style.boxInput}>
          <Input />
        </View>
      </View>
      <View style={style.boxList}>
        <FlatList
          data={data}
          style={{ marginTop: 40, paddingHorizontal: 30 }}
          keyExtractor={(item, index) => item.item.toString()}
          renderItem={({ item, index }) => {
            return (
              renderCard(item)
            )
          }}
        />
      </View>
    </View>
  )
}