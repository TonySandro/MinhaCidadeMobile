import React from "react";
import { ScrollView } from "react-native";
import ImgPonto from "../../images/PontoTuristico.png";

import {
  Mold,
  PointImage,
  TitlePoint,
  Location,
  TextFild,
  Favorite,
} from "./style";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

export default function HomeScroll(props) {
  return (
    <ScrollView
      style={{ width: "100%" }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {props.data.map((item) => {
        return (
          <Mold key={Math.random()}>
            <PointImage source={ImgPonto} />

            <TextFild>
              <Favorite>
                <MaterialIcons name="favorite-border" size={24} color="white" />
              </Favorite>
              <TitlePoint>{item.name}</TitlePoint>
              <Location>
                <Entypo name="location-pin" size={14} color="#FD1515" />
                {item.location}
              </Location>
            </TextFild>
          </Mold>
        );
      })}
    </ScrollView>
  );
}
