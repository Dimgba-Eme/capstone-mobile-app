import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Hero from '../components/Hero';


export default function Home() {
    return (
        <View>
            <Header />
            <Hero />

            {/* <Text>Home</Text> */}
        </View>
    );
}