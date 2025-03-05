import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import Hero from '../components/Hero';


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Header />
            <Hero />
            <ScrollView style={styles.innerContainer}>
                <Text style={styles.orderText}>ORDER FOR DELIVERY!</Text>

                <View style={styles.btnContainer} >
                    <TouchableOpacity onPress={() => { navigation.navigate('Profile', { user: '' }) }}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Starters</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('Profile', { user: '' }) }}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Mains</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('Profile', { user: '' }) }}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Desserts</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('Profile', { user: '' }) }}>
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
                <View style={styles.menuItemsContainer}>
                    <View style={styles.menuInner}>
                        <Text style={styles.menuTitle}>Bruschetta</Text>
                        <Text style={styles.menuDescription}>Our Bruschetta is made from grilled bread that has been smeared with garli...</Text>
                        <Text style={styles.menuPrice}>$7.99</Text>
                    </View>

                    <View>
                        <Image source={require('../assets/Bruschetta.png')} resizeMode='cover' style={styles.menuImg} />
                    </View>

                </View>
                <View style={styles.menuItemsContainer}>
                    <View style={styles.menuInner}>
                        <Text style={styles.menuTitle}>Grilled Fish</Text>
                        <Text style={styles.menuDescription}>Barbequed catch of the day with red onion, crisp capers, chive creme fraiche...</Text>
                        <Text style={styles.menuPrice}>$20.00</Text>
                    </View>

                    <View>
                        <Image source={require('../assets/Grilled fish.png')} resizeMode='cover' style={styles.menuImg} />
                    </View>

                </View>
                <View style={styles.menuItemsContainer}>
                    <View style={styles.menuInner}>
                        <Text style={styles.menuTitle}>Pasta</Text>
                        <Text style={styles.menuDescription}>Penne with fried aubergines, tomato sauce, fresh chilli, garlic, basil & salted...</Text>
                        <Text style={styles.menuPrice}>$18.99</Text>
                    </View>

                    <View>
                        <Image source={require('../assets/Pasta.png')} resizeMode='cover' style={styles.menuImg} />
                    </View>

                </View>
                <View style={styles.menuItemsContainer}>
                    <View style={styles.menuInner}>
                        <Text style={styles.menuTitle}>Lemon Dessert</Text>
                        <Text style={styles.menuDescription}>Light and fluffy traditional homemade Italian Lemon and ricotta cake...</Text>
                        <Text style={styles.menuPrice}>$6.99</Text>
                    </View>

                    <View>
                        <Image source={require('../assets/Lemon dessert.png')} resizeMode='cover' style={styles.menuImg} />
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
        paddingVertical: 15,
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
        borderBottomColor: '#333333',
        borderBottomWidth: 0.4,
        paddingVertical: 20,
        paddingBottom: 40,
    },

    menuInner: {
        width: '70%',
    },


    menuTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',

    },

    menuDescription: {
        color: '#333333',
        marginVertical: 5,
    },

    menuPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },

    menuImg: {
        height: 90,
        width: 90,
        marginTop: 30,
    },
})