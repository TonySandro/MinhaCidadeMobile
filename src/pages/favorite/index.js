import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  // ScrollView,
  Text,
  Image,
} from "react-native";

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

export default function App({ navigation }) {
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
        <Mold>
          <PointImage source={ImgPonto} />

          <TextFild>
            <TitlePoint>Praça Matriz</TitlePoint>
            <Location>
              <Entypo name="location-pin" size={18} color="#FD1515" />
              Location
            </Location>
          </TextFild>
          <Exit>
            <Text>X</Text>
          </Exit>
        </Mold>
      </Body>

      <StatusBar style="auto" />
    </Container>
  );
}
