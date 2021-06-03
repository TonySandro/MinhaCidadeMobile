import React from "react";
import { ScrollView, Text } from "react-native";

import {
  Mold,
  PointImage,
  TitlePoint,
  TextFild,
  Location,
  Exit,
} from "./styles.js";
import { Entypo } from "@expo/vector-icons";
import ImgPonto from "../../images/PontoTuristico.png";

export default function FavoriteScroll(props) {
  
  return (
    <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false}>
      {props.data.map((item) => {
        return (
          <Mold key={Math.random()}>
            <PointImage source={ImgPonto} />

            <TextFild>
              <TitlePoint>{item.name}</TitlePoint>
              <Location>
                <Entypo name="location-pin" size={18} color="#FD1515" />
                {item.location}
              </Location>
            </TextFild>

            <Exit>
              <Text>X</Text>
            </Exit>
          </Mold>
        );
      })}
    </ScrollView>
  );
}
