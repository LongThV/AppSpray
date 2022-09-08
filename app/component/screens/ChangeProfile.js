import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native'

import Background from '../common/Background'
import HeaderBack from '../common/HeaderBack'
import constants from '../../controller/constants'

const ChangeProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Background />
            <HeaderBack name='Change Profile' />
            <View style={styles.boxProfile}>
                <TouchableOpacity>
                    <Image source={constants.image.imgAvatar} style={styles.imgAvatar} />
                </TouchableOpacity>
                <View style={styles.boxInfo}>
                    <Text style={{ ...styles.textInfo, fontSize: 20 }}>Name</Text>
                    <TextInput style={styles.textContent} placeholder='Jonathan Doe' />
                </View>
                <View style={styles.boxInfo}>
                    <Text style={styles.textInfo}>Phone</Text>
                    <TextInput style={styles.textContent} placeholder='Jonathan Doe' />
                </View>
                <View style={styles.boxInfo}>
                    <Text style={styles.textInfo}>NXD Deposite Address</Text>
                    <TextInput
                        style={styles.textContent}
                        placeholder='9qNY2zwvjCjSoQDAFGIToG5KwU...'
                    />
                </View>
                <TouchableOpacity style={styles.buttonSave}>
                    <Text style={styles.textSave}>Save</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    boxProfile: {
        backgroundColor: constants.color.white,
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 1,
        paddingBottom: 28
    },
    imgAvatar: {
        marginTop: 35,
        marginBottom: 13
    },
    textContent: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: constants.color.borderColor,
        height: 46
    },
    textHolder: {
        fontSize: 16,
        fontFamily: constants.font.fontPPSemiBold
    },
    boxInfo: {
        width: '90%',
        marginTop: 15
    },
    textInfo: {
        fontFamily: constants.font.fontPPSemiBold,
        color: constants.color.colorText,
        fontSize: 15,
        marginBottom: 13
    },
    buttonSave: {
        backgroundColor: constants.color.buttonColor,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 46,
        marginTop: 22,
        borderRadius: 20
    },
    textSave: {
        fontFamily: constants.font.fontPPSemiBold,
        color: constants.color.white
    }
})

export default ChangeProfileScreen
