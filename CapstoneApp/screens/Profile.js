import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import Header from '../components/Header';

export default function Profile({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Header />
            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.title}>Personal Information</Text>
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
})