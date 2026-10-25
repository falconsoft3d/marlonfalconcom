---
title: Cómo usar AsyncStorage en React Native con Expo
date: 2022/12/20
description: Cómo guardar, leer y borrar datos en el dispositivo con AsyncStorage en una app de React Native con Expo.
tag: reactnative, expo, AsyncStorage
author: Marlon Falcon Hernandez
---

# Cómo usar AsyncStorage en React Native con Expo

En este post vamos a ver cómo usar AsyncStorage en React Native con Expo. AsyncStorage es un sistema de almacenamiento clave-valor, persistente y asíncrono, que permite guardar datos sencillos en el dispositivo (por ejemplo, preferencias o el nombre del usuario) y recuperarlos aunque se cierre la app.

En el ejemplo, el usuario escribe su nombre, lo guardamos con `setItem`, lo leemos al abrir la app con `getItem` y lo borramos con `removeItem`:

```js
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, TextInput, Button, View, Text, TouchableHighlight } from 'react-native';
import { AsyncStorage } from 'react-native';


export default function App() {

  const [inputText, setInputText] = useState('');
  const[ nombreStorage, setNombreStorage ] = useState('');

  const giveData = async () =>{
    try {
      const nombre = await AsyncStorage.getItem('nombre');
      setNombreStorage(nombre)
    } catch (error) {
      console.log(error)
    }
  }  

  useEffect(() => {
    giveData();
  }, [])

  const saveData =  async () => {
    try {
      await AsyncStorage.setItem('nombre', inputText)
      setNombreStorage(inputText);
    } catch (error) {
      console.log(error)
    }
    
  }

  const deleteData =  async () => {
    try {
      await AsyncStorage.removeItem('nombre');
      setNombreStorage("");
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <>
    <View style={styles.container}>

      {nombreStorage !== ""  ? <Text> Hola: {nombreStorage} </Text> : null}
      
        
      <TextInput 
          placeholder="Escribe tu nombre"
          onChangeText= { text => setInputText(text) }
          style={styles.input}/>
      <Button 
          title="Guardar"
          color = '#333'
          onPress ={ () => saveData()  }
          />

      {nombreStorage !== ""  ?(
      <TouchableHighlight 
          onPress ={ () => deleteData()  }
          style={styles.btnEliminar}>
          <Text style={styles.textoEliminar}> Eliminar &times;</Text>
      </TouchableHighlight>) : null}

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },

  input : {
    borderColor: '#666',
    borderBottomWidth: 1,
    width: 300,
    height:40
  },

  btnEliminar: {
    backgroundColor: 'red',
    marginTop: 20,
    padding: 10
  },
  textoEliminar : {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width:300
  }
});
```

## Nota

En las versiones actuales de React Native, `AsyncStorage` ya no se incluye en el paquete `react-native`. Instálalo con `npx expo install @react-native-async-storage/async-storage` e impórtalo con `import AsyncStorage from '@react-native-async-storage/async-storage'`; el resto del código funciona igual. Recuerda que solo admite cadenas de texto: para guardar objetos, conviértelos con `JSON.stringify` y recupéralos con `JSON.parse`.
