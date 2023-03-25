import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';
const Loader = ({ isLoading }) => {
    return (
        isLoading ?
            <View style={{ backgroundColor: '#33001b26', position: 'absolute', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>

                <ActivityIndicator color={'black'} size={'large'} />
            </View>
            : null
    )
}
export default Loader