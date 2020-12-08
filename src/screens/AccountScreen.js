import React, {useContext} from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext'
import {FontAwesome} from 'react-native-vector-icons'
import RNSimpleCrypto from "react-native-simple-crypto";
import * as Crypto from 'expo-crypto';
import CryptoJS from "react-native-crypto-js";
import { RSA } from 'react-native-rsa-native';

const AccountScreen = ({navigation}) => {
  const onClickencypt = async () => {
    let message = "my secret message";

    console.log(message)

    // await RSA.generateKeys(4096) // set key size
    // .then(keys => {
    //     console.log('4096 private:', keys.private); // the private key
    //     console.log('4096 public:', keys.public); // the public key
    //     RSA.encrypt(message, keys.public)
    //     .then(encodedMessage => {
    //         console.log(`the encoded message is ${encodedMessage}`);
    //         RSA.decrypt(encodedMessage, keys.private)
    //         .then(decryptedMessage => {
    //             console.log(`The original message was ${decryptedMessage}`);
    //         });
    //     });
    // });


    // let ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
    // console.log(ciphertext)
    // let bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    // let originalText = bytes.toString(CryptoJS.enc.Utf8);
    // console.log(originalText)
    // console.log(Crypto.digestStringAsync)
    // const digest = await Crypto.digestStringAsync(
    //   Crypto.CryptoDigestAlgorithm.SHA256,
    //   'Github stars are neat 🌟'
    // );
    // console.log('Digest: ', digest);




    // const toHex = RNSimpleCrypto.utils.convertArrayBufferToHex
    // const toUtf8 = RNSimpleCrypto.utils.convertArrayBufferToUtf8
    // const message  = "data to encrypt"
    // const messageArrayBuffer = await RNSimpleCrypto.utils.convertUtf8ToArrayBuffer(message);

    // console.log(messageArrayBuffer)

    // const keyArrayBuffer = RNSimpleCrypto.utils.randomBytes(32);
    // console.log("randomBytes key", toHex(keyArrayBuffer));
    
    // const ivArrayBuffer = RNSimpleCrypto.utils.randomBytes(16);
    // console.log("randomBytes iv", toHex(ivArrayBuffer));

    // const cipherTextArrayBuffer = RNSimpleCrypto.AES.encrypt(
    //   messageArrayBuffer,
    //   keyArrayBuffer,
    //   ivArrayBuffer
    // );
    // console.log("AES encrypt", toHex(cipherTextArrayBuffer))

    // const decryptedArrayBuffer = RNSimpleCrypto.AES.decrypt(
    //   cipherTextArrayBuffer,
    //   keyArrayBuffer,
    //   ivArrayBuffer
    // );

    // console.log("AES decrypt", toUtf8(decryptedArrayBuffer));
    // if (toUtf8(decryptedArrayBuffer) !== message) {
    //   console.error('AES decrypt returned unexpected results')
    // }
  }
  const { signout} = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top:'always'}}>
      <Text style={{ fontSize: 48}}>AccountScreen</Text>
      <Button title="Sign Out" onPress={signout}/>
      <Button title="onClickencypt" onPress={() => onClickencypt()} />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginBottom: 250
  },
})

export default AccountScreen

