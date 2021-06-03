import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { ScrollView, Text, Image } from "react-native";

import {
  Container,
  Header,
  Mold,
  Title,
  Icons,
  PointImage,
  Body,
  TitlePoint,
  TextFild,
  Location,
  Exit,
} from "./styles";
import { Ionicons, Fontisto, Entypo } from "@expo/vector-icons";
import ImgPonto from "../../images/PontoTuristico.png";

import FavoriteScroll from "../../components/FavoriteScrollView";

export default function App({ navigation }) {
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
    {
      image: { ImgPonto },
      name: "Caramello Shoes",
      location: "Rua Manoel Augusto",
    },
    {
      image: { ImgPonto },
      name: "EREM Dr. Mota",
      location: "Vila Noelândia",
    },
    {
      image: { ImgPonto },
      name: "Caramello Shoes",
      location: "Rua Manoel Augusto",
    },
    {
      image: { ImgPonto },
      name: "EREM Dr. Mota",
      location: "Vila Noelândia",
    },
    {
      image: { ImgPonto },
      name: "Caramello Shoes",
      location: "Rua Manoel Augusto",
    },
  ];

  return (
    <Container>
      <Header>
        <Icons>
          <Ionicons name="chevron-back" size={24} color="black" />

          <Title>Favoritos</Title>

          <Fontisto name="more-v-a" size={20} color="black" />
        </Icons>
      </Header>

      <Body>
        <FavoriteScroll data={places} />
      </Body>

      <StatusBar style="auto" />
    </Container>
  );
}
