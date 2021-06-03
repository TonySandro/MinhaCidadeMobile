import React, { useRef } from "react";
import { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Modalize } from "react-native-modalize";

export default function Popup(props) {
  const modalizeRef = useRef(null);

  useEffect(() => {
    modalizeRef.current?.open();
  });

  return (
    <Modalize ref={modalizeRef} snapPoint={160}>
      <View
        style={{
          flex: 1,
          height: 180,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#29ae19" }]}
        >
          <Text>Op1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#ff0000" }]}
        >
          <Text>Op2</Text>
        </TouchableOpacity>
      </View>
    </Modalize>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  txtSize: {
    fontSize: 20,
  },
  botao: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 7,
  },
});
