import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CollectionContainer from '../containers/CollectionContainer'

const Stack = createStackNavigator()

const CollectionStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Collection" component={CollectionContainer} />
        </Stack.Navigator>
    )
}

export default CollectionStack