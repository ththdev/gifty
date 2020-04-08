import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// navigators
import CollectionStack from './CollectionStack'
import BottomTabNavigator from './BottomTabNavigator'

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
            {/* <Stack.Navigator headerMode="none">
                <Stack.Screen name="Collection" component={CollectionStack} />
            </Stack.Navigator> */}
        </NavigationContainer>
    )
}

export default AppNavigator
