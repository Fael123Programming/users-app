import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  SafeAreaView,
} from 'react-native';
import { LoadingIndicator } from './components/LoadingIndicator';
import { UserList } from './components/UserList';
import { getUsers } from './service';

export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoadingUsers, setLoadingUsers] = useState(true);

  useEffect(() => {
    getUsers((users) => setUsers(users));
    setTimeout(()=> {
      setLoadingUsers(false);
    }, 2000);
  }, []); // DidMount

  return (
        <SafeAreaView style={styles.container}>
          { isLoadingUsers ? <LoadingIndicator/> : <UserList data={users}/> }
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
