import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Platform,
    ToastAndroid,
    Linking,
    Alert
} from 'react-native'

import QRCode from 'react-native-qrcode-svg'
import RNFS from 'react-native-fs'
import CameraRoll from '@react-native-community/cameraroll'
import Clipboard from '@react-native-clipboard/clipboard'
import Modal from 'react-native-modal'
import Uti from '../../controller/APIs/Uti'

import constants from '../../controller/constants'

//1. npm i react-native-svg react-native-qrcode-svg
//2. thêm android:name="android.permission.CAMERA", android:name="android.permission.READ_EXTERNAL_STORAGE", android:name="android.permission.WRITE_EXTERNAL_STORAGE" vào AndroidManifest.xml
//3. thêm android:requestLegacyExternalStorage="true" vào application
//4. thêm include ':@react-native-community_cameraroll'project(':@react-native-community_cameraroll').projectDir = new File(rootProject.projectDir, 	'../node_modules/@react-native-community/cameraroll/android') vào android/settings.gradle

const ImgQrCode = ({ isModalVisible, setModalVisible, dataQR }) => {
    const [productQRref, setProductQRref] = useState()

    const downloadQRCode = async () => {
        if (Platform.OS === 'android' && !(await Uti.hasAndroidPermission)) {
            Alert.alert('Thông báo', 'Vui lòng cập nhật quyền truy cập')
            Linking.openSettings()
            return
        }

        if (productQRref) {
            productQRref.toDataURL((data) => {
                let filePath = RNFS.CachesDirectoryPath + `/${dataQR.data}.png`
                RNFS.writeFile(filePath, data, 'base64')
                    .then((success) => {
                        return CameraRoll.save(filePath, 'photo')
                    })
                    .then(() => {
                        ToastAndroid.show('Lưu QR Code vào thư viện thành công', ToastAndroid.LONG)
                    })
            })
        }
    }

    const copyPhone = () => {
        Clipboard.setString(dataQR.data)
        alert('coppy thành công')
    }

    return (
        <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
                <View style={styles.boxText}>
                    <Text style={styles.textTittle}>
                        {dataQR.type == 0 ? 'Nexus point' : 'NEXToken'}
                    </Text>
                    <Text style={styles.textTittle}>QR Code</Text>
                </View>
                <QRCode
                    value={JSON.stringify(dataQR)}
                    size={160}
                    getRef={(c) => setProductQRref(c)}
                    quietZone={10} // set nền trắng chữ đen khi lưu ảnh vào thư viện
                    style={styles.imgQrCode}
                />
                <TouchableOpacity onPress={downloadQRCode}>
                    <Image source={constants.image.icDownload} style={{ marginVertical: 20 }} />
                </TouchableOpacity>
                <Text style={styles.textPhone}>{dataQR.data}</Text>
                <TouchableOpacity onPress={copyPhone} style={styles.buttonCopy}>
                    <Text style={styles.textCopy}>Copy</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        width: 345
    },
    imgQrCode: {
        color: 'white',
        backgroundColor: 'black'
    },
    boxText: {
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 5
    },
    textTittle: {
        fontSize: 21,
        fontFamily: constants.font.fontPPSemiBold,
        color: constants.color.black
    },
    textPhone: {
        fontSize: 14,
        fontFamily: constants.font.fontPPSemiBold,
        color: constants.color.black
    },
    buttonCopy: {
        backgroundColor: constants.color.blue,
        borderRadius: 20,
        marginTop: 33,
        marginBottom: 26
    },
    textCopy: {
        fontSize: 14,
        fontFamily: constants.font.fontPPSemiBold,
        color: constants.color.white,
        marginVertical: 9,
        marginHorizontal: 28
    }
})

export default ImgQrCode
