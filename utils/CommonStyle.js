import {
    StyleSheet
} from 'react-native';

const commonStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
    },
    innerText: {
        fontSize: 13,
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 1,
        textShadowOffset: {width: 2, height: 2},
        textAlign: 'center'
    }
});

export { commonStyle };
