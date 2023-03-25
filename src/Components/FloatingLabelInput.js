import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";



const FloatingLabelInpput = (props) => {

    const { value, label } = props
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={{ paddingTop: 10 }}>
            <Text style={{
                position: 'absolute',
                top: !isFocused ? 20 : 0,
                fontSize: !isFocused ? 20 : 15,
                color: !isFocused ? '#aaa' : '#aaa',

            }}
            >{label}</Text>

            <TextInput
                {...props}
                style={styles.TextInputs}
                onFocus={() => setIsFocused(true)}
                onBlur={() => value == '' && setIsFocused(false)}
                blurOnSubmit

            />
        </View>
    )
}

const styles = StyleSheet.create({
    TextInputs: {
        height: 40,
        fontSize: 15,
        color: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#c4ab2f'
    }
})

export default FloatingLabelInpput;
