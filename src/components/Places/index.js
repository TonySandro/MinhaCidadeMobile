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

export default function App() {
  const [text, setText] = useState("  Procurar...");
  const { user } = useContext(Context);
  return (
    <Container>
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
    </Container>
  );
}
