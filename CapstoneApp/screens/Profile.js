import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Image } from 'react-native';
import Header from '../components/Header';

export default function Profile({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Header />
            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.title}>Personal Information</Text>
                <View>
                <Image style={styles.profileImg} source={require('../assets/Profile.png')} resizeMode='cover' accessibility={true} accessibilityLabel='Profile Image' />
                 
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    scrollContainer: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333333'
    },

    profileImg: {
        height: 100,
        width: 100,
        marginVertical: 20,
    }
})