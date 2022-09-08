import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'

import RNProgressHud from 'progress-hud'

import constants from '../../controller/constants'
import CommonAPIs from '../../controller/APIs/CommonAPIs'

const Categories = () => {
    const [dataCategory, setDataCategory] = useState([])
    const [selected, setSelected] = useState(0)

    const getCategory = () => {
        CommonAPIs.category()
            .then((res) => {
                setDataCategory([constants.allCategory, ...res.data])
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    useEffect(() => {
        getCategory()
    }, [])

    const showCategories = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    ...styles.buttonCategory,
                    backgroundColor:
                        selected == item.id ? constants.color.darkBlue : constants.color.gray
                }}
                onPress={() => {
                    setSelected(item.id)
                }}
            >
                {item.id == 0 ? (
                    <View style={{ marginLeft: 10 }}></View>
                ) : (
                    <Image style={styles.icCategory} source={{ uri: item?.icon_parent }} />
                )}
                <Text
                    style={{
                        ...styles.titleCategory,
                        color:
                            selected == item.id ? constants.color.white : constants.color.darkBlue
                    }}
                >
                    {item.parent_name}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.categories}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dataCategory}
                renderItem={showCategories}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonCategory: {
        flexDirection: 'row',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    categories: {
        flexDirection: 'row',
        marginHorizontal: 18.5
    },

    titleCategory: {
        fontFamily: constants.font.fontRBMedium,
        fontSize: 13,
        paddingRight: 15,
        color: constants.color.darkBlue,
        marginLeft: 4,
        paddingVertical: 7
    },
    icCategory: {
        marginLeft: 15,
        width: 20,
        height: 20
    }
})

export default Categories
