import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    View
} from 'react-native';
import { User } from './User';
import { SearchBox } from './SearchBox';

const renderItem = ({item}) => <User data={item}/>

const separator = () => <View style={styles.separator}></View>

const UserList = ({data}) => {
    const [filterUsers, setFilterUsers] = useState(data);
    return (
        <>
            <SearchBox
                filterData={data}
                onFiltered={setFilterUsers}
                onEmpty={() => setFilterUsers(data)}
            />
            <FlatList
                data={filterUsers}
                renderItem={renderItem}
                keyExtractor={user => user.id}
                ItemSeparatorComponent={separator}
                style={styles.list}
            />
        </>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        marginTop: 15,
    },
    separator: {
        margin: 5
    }
});

export { UserList };
