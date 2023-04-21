import React from 'react';
import {
    Pressable,
    Text,
    StyleSheet,
    Alert
} from 'react-native';
import { commonStyle } from '../utils/CommonStyle';

const CustomButton = ({title, alertData}) => {
    return (
        <Pressable
            onPress={() => {
                Alert.alert(
                    'User ' + title,
                    alertData
                );
            }}
            style={styles.button}
        >
            <Text style={commonStyle.innerText}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0057FF',
        width: 100,
        height: 25,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        padding: 1
    }
});

export { CustomButton };