import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Background from '../common/Background'

const ScanScreen = () => {
    return (
        <View style={styles.container}>
            <Background />
            <Text>Scan</Text>
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

export default ScanScreen
