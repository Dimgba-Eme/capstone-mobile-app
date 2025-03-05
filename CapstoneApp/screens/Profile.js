import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity, Platform, TextInput } from 'react-native';
import Header from '../components/Header';

export default function Profile({ navigation, route }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const {user} = route.params


    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <Header />
            <ScrollView keyboardDismissMode='on-drag' style={styles.scrollContainer}>
                <Text style={{fontSize: 16}}>Welcome, {user}!</Text>
                <Text style={styles.title}>Personal Information</Text>

                <View style={styles.innerContainer}>
                    <Image style={styles.profileImg} source={require('../assets/Profile.png')} resizeMode='cover' accessibility={true} accessibilityLabel='Profile Image' />
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Change</Text>
                        </View>
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <View style={[styles.btn, { backgroundColor: 'none', borderWidth: 1, borderColor: '#ccc', borderRadius: 0 }]}>
                            <Text style={[styles.btnText, { color: '#333333' }]}>Remove</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.inputLabel}>First Name</Text>
                    <TextInput
                        style={styles.input}
                        value={firstName}
                        onChangeText={setFirstName}
                        placeholder='John'
                    />
                    <Text style={styles.inputLabel}>Last Name</Text>
                    <TextInput
                        style={styles.input}
                        value={lastName}
                        onChangeText={setLastName}
                        placeholder='Doe'
                    />

                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='coder@gmail.com'
                        keyboardType='email-address'
                    />

                    <Text style={styles.inputLabel}>Phone number</Text>
                    <TextInput
                        style={styles.input}
                        value={phone}
                        onChangeText={setPhone}
                        placeholder='+234 802 6794'
                        keyboardType='phone-pad'
                    />

                    <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                        <View style={styles.logoutBtn}>
                            <Text style={styles.logoutText}>Logout</Text>
                        </View>
                    </TouchableOpacity>

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
        height: 80,
        width: 80,
        marginVertical: 20,
    },

    innerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    btn: {
        backgroundColor: '#495E57',
        width: '110%',
        padding: 15,
        borderRadius: 10,
        marginVertical: 30,

    },

    btnText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    inputLabel: {
        fontSize: 15,
        color: '#333333',
        marginVertical: 10,
    }, 

    input : {
        borderRadius: 10,
        padding: 10,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc'
    }, 

    logoutBtn: {
        backgroundColor: '#F4CE14',
        padding: 15,
        borderRadius: 15,
        width: '100%',
        marginVertical: 15,
    },

    logoutText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#333333',
        fontWeight: 'bold',
    },
})