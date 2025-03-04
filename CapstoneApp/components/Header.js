import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={require('../assets/Logo.png')} accessibility={true} accessibilityLabel='Little Lemon Logo' />
                <Image style={styles.profileImg} source={require('../assets/Profile.png')} resizeMode='cover' accessibility={true} accessibilityLabel='Profile Image' />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 40
    },

    imgContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 30,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    profileImg: {
        width: 50,
        height: 50,
    },

})
