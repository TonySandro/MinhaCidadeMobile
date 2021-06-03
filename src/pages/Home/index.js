import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { Context } from "../../Context/AuthContext.js";
import { ScrollView, Text } from "react-native";
import ImgPonto from "../../images/PontoTuristico.png";

import {
  Container,
  Header,
  Next,
  Popular,
  Title,
  Icons,
  SeachInput,
} from "./style";
import { AntDesign, Fontisto } from "@expo/vector-icons";

import HomeScroll from "../../components/HomeScrollView";

export default function App({ navigation }) {
  const [text, setText] = useState("  Procurar...");
  const { user } = useContext(Context);

  const places = [
    {
      image: { ImgPonto },
      name: "Quadra Noelândia",
      location: "Vila Noelândia",
    },
    {
      image: { ImgPonto },
      name: "EREM Dr. Mota",
      location: "Vila Noelândia",
    },
  ];

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <Icons>
            <AntDesign name="scan1" size={24} color="black" />

            <Text
              style={{ fontWeight: "bold", fontSize: 16, color: "#7c73e6" }}
            >
              {`Bem Vindo, ${user.user.name}! `}
            </Text>

            <Fontisto name="more-v-a" size={20} color="black" />
          </Icons>
          <SeachInput onChangeText={setText} value={text} />
        </Header>

        <Next>
          <Title>Próximos a você</Title>
          <HomeScroll data={places} />
        </Next>

        <Popular>
          <Title>Populares</Title>
          <HomeScroll data={places} />
        </Popular>

        <StatusBar style="auto" />
      </ScrollView>
    </Container>
  );
}
