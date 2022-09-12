import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import ProfileScreen from '../screens/Profile'
import ChangeProfileScreen from '../screens/ChangeProfile'

const Stack = createStackNavigator()

const ProfileNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='ProfileScreen'
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
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
            <Stack.Screen name='ChangeProfileScreen' component={ChangeProfileScreen} />
        </Stack.Navigator>
    )
}

export default ProfileNavigation
