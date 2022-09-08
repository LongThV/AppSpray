import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import constants from '../../controller/constants'

const HeaderBack = ({ name }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.tittleHeader}>
            <View style={styles.iconAndText}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='chevron-back-outline' color='white' size={35} />
                </TouchableOpacity>
                <Text style={styles.title}>{name}</Text>
            </View>
            <Ionicons name='md-notifications' color='white' size={30} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: constants.font.fontPPBold,
        fontSize: 30,
        color: constants.color.textButtonColor
    },
    tittleHeader: {
        flexDirection: 'row',
        marginRight: 22,
        justifyContent: 'space-between',
        marginTop: 22,
        alignItems: 'center',
        marginBottom: 17.4,
        marginLeft: 10
    },
    iconAndText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default HeaderBack
