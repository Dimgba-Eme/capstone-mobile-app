import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
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
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Starters</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Mains</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Desserts</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Drinks</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuItemsContainer}>
                    <View style={styles.menuInner}>
                        <Text style={styles.menuTitle}>Greek Salad</Text>
                        <Text style={styles.menuDescription}>The famous greek salad of crispy lettuce, peppers, olives and our chicag...</Text>
                        <Text style={styles.menuPrice}>$12.99</Text>
                    </View>

                    <View>
                        <Image source={require('../assets/Greek salad.png')} resizeMode='cover' style={styles.menuImg} />
                    </View>

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
        justifyContent: 'space-between',
        marginVertical: 15,
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#333333',
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

    menuItemsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    menuInner: {
        width: '70%'
    },


    menuTitle: {

    },

    menuDescription: {

    },

    menuPrice: {

    },

    menuImg: {
        height: 100,
        width: 100,
    },
})