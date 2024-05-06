import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../utility/colors';



const ContactListItem = ({
    name, avatar, phone, onPress,
}) => {
    return (
        <TouchableHighlight
            underlayColor={colors.grey}
            style={StyleSheet.container}
            onPress={onPress}

        >
            <View style={styles.container}>
                <Image source={{ uri: avatar }} style={styles.image} />
                <View style={styles.details}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.phoneNumber}>{phone}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}

export default ContactListItem;



ContactListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
};


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 16,
    },
    details: {
      flex: 1,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    phoneNumber: {
      fontSize: 16,
      color: '#555',
    },
});