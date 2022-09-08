import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import 'react-native-gesture-handler'

import ChargeScreen from '../screens/Convert'
import ChangeProfileScreen from '../screens/ChangeProfile'

const Stack = createStackNavigator()

const ChargeNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='ChargeScreen'
            screenOptions={{
                headerTintColor: 'red',
                headerStyle: {
                    height: 120
                },
                headerTitleStyle: {
                    fontSize: 30
                },
                headerShown: false
            }}
        >
            <Stack.Screen name='ChargeScreen' component={ChargeScreen} />
            <Stack.Screen name='ChangeProfileScreen' component={ChangeProfileScreen} />
        </Stack.Navigator>
    )
}

export default ChargeNavigation
