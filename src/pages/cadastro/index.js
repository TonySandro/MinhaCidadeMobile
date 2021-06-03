import { StatusBar } from "expo-status-bar";
import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Context } from "../../Context/AuthContext.js";
export default function App({ navigation }) {
  const { handleRegister } = useContext(Context);
  const [image, setImage] = useState(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  function signUp() {
    if (!name.length || !email.length || !password.length)
      return alert("Preencha todos os campos para continuar!");
    setDisabled(true);
    const formData = new FormData();

    if (image) {
      let filename = image.split("/").pop();
      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      formData.append("file", { uri: image, name: filename, type });
    }
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    handleRegister(formData).then((response) => {
      if (response.error) {
        alert(response.error);
        return setDisabled(false);
      }
      return navigation.navigate("Home");
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={(value) => {
          setName(value);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(value) => {
          setEmail(value);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(value) => {
          setPassword(value);
        }}
      />

      <TouchableOpacity style={styles.addFoto} onPress={pickImage}>
        <Text style={styles.addFotoText}>Foto de Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={signUp}
        disabled={disabled}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.p}>Ou cadastre-se com :</Text>
      <Image
        source={require("../../images/icones.png")}
        style={styles.icones}
      />

      <TouchableOpacity style={styles.crie}>
        <Text>
          Já tem uma conta?
          <Text
            style={styles.buttonCrie}
            onPress={() => navigation.navigate("Login")}
          >
            {" "}
            Fazer Login.
          </Text>
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  crie: {
    marginTop: "1%",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonCrie: {
    color: "#7C73E6",
  },

  container: {
    fontFamily: "Roboto_400Regular",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    marginTop: "2%",
    width: "50%",
    height: 100,
  },

  h1: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    // marginTop: '5%',
    color: "#7C73E6",
  },

  p: {
    fontStyle: "normal",
    fontSize: 14,
    marginTop: "2%",
    color: "#7C73E6",
  },

  icones: {
    marginTop: "1%",
  },

  input: {
    width: "70%",
    height: 35,
    fontSize: 18,
    marginTop: "7%",
    borderBottomColor: "#4F4F4F",
    borderBottomWidth: 1,
  },

  button: {
    width: "65%",
    height: 55,
    marginTop: "5%",
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7C73E6",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },

  addFoto: {
    width: "45%",
    height: 50,

    marginTop: "5%",
    borderRadius: 11,
    borderColor: "#585858AD",
    borderWidth: 1,

    alignItems: "center",
    justifyContent: "center",
  },

  addFotoText: {
    color: "#585858AD",
    fontSize: 17,
  },

  login: {
    color: "#7C73E6",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: "7%",
  },
});
