import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Animated } from 'react-native';
import { BGIMAGE } from '../Constants/assets';
import Icon from 'react-native-vector-icons/MaterialIcons';
const FirstPage = ({ navigation }) => {
    return (
        <ImageBackground style={{ width: '100%', height: '100%' }}
            source={BGIMAGE}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <View style={styles.space} />
                <TouchableOpacity style={styles.register}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: '10%' }}>
                <Text style={styles.headtext}>RAKBANK</Text>
                <Text style={styles.paratext}>
                    {`Everything you love about 
Digital Banking in a smarter,
simpler design`}
                </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '90%' }}>
                <TouchableOpacity style={styles.Loginbutton}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text>Login with User ID</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                <TouchableOpacity style={styles.fprint}>
                    <Icon
                        style={styles.fprint}
                        // color="#373737"
                        name="fingerprint"
                        size={30} />
                    <View style={styles.space} />
                    <Text>Quick Balance</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    register: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 15,
        width: '30%',
        paddingVertical: 10,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: 'white',
    },
    space: {
        width: '60%',
    },
    headtext: {
        fontSize: 40,
        paddingHorizontal: 20,
    },
    paratext: {
        fontSize: 20,
        paddingHorizontal: 20
    },
    Loginbutton: {
        // marginVertical:'20%',
        alignItems: 'center',
        backgroundColor: '#373737',
        padding: 10,
        borderRadius: 100,
        width: '90%',
        paddingVertical: 15,
    },
    fprint: {
        paddingVertical: 5,
        flexDirection: "row",
        alignItems: 'center',
    },
    space: {
        width: '10%',
    },
});

export default FirstPage;