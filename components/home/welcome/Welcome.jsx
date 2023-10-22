import React, { useEffect } from "react";
import { View, Text, Linking } from "react-native";
import styles from "./welcome.style";
import { useRouter } from "expo-router";

const Welcome = ({ searchTerm, setSearchTerm,}) => {
  const router = useRouter();
  useEffect(() => {
    Linking.openURL( 'https://youtu.be/dQw4w9WgXcQ?si=BtgXB7ZkGhepAdGm'  );
    // window.location.replace('https://youtu.be/dQw4w9WgXcQ?si=BtgXB7ZkGhepAdGm');
    
  }, [])
  
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello sjp</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
        <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
    </View>
    </View>
  );
};

export default Welcome;
