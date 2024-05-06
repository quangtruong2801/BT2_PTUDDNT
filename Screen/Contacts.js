import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { fetchContacts } from '../utility/api';
import ContactListItem from '../components/ContactListItem';

const keyExtractor = ({phone}) => phone;

const Contacts = ({navigation})=>{
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(()=>{
        fetchContacts().then(
            contacts => {
                setContacts(contacts);
                setLoading(false);
                setError(false);
            }
        )
        .catch(
            e=>{
                console.log(e);
                setLoading(false);
                setError(true);
            }
        )
    }, []);

    const contactsSorted = contacts.sort((a,b) => a.name.localeCompare(b.name));
    const renderContact = ({item}) => {
        const {name, avatar, phone} = item;
        return <ContactListItem 
            name={name}
            avatar={avatar}
            phone={phone}
            onPress={()=> navigation.navigate("Profile", {contact: item})}
        />
    };

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator color="blue" size="large" />}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <FlatList 
                    data={contactsSorted}
                    keyExtractor={keyExtractor}
                    renderItem={renderContact} 
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        width: '100%',
        height: 50,
        paddingLeft: 10,
        backgroundColor: "#fff",
        marginTop: 30,
        alignItems: "left",
        justifyContent: "center",
      },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default Contacts;