// Profilescreen.js
import React, { Component } from "react";
import {  StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
export default function ProfileScreen() {
  return (
    
    <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }}
        />

        <Text style={styles.name}>John Doe</Text>
      </View>
    </View>

        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>john.doe@example.com</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Location:</Text>
            <Text style={styles.infoValue}>Nairobi, Kenya</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Bio:</Text>
            <Text style={styles.infoValue}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</Text>
          </View>
        </View>
      </View>
  
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    header: {
      backgroundColor: '#00BFFF',
    },
    headerContent: {
      padding: 30,
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: 'white',
      marginBottom: 10,
    },
  
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      color:'white'
    },
    content: {
      marginTop: 20,
    },
    infoContainer: {
      marginTop: 20,
    },
    infoLabel: {
      fontWeight: 'bold',
    },
    infoValue: {
      marginTop: 5,
    },
  });