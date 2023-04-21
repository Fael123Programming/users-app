import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { commonStyle } from '../utils/CommonStyle';

const TextRow = props => {
    const left = props.data.left;
    const right = props.data.right;

    return (
        <View style={commonStyle.container}>
            <Text style={commonStyle.innerText} >{left}</Text>
            <Text style={commonStyle.innerText}>{right}</Text>
        </View>
    );
};

export { TextRow };