import * as React from 'react'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-community/async-storage'

// navigators
import BottomTabNavigator from './BottomTabNavigator'
import AuthStack from './AuthStack'

const AppNavigator = () => {
    const [auth, setAuth] = useState<any>();

    const getUserId = async () => {
        const user = await AsyncStorage.getItem('userId')
        setAuth(user)
    }
    
    getUserId()

    return (
        <NavigationContainer>
            { auth
                ? <BottomTabNavigator />
                : <AuthStack />
            }
        </NavigationContainer>
    )
}

export default AppNavigator
