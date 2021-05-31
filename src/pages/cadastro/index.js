import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import api from '../../services/api.js'

export default function App({ navigation }) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function signUp() {
        const data = {
            name, email, password
        }

        api.post('/users', data).then((response) => {
            alert("Cadastrado com sucesso.")
            return response
        }).catch(e => console.log(e))

        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Cadastro</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                onChangeText={(value) => { setName(value) }}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(value) => { setEmail(value) }}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
                onChangeText={(value) => { setPassword(value) }}
            />

            <TouchableOpacity style={styles.addFoto}>
                <Text style={styles.addFotoText}>Foto de Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={signUp} >
                <Text style={styles.buttonText} >Cadastrar</Text>
            </TouchableOpacity>

            <Text style={styles.p} >Ou cadastre-se com :</Text>
            <Image
                source={require("../../images/icones.png")}
                style={styles.icones}
            />

            <TouchableOpacity style={styles.crie}>
                <Text>Já tem uma conta?<Text style={styles.buttonCrie} onPress={() => navigation.navigate('Login')}> Fazer Login.</Text></Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    crie: {
        marginTop: '1%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonCrie: {
        color: '#7C73E6',
    },

    container: {
        fontFamily: "Roboto_400Regular",
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        marginTop: '2%',
        width: '50%',
        height: 100,
    },

    h1: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        // marginTop: '5%',
        color: '#7C73E6',
    },

    p: {
        fontStyle: 'normal',
        fontSize: 14,
        marginTop: '2%',
        color: '#7C73E6',
    },

    icones: {
        marginTop: '1%'
    },

    input: {
        width: '70%',
        height: 35,
        fontSize: 18,
        marginTop: '7%',
        borderBottomColor: '#4F4F4F',
        borderBottomWidth: 1,

    },

    button: {
        width: '65%',
        height: 55,
        marginTop: '5%',
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7C73E6',
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },

    addFoto: {
        width: '45%',
        height: 50,

        marginTop: '5%',
        borderRadius: 11,
        borderColor: '#585858AD',
        borderWidth: 1,

        alignItems: 'center',
        justifyContent: 'center',
    },

    addFotoText: {
        color: '#585858AD',
        fontSize: 17
    },

    login: {
        color: '#7C73E6',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: '7%',
    }
});
