import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'

import { Switch } from 'react-native-paper'

import Background from '../common/Background'
import HeaderShort from '../common/HeaderShort'
import constants from '../../controller/constants'
import ImgQrCode from '../../component/common/ImgQrCode'
import { useNavigation } from '@react-navigation/native'

let dataQRCode = {
    phone: {
        app: 'NexusPoint',
        type: 0,
        data: '0348000950'
    },
    wallet: {
        app: 'NexusPoint',
        type: 1,
        data: 'TPza8tkcTfGa4XzyZoMbGEjpuyaBUJBsN9'
    }
}

const ProfileScreen = () => {
    const navigation = useNavigation()
    const [isModalVisible, setModalVisible] = useState(false)
    const [dataQR, setDataQR] = useState([])
    const [isSwitchOn, setIsSwitchOn] = useState(false)
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)

    const onQrcodePhone = () => {
        setDataQR(dataQRCode.phone)
        setModalVisible(true)
    }

    const onQrcodeWallet = () => {
        setDataQR(dataQRCode.wallet)
        setModalVisible(true)
    }

    return (
        <ScrollView style={styles.container}>
            <Background />
            <ImgQrCode
                isModalVisible={isModalVisible}
                setModalVisible={(value) => setModalVisible(value)}
                dataQR={dataQR}
            />
            <HeaderShort name='Profile' />
            <View style={styles.boxProfile}>
                <Image source={constants.image.imgAvatar} style={styles.imgAvatar} />
                <View style={styles.boxInforUser}>
                    <Image source={constants.image.icQrCode} style={styles.imgQrcode} />
                    <View style={styles.inforUser}>
                        <Text style={styles.textUser}>Jonathan Doe</Text>
                        <Text style={styles.textPhone}>No.0912-339-3493</Text>
                    </View>
                </View>
                <View style={styles.boxQrCode}>
                    <TouchableOpacity onPress={onQrcodePhone} style={styles.buttonQr}>
                        <Image source={constants.image.icQrCode} style={styles.imgQrcodeInButton} />
                        <View style={styles.boxTextQr}>
                            <Text style={styles.textOnQr}>NexusPoint</Text>
                            <Text style={styles.textQr}>QR Code</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onQrcodeWallet} style={styles.buttonQr}>
                        <Image source={constants.image.icQrCode} style={styles.imgQrcodeInButton} />
                        <View style={styles.boxTextQr}>
                            <Text style={styles.textOnQr}>NEXToken</Text>
                            <Text style={styles.textQr}>QR Code</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginBottom: 20 }}>
                <TouchableOpacity style={{ ...styles.button, justifyContent: 'space-between' }}>
                    <View style={styles.boxIconText}>
                        <Image source={constants.image.icAuthentication} style={styles.icButton} />
                        <Text style={styles.textButton}>2 Factor Authentication</Text>
                    </View>
                    <View>
                        <Switch
                            value={isSwitchOn}
                            onValueChange={onToggleSwitch}
                            color='#7879E8'
                            style={{ marginRight: 15 }}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate(constants.screenName.changeProfile)}
                    style={{ ...styles.button, justifyContent: 'space-between' }}
                >
                    <View style={styles.boxIconText}>
                        <Image source={constants.image.icProfile} style={styles.icButton} />
                        <Text style={styles.textButton}>Change Profile</Text>
                    </View>
                    <Image source={constants.image.icNext} style={styles.icNext} />
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.button, justifyContent: 'space-between' }}>
                    <View style={styles.boxIconText}>
                        <Image source={constants.image.icPayment} style={styles.icButton} />
                        <Text style={styles.textButton}>Payment History</Text>
                    </View>
                    <Image source={constants.image.icNext} style={styles.icNext} />
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.button, justifyContent: 'space-between' }}>
                    <View style={styles.boxIconText}>
                        <Image source={constants.image.icSetting} style={styles.icButton} />
                        <Text style={styles.textButton}>Setting</Text>
                    </View>
                    <Image source={constants.image.icNext} style={styles.icNext} />
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.button, justifyContent: 'space-between' }}>
                    <View style={styles.boxIconText}>
                        <Image source={constants.image.icTerms} style={styles.icButton} />
                        <Text style={styles.textButton}>Terms of Services</Text>
                    </View>
                    <Image source={constants.image.icNext} style={styles.icNext} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={constants.image.icHelp} style={styles.icButton} />
                    <Text style={styles.textButtonLight}>Help & Support</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={constants.image.icLogout} style={styles.icButton} />
                    <Text style={styles.textButtonLight}>Logout</Text>
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
        elevation: 1
    },
    boxInforUser: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        borderBottomWidth: 1,
        borderColor: constants.color.borderColor
    },
    imgAvatar: {
        marginTop: 35,
        marginBottom: 13
    },
    imgQrcode: {
        width: 23,
        height: 23,
        marginLeft: 30
    },
    inforUser: {
        marginLeft: 25
    },
    textUser: {
        fontSize: 20,
        fontFamily: constants.font.fontPPSemiBold,
        textAlign: 'center',
        color: constants.color.colorText
    },
    textPhone: {
        fontSize: 14,
        fontFamily: constants.font.fontPPMedium
    },
    boxQrCode: {
        flexDirection: 'row',
        marginVertical: 20,
        width: '85%',
        justifyContent: 'space-between'
    },
    buttonQr: {
        width: 140,
        height: 46,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: constants.color.borderColor
    },
    boxTextQr: {
        marginLeft: 15
    },
    textOnQr: {
        fontSize: 10,
        fontFamily: constants.font.fontPPSemiBold,
        color: constants.color.colorText
    },
    textQr: {
        fontSize: 16,
        fontFamily: constants.font.fontPPSemiBold,
        color: constants.color.colorText
    },
    button: {
        flexDirection: 'row',
        marginHorizontal: 20,
        backgroundColor: constants.color.white,
        alignItems: 'center',
        marginTop: 26,
        borderRadius: 10,
        shadowRadius: 20
    },
    textButton: {
        marginVertical: 18,
        marginLeft: 12,
        fontSize: 16,
        fontFamily: constants.font.fontPPSemiBold,
        color: constants.color.colorText
    },
    icButton: {
        marginLeft: 20
    },
    icNext: {
        marginRight: 20
    },
    textButtonLight: {
        marginVertical: 18,
        marginLeft: 12,
        fontSize: 15
    },
    boxIconText: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default ProfileScreen
