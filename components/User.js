import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { TextRow } from './TextRow';
import { CustomButton } from './CustomButton';
import { commonStyle } from '../utils/CommonStyle';

const stringify_without_braces = (obj, break_row=true, mounted_str='', i=0) => {
    if (i == Object.keys(obj).length) {
        return mounted_str;
    }
    let cur_val = obj[Object.keys(obj)[i]], cur_val_str;
    if (typeof(cur_val) === 'object') {
        if (Object.keys(cur_val).length > 0) {
            cur_val_str = stringify_without_braces(cur_val, false);
        } else {
            cur_val_str = 'null';
        }
    } else {
        cur_val_str = cur_val;
    } 
    mounted_str += `${Object.keys(obj)[i].charAt(0).toLocaleUpperCase() + Object.keys(obj)[i].slice(1)}: ${cur_val_str}`;
    let char = '\n';
    if (!break_row) {
        char = ' ';
    }
    if (i < Object.keys(obj).length - 1) {
        mounted_str += char;
    }
    return stringify_without_braces(obj, break_row, mounted_str, i + 1);
};

const User = props => {
    const name = props.data.name;
    const username = props.data.username;
    const email = props.data.email;
    const phone = props.data.phone;
    const website = props.data.website;
    const address = stringify_without_braces(props.data.address);
    const company = stringify_without_braces(props.data.company);

    return (
        <View style={style.container}>
            <TextRow
                data={{
                    left: 'Name',
                    right: name
                }}
            />
            <TextRow
                data={{
                    left: 'Username',
                    right: username
                }}
            />
            <TextRow
                data={{
                    left: 'E-mail',
                    right: email
                }}
            />
            <TextRow
                data={{
                    left: 'Phone',
                    right: phone
                }}
            />            
            <TextRow
                data={{
                    left: 'Website',
                    right: website
                }}
            />
            <View style={commonStyle.container}>
                <CustomButton
                    title={'Address'}
                    alertData={address}
                />
                <CustomButton
                    title={'Company'}
                    alertData={company}
                />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
        width: 350,
        height: 200,
        padding: 10,
        backgroundColor: '#4CA9FF'
    }
});

export { User };