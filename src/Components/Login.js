import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Keyboard, ImageBackground } from 'react-native';
import { useState } from 'react';
import FloatingLabelInpput from './FloatingLabelInput';
import { BGIMAGE } from '../Constants/assets';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { loginAuth } from '../services/loginServices';
import { useDispatch } from 'react-redux';
import { loginapi } from '../Providers/actions/loginactions';
import Loader from './loader';
import { useSelector } from 'react-redux';


const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const [userID, setUserId] = useState("");
    const [password, setPassword] = useState("")
    const data = useSelector(state => state.Loginreducers)
    const { isLoading } = data

    return (
        <ImageBackground style={{ width: '100%', height: '100%' }}
            source={BGIMAGE}>


            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Icon
                        color="#fcfcfc"
                        name="chevron-left"
                        size={30} />

                </TouchableOpacity>
                <View style={styles.space} />
                <TouchableOpacity style={styles.register}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.idText}>
                    <FloatingLabelInpput
                        label="User ID"
                        value={userID}
                        onChangeText={setUserId}
                        autoFocus={true}

                    />
                </View>

                <View style={styles.passwordText}>
                    <FloatingLabelInpput
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />

                </View>


                <View>
                    <TouchableOpacity style={styles.button}
                        onPress={() => dispatch(loginapi({
                            username: 'kminchelle',
                            password: '0lelplR'
                        }))}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>

                <View style={
                    {
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }
                }>
                    <TouchableOpacity>
                        <Text style={
                            {
                                color: '#aaa',
                                fontSize: 15,
                            }
                        }>
                            Forgot User ID |
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={
                            {
                                color: '#aaa',
                                fontSize: 15,
                            }
                        }>
                            Forgot Password
                        </Text>
                    </TouchableOpacity>
                </View>

                <View styles={{
                    alignItems: 'center',
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity>
                        <Text style={
                            {
                                color: '#aaa',
                                fontSize: 15,
                            }
                        }>
                            Enable User ID
                        </Text>
                    </TouchableOpacity>
                </View>
                <Loader isLoading={isLoading} />
            </View>
        </ImageBackground>

    );
};


const styles = StyleSheet.create({
    idText: {

        padding: 10,
        backgroundColor: '#fff',
        width: '85%',
        borderRadius: 8,
    },
    passwordText: {
        padding: 10,
        backgroundColor: '#fff',
        width: '85%',
        borderRadius: 8,
        marginTop: 20
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#ACBABF',
        padding: 10,
        borderRadius: 100,
        width: 300,
        paddingVertical: 15,
        marginVertical: 20,
    },
    register: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        width: '30%',
        paddingVertical: 10,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'transparent',
    },
    space: {
        width: '60%',
    },
});


export default Login;
