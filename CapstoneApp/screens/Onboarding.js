import { useState } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, ScrollView, TextInput, Platform } from 'react-native';
// import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Onboarding() {
    const [name, setName] = useState('')
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={require('../assets/Logo.png')} accessibility={true} accessibilityLabel='Little Lemon Logo' />
            </View>
            <Hero />
            <ScrollView keyboardDismissMode='on-drag'>
                <Text>Name *</Text>
                <TextInput />
                <Text>Email *</Text>
                <TextInput />
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
})