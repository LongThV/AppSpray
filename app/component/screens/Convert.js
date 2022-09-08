import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CovertScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ChargeScreen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CovertScreen
