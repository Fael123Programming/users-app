import {
    TextInput,
    StyleSheet,
    Dimensions
} from 'react-native';

const SearchBox = ({filterData, onFiltered, onEmpty}) => {
    return (
        <TextInput
            placeholder='Search here'
            style={styles.textInput}
            onChangeText={(text) => {
                    if (!text.length) {
                        onEmpty();
                    } else {
                        const filteredUsers = filterData.filter(
                            (user) => {
                                const strUser = JSON.stringify(user).toLowerCase();
                                return strUser.includes(text.toLowerCase());
                            }
                        );
                        console.log(
                            filteredUsers
                        );
                        onFiltered(filteredUsers);
                    }
                }
            }
        />
    );
}

const styles = StyleSheet.create({
    textInput: {
        height: 50,
        width: Dimensions.get('screen').width * .85,
        backgroundColor: '#DBDBDB',
        borderWidth: 2,
        borderRadius: 30,
        padding: 10,
        marginTop: 40,
    }
});

export { SearchBox };
