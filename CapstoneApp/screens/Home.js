import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Hero from '../components/Hero';


export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <Hero />

            {/* <Text>Home</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    }
})