import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, ImageBackground, Image, Button } from "react-native";
import { BGIMAGE, PROFILEIMG } from "../Constants/assets";
import { useSelector } from 'react-redux';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from 'react-redux';
import { removelogin } from "../Providers/actions/loginactions";

const HomeLabels = () => {
    const dispatch = useDispatch()
    const TextComponents = ({ Title, Subtitle }) => {
        return (
            <View style={styles.View2}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{Title} :</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{Subtitle}</Text>
            </View>
        )

    }
    const result = useSelector(state => state.Loginreducers)
    const { userDetails, currentTime } = result
    console.log('userdetails', userDetails, currentTime)
    return (
        <ImageBackground style={{ height: '100%', width: '100%' }}
            source={BGIMAGE}>
            <View style={styles.View1}>
                <View style={styles.image}>
                    <Image style={{ height: 50, width: 50 }}
                        source={{
                            uri: userDetails.image,
                        }} />
                </View>
                <TextComponents Title={'Id'} Subtitle={userDetails.id} />
                <TextComponents Title={'UserName'} Subtitle={userDetails.username} />
                <TextComponents Title={'First Name'} Subtitle={userDetails.firstName} />
                <TextComponents Title={'Last Name'} Subtitle={userDetails.lastName} />
                <TextComponents Title={'Email'} Subtitle={userDetails.email} />
                <TextComponents Title={'Gender'} Subtitle={userDetails.gender} />
                <TextComponents Title={'Last Logged In Time'} Subtitle={currentTime} />
                <Button
                    title="Logout"
                    onPress={() => dispatch({ type: removelogin.REMOVELOGIN })} />

            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    View1: {
        // alignItems: 'center',
        backgroundColor: 'transparent',
        borderColor: 'white',
        height: '100%',
        width: '100%',
        paddingVertical: 100
    },
    View2: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 50,
        paddingVertical: 10
    },
    View3: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 50,
        paddingVertical: 10
    },
    View4: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 50,
        paddingVertical: 10
    },
    View5: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 50,
        paddingVertical: 10
    },
    View6: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 50,
        paddingVertical: 10
    },
    View7: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 50,
        paddingVertical: 10
    },
    View8: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 50,
        paddingVertical: 10
    },
    image: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height: '30%',
        width: '50%',
        paddingHorizontal: '50%',
    },


})
export default HomeLabels