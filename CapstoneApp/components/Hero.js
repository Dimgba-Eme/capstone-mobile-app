import { StyleSheet, Text, View, Image } from 'react-native';

export default function Hero() {
    return (
        <View style={styles.container}>

            <View style={styles.innerContainer}>
                <Text style={styles.title}>Little Lemon</Text>
                <Text style={styles.innerText}>Chicago</Text>
                <Text style={styles.introText}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </Text>
            </View>

            <View>
                <Image style={styles.heroImage} source={require('../assets/Hero image.png')} resizeMode='cover' accessibility={true} accessibilityLabel='Hero Image' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#495E57',
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    innerContainer: {
        paddingVertical: 20,
        width: 180,
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

    introText: {
        color: '#fff',
        fontSize: 15,
        marginVertical: 20,
    },

    heroImage: {
        height: 130,
        width: 130,
        marginTop: 70,
        borderRadius: 10,
    },
})