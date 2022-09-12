import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Constants from '../../controller/Constants'
const Background = ({ color = '#F7F7F7' }) => {
    return (
        <View style={{ ...styles.container, backgroundColor: color }}>
            <Image source={Constants.image.background} style={styles.img} />
            <View style={styles.belowBackground}>
                <Image source={Constants.image.imgSpray} style={styles.img2} />
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
        marginBottom: 50
    },
    img2: {
        width: 228,
        height: 44
    }
})

export default Background
