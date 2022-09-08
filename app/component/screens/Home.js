import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'

import Background from '../common/Background'
import Header from '../common/Header'
import constants from '../../controller/constants'
import Categories from '../common/Categories'
import StoreCategories from '../common/StoreCategories'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Background />
            <Header name={'HOME'} />
            <View style={styles.payment}>
                <TouchableOpacity style={styles.buttonPayment}>
                    <Image source={constants.image.icScan} style={{ marginTop: 10 }} />
                    <Text style={styles.textPayment}>Scan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonPayment}>
                    <Image source={constants.image.icSend} style={{ marginTop: 10 }} />
                    <Text style={styles.textPayment}>Send</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonPayment}>
                    <Image source={constants.image.icReceive} style={{ marginTop: 10 }} />
                    <Text style={styles.textPayment}>Receive</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.boxCategories}>
                <Categories />
                <StoreCategories />
                <StoreCategories />
                <StoreCategories />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonPayment: {
        backgroundColor: constants.color.backgroundBelow,
        width: 76,
        height: 76,
        shadowColor: constants.color.shadowBlack,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        elevation: 4,
        shadowRadius: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    payment: {
        marginTop: 21,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 17,
        paddingBottom: 15
    },
    textPayment: {
        fontSize: 14,
        fontFamily: constants.font.fontPPMedium,
        marginTop: 7
    },
    boxCategories: {
        marginTop: 10
    }
})

export default HomeScreen
