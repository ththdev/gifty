import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AuthScreen from '../screens/auth/AuthScreen'
import LoginScreen from '../screens/auth/LoginScreen'

const Stack = createStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack