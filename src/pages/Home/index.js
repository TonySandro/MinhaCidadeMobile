import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/AuthContext.js";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ImgPonto from "../../images/PontoTuristico.png";

import {
  Container,
  Header,
  Mold,
  Next,
  Popular,
  Title,
  PointImage,
  TitlePoint,
  Location,
  Icons,
  SeachInput,
  TextFild,
  Favorite,
} from "./style";
import { AntDesign, Fontisto, Entypo, MaterialIcons } from "@expo/vector-icons";

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
      <Header>
        <Icons>
          <AntDesign name="scan1" size={24} color="black" />

          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#7c73e6" }}>
            {`Bem Vindo, ${user.user.name}! `}
          </Text>

          <Fontisto name="more-v-a" size={20} color="black" />
        </Icons>
        <SeachInput onChangeText={setText} value={text} />
      </Header>

      <Next>
        <Title>Próximos a você</Title>
        <Mold>
          <PointImage source={ImgPonto} />

          <TextFild>
            <Favorite>
              <MaterialIcons name="favorite-border" size={24} color="white" />
            </Favorite>
            <TitlePoint>{places[0].name}</TitlePoint>
            <Location>
              <Entypo name="location-pin" size={14} color="#FD1515" />
              {places[0].location}
            </Location>
          </TextFild>
        </Mold>
      </Next>

      <Popular>
        <Title>Populares</Title>

        <Mold>
          <PointImage source={ImgPonto} />

          <TextFild>
            <Favorite>
              <MaterialIcons name="favorite-border" size={20} color="white" />
            </Favorite>
            <TitlePoint>{places[1].name}</TitlePoint>
            <Location>
              <Entypo name="location-pin" size={14} color="#FD1515" />
              {places[1].location}
            </Location>
          </TextFild>
        </Mold>
      </Popular>

      <StatusBar style="auto" />
    </Container>
  );
}

// const styles = StyleSheet.create({
//   icon: {
//     width: 35,
//     height: 35,

//     padding: 4,
//     alignItems: "center",
//     justifyContent: "center",

//     backgroundColor: "#F2F2F2",
//     borderColor: "#7C73E6",
//     borderRadius: 5,
//     borderStyle: "solid",
//     borderWidth: 1,
//   },
// });
