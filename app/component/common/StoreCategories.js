import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'

import RNProgressHud from 'progress-hud'

import constants from '../../controller/constants'
import CommonAPIs from '../../controller/APIs/CommonAPIs'

const StoreCategories = () => {
    const [dataStore, setDataStore] = useState([])
    const getStore = () => {
        CommonAPIs.store()
            .then((res) => {
                setDataStore(res.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    useEffect(() => {
        getStore()
    }, [])

    const showItems = ({ item }) => {
        return (
            <TouchableOpacity style={styles.food}>
                <Image style={styles.imgFood} source={{ uri: item.avatar }} />
                <Image
                    source={require('../../assets/images/img_backgroundFood.png')}
                    style={styles.imgBackgroundFood}
                />
                <View style={styles.tittleFood}>
                    <Text style={styles.textFood}>{item.name}</Text>
                    <View style={styles.star}>
                        <Image source={require('../../assets/images/ic_star.png')} />
                        <Text style={styles.textFood}>{item.rate}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.ContentSpecial}>
            <View style={styles.tittleSpecial}>
                <Text style={styles.textSpecial}>Recomended Store</Text>
                <TouchableOpacity>
                    <Text style={styles.textSeeAllSpecial}>See all</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={dataStore}
                renderItem={showItems}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    tittleSpecial: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 23,
        alignItems: 'center'
    },
    ContentSpecial: {
        marginTop: 25,
        marginLeft: 18,
        flex: 1
    },
    food: {
        marginRight: 17
    },
    textSpecial: {
        fontSize: 16,
        fontFamily: constants.font.fontPPBold,
        color: constants.color.header
    },
    textSeeAllSpecial: {
        fontFamily: constants.font.fontPPRegular,
        fontSize: 14,
        marginRight: 17
    },
    star: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tittleFood: {
        position: 'absolute',
        bottom: 0,
        left: 16
    },
    textFood: {
        fontFamily: constants.font.fontPPBold,
        fontSize: 14,
        color: constants.color.white,
        marginLeft: 5
    },
    imgBackgroundFood: {
        position: 'absolute',
        opacity: 0.8,
        width: '100%',
        height: '100%',
        borderRadius: 15
    },
    imgFood: {
        width: 175,
        height: 175,
        borderRadius: 15
    }
})

export default StoreCategories
