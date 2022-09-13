import { Dimensions } from 'react-native'
export default Constants = {
    baseURL: 'https://nexus-point-dev.test-development.work',

    tokenError: 'Lỗi token',

    key: {
        currentUser: 'currentUser'
    },

    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    screenName: {
        register: 'RegisterScreen',
        verification: 'VerificationScreen',
        confirm: 'ConfirmPassScreen',
        login: 'LoginScreen',
        home: 'HomeScreen',
        tabNavigation: 'TabNavigation',
        changeProfile: 'ChangeProfileScreen',
        profile: 'ProfileScreen'
    },
    image: {
        background: require('../assets/images/img_background.png'),
        imgSpray: require('../assets/images/img_spray.png'),
        icRegister: require('../assets/images/ic_register.png'),
        icVerification: require('../assets/images/ic_verification.png'),
        icConfirm: require('../assets/images/ic_confirm.png'),
        icLogin: require('../assets/images/ic_login.png'),
        icRuby: require('../assets/images/ic_ruby.png'),
        icScan: require('../assets/images/ic_scan.png'),
        icSend: require('../assets/images/ic_send.png'),
        icReceive: require('../assets/images/ic_receive.png'),
        icJapan: require('../assets/images/img_japan.png'),
        imgAvatarDefault: require('../assets/images/img_avatarDefault.png'),
        icQrCode: require('../assets/images/ic_qrCode.png'),
        icDownload: require('../assets/images/ic_download.png'),
        icAuthentication: require('../assets/images/ic_authentication.png'),
        icProfile: require('../assets/images/ic_profile.png'),
        icPayment: require('../assets/images/ic_payment.png'),
        icSetting: require('../assets/images/ic_setting.png'),
        icTerms: require('../assets/images/ic_terms.png'),
        icHelp: require('../assets/images/ic_help.png'),
        icLogout: require('../assets/images/ic_logout.png'),
        icNext: require('../assets/images/ic_next.png')
    },
    color: {
        header: '#373737',
        textContent: '#868686',
        inputActive: '#747474',
        inputNoActive: '#E2E2E2',
        buttonColor: '#00CEFF',
        textButtonColor: '#FFFFFF',
        backgroundBelow: 'white',
        borderColor: '#CCCCE3',
        textTabNoActive: '#979797',
        textTabActive: '#00CEFF',
        colorText: '#373737',

        blue: '#00CEFF',
        white: '#FFFFFF',
        darkBlue: '#7879E8',
        gray: '#EAEAF6',
        black: 'black'
    },
    font: {
        fontPPBold: 'Poppins-Bold',
        fontPPSemiBold: 'Poppins-SemiBold',
        fontPPMedium: 'Poppins-Medium',
        fontPPRegular: 'Poppins-Regular',
        fontRBMedium: 'Rubik-Medium'
    },
    allCategory: {
        id: 0,
        parent_name: 'All'
    }
}
