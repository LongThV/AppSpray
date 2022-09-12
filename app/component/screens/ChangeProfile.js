import React, { useState, useRef } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    LogBox
} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import ActionSheet from 'react-native-actionsheet'
import RNProgressHud from 'progress-hud'
import Background from '../common/Background'
import HeaderBack from '../common/HeaderBack'
import Constants from '../../controller/Constants'
import CommonAPIs from '../../controller/APIs/CommonAPIs'
import AppManager from '../../controller/APIs/AppManager'

LogBox.ignoreLogs(['Animated: `useNativeDriver`', 'componentWillReceiveProps'])

const ChangeProfileScreen = () => {
    const refActionSheet = useRef()
    const [profile, setProfile] = useState()

    const getAvatar = () => {
        if (
            AppManager.shared.currentUser?.avatar != null &&
            AppManager.shared.currentUser?.avatar !== ''
        ) {
            return { uri: AppManager.shared.currentUser?.avatar }
        }
        return Constants.image.imgAvatarDefault
    }

    const updateAvatarUser = (image) => {
        RNProgressHud.show()
        CommonAPIs.updateAvatar(image)
            .then((user) => {
                setProfile(user)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => RNProgressHud.dismiss())
    }

    const onShowImageActionSheet = () => {
        refActionSheet.current?.show(true)
    }

    const openCamera = () => {
        ImagePicker.openCamera({
            mediaType: 'photo',
            width: 1000,
            height: 1000,
            cropping: true
        })
            .then((image) => {})
            .catch((err) => {})
    }

    const openLibrary = () => {
        ImagePicker.openPicker({
            mediaType: 'photo',
            width: 1000,
            height: 1000,
            cropping: true
        })
            .then((image) => {
                updateAvatarUser(image)
            })
            .catch((err) => {})
    }

    const handlePickerImage = (index) => {
        if (index == 0) {
            openCamera()
        } else if (index == 1) {
            openLibrary()
        }
    }

    return (
        <>
            <Background />
            <ScrollView style={styles.container}>
                <HeaderBack name='Change Profile' />
                <View style={styles.boxProfile}>
                    <TouchableOpacity onPress={onShowImageActionSheet}>
                        <Image source={getAvatar()} style={styles.imgAvatar} />
                    </TouchableOpacity>
                    <View style={styles.boxInfo}>
                        <Text style={{ ...styles.textInfo, fontSize: 20 }}>Name</Text>
                        <TextInput style={styles.textContent} placeholder='Jonathan Doe' />
                    </View>
                    <View style={styles.boxInfo}>
                        <Text style={styles.textInfo}>Phone</Text>
                        <TextInput style={styles.textContent} placeholder='0912 - 339 - 3493' />
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
                    <ActionSheet
                        ref={refActionSheet}
                        title='Choose photo'
                        options={['Camera', 'Photo library', 'Cancel']}
                        cancelButtonIndex={2}
                        onPress={handlePickerImage}
                    />
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    boxProfile: {
        backgroundColor: Constants.color.white,
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 1,
        paddingBottom: 28
    },
    imgAvatar: {
        marginTop: 28,
        marginBottom: 13,
        width: 100,
        height: 100,
        borderRadius: 20
    },
    textContent: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Constants.color.borderColor,
        height: 46,
        paddingLeft: 20
        // fontFamily: Constants.font.fontPPSemiBold
    },
    textHolder: {
        fontSize: 16,
        fontFamily: Constants.font.fontPPSemiBold
    },
    boxInfo: {
        width: '90%',
        marginTop: 15
    },
    textInfo: {
        fontFamily: Constants.font.fontPPSemiBold,
        color: Constants.color.colorText,
        fontSize: 15,
        marginBottom: 5
    },
    buttonSave: {
        backgroundColor: Constants.color.buttonColor,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 46,
        marginTop: 35,
        borderRadius: 20
    },
    textSave: {
        fontFamily: Constants.font.fontPPSemiBold,
        color: Constants.color.white
    }
})

export default ChangeProfileScreen
