import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchRandomContacts } from '../utility/api';
import ContactThumbnail from '../components/ContactListItem';
import DetailListItem from '../components/DetailListltem';
import colors from '../utility/colors';


const Profile = ({route}) => {
    const {contact} = route.params;
    
    const {avatar, name, email, phone, cell} = contact;
    return (
        <View style={styles.container}>
            <View style={styles.avatarSection}>
                <ContactThumbnail avatar={avatar} name={name} phone={phone} />
            </View>
            <View style={styles.detailsSection}>
                <DetailListItem icon="mail" title="Email" subtitle={email}></DetailListItem>
                <DetailListItem icon="phone" title="Work" subtitle={phone}></DetailListItem>
                <DetailListItem icon="smartphone" title="Personal" subtitle={cell}></DetailListItem>
            </View>
        </View>
    );
}

export default Profile;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarSection: {
        flex:1, 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.blue,
    },
    detailsSection:{
        flex: 1,
        backgroundColor: 'white',
    }
});