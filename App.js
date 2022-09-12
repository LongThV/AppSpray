import React from 'react'
import { View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './app/component/navigation/RootNavigation'

export default function App() {
    return (
        <>
            <StatusBar translucent backgroundColor='transparent' />
            <NavigationContainer>
                <View style={{ flex: 1 }}>
                    <RootNavigation />
                </View>
            </NavigationContainer>
        </>
    )
}
