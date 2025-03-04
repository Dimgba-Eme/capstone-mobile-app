import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Hero from '../components/Hero';


export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <Hero />
            <ScrollView style={styles.innerContainer}>
                <Text style={styles.orderText}>ORDER FOR DELIVERY!</Text>

                <View style={styles.btnContainer} >
                    <TouchableOpacity>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Starters</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Mains</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Desserts</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Drinks</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    innerContainer: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: '#fff',
    },

    orderText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333',
    },

    btnContainer: {
       display: 'flex',
       flexDirection: 'row',
       justifyContent: 'space-between'
    },

    btn: {
       backgroundColor: '#ccc',
       width: '100%',
       padding: 10,
       borderRadius: 10,
    },

    btnText: {
        fontSize: 16,
        color: '#333333',
        fontWeight: 'bold',
        textAlign: 'center',
    },

})