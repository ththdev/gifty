import * as React from 'react'
import styled from 'styled-components/native'
import { Alert } from 'react-native'
import { GoogleSigninButton, GoogleSignin } from '@react-native-community/google-signin'
import AsyncStorage from '@react-native-community/async-storage'

GoogleSignin.configure({
    webClientId: "493563361431-9obfon7ibp8ta96qjpgfjh7vkjregu1q.apps.googleusercontent.com",
    offlineAccess: true,
    hostedDomain: '',
    iosClientId: "493563361431-9obfon7ibp8ta96qjpgfjh7vkjregu1q.apps.googleusercontent.com"
})

const GoogleButton = () => {    
    return (
        <GoogleSigninButton 
            onPress={GoogleLogin}
        />
    )
}

const GoogleLogin = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn()
        await AsyncStorage.setItem("user", JSON.stringify(userInfo.user))
    } catch(e) {
        console.log(e)
    }
}

export default GoogleButton