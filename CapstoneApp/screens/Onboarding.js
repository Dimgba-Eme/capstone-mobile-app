import { useState } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, ScrollView, TextInput, Platform, TouchableOpacity, Alert } from 'react-native';
import Hero from '../components/Hero';
import { validateEmail } from '../utils/utils';

export default function Onboarding({ navigation }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    const isEmailValid = validateEmail(email);

    const handleSubmit = () => {
        if (!name || !email) {
            Alert.alert('Attention!', 'Please enter both fields');
        } else if (!isEmailValid) {
            Alert.alert('Attention!', 'Incorrect Email!');
        } else {
            // navigation.navigate('Home');
            navigation.navigate('Profile', { user: name })
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={require('../assets/Logo.png')} accessibility={true} accessibilityLabel='Little Lemon Logo' />
            </View>
            <Hero />
            <ScrollView style={styles.scrollContainer} keyboardDismissMode='on-drag'>

                <View style={styles.formContainer}>
                    <Text style={styles.title}>Name *</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder='Enter name'
                    />
                    <Text style={styles.title}>Email *</Text>

                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Enter email'
                        keyboardType='email-address'
                    />

                    <TouchableOpacity style={styles.btnContainer} onPress={handleSubmit} >
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Submit</Text>
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
    },

    imgContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingVertical: 20,

    },

    scrollContainer: {
        flex: 1,
        paddingVertical: 20,
    },

    formContainer: {
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 20,
        paddingVertical: 10,
        fontWeight: 'bold',
        color: '#333333',
    },

    input: {
        borderRadius: 10,
        padding: 10,
        height: 60,
        borderWidth: 1,
        borderColor: '#ccc'
    },

    btnContainer: {
        alignItems: 'center',
        paddingVertical: 30,

    },

    btn: {
        backgroundColor: '#F4CE14',
        padding: 15,
        borderRadius: 15,
        width: '50%'
    },

    btnText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#333333',
        fontWeight: 'bold',
    },
})