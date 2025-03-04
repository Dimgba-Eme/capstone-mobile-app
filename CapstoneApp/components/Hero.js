import { StyleSheet, Text, View, Image } from 'react-native';

export default function Hero() {
    return (
        <View style={styles.container}>

            <View>
            <Text style={styles.title}>Little Lemon</Text>
            <Text style={styles.innerText}>Chicago</Text>
            <Text style={styles.intro}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </Text>
            </View>

            <View>
                <Image />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#495E57',
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 30,
        color: '#F4CE14',
        fontWeight: 'bold',
    },

    innerText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },

    intro: {
        color: '#fff',
    }
})