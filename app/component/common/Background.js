import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import constants from '../../controller/constants'

const Background = ({ color = '#F7F7F7' }) => {
    return (
        <View style={{ ...styles.container, backgroundColor: color }}>
            <Image source={constants.image.background} style={styles.img} />
            <View style={styles.belowBackground}>
                <Image source={constants.image.imgSpray} style={styles.img2} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%'
    },

    img: {
        width: '100%',
        height: 255
    },
    belowBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 75
    },
    img2: {
        width: 228,
        height: 44
    }
})

export default Background
