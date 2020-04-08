import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'

// stacks
import Collection from './CollectionStack'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Collection"
                component={Collection} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator