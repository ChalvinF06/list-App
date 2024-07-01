import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const contacts = [
  { id: '1', name: 'Boboiboy Tanah', photo: 'https://tse3.mm.bing.net/th?id=OIP.1Vp0CpDip-EyAoR1Ugq9WgHaHv&pid=Api&P=0&h=180', elementlv2: 'Gempa',elementlv3: 'Kristal', asal: 'Hangkasa' },
  { id: '2', name: 'Boboiboy Angin', photo: 'https://tse2.mm.bing.net/th?id=OIP.qlL410Xz9lDBBC63Gx83WgAAAA&pid=Api&P=0&h=180', elementlv2: 'Topan',elementlv3: 'Beliung', asal: 'Kuputri' },
  { id: '3', name: 'Boboiboy Petir', photo: 'https://tse2.mm.bing.net/th?id=OIP.ArKymKafEUwwqGLtRiCZZQAAAA&pid=Api&P=0&h=180', elementlv2: 'Halilintar',elementlv3: 'Voltra', asal: 'Maharani Satriantar' },
  { id: '4', name: 'Boboiboy Api', photo: 'https://tse3.mm.bing.net/th?id=OIP.MNEq6Gf5njfV4EWn2CihIgHaIQ&pid=Api&P=0&h=180', element: 'Tanah Level 2',elementlv2: 'Blaze',elementlv3: 'Nova', asal: 'Pyrapi' },
  { id: '5', name: 'Boboiboy Air', photo: 'https://tse1.mm.bing.net/th?id=OIP.TS6tOxA3iPGfJTDuhJaf5wHaHm&pid=Api&P=0&h=180', element: 'Tanah Level 2',elementlv2: 'Ice',elementlv3: 'Blizar', asal: 'Mas Mawais' },
  { id: '6', name: 'Boboiboy Daun', photo: 'https://tse1.mm.bing.net/th?id=OIP.GlIAPnG5VPoztbLV74ZVSwHaI-&pid=Api&P=0&h=180', element: 'Tanah Level 2',elementlv2: 'Balak', asal: 'King Balakung' },
  { id: '7', name: 'Boboiboy Cahaya', photo: 'https://tse2.mm.bing.net/th?id=OIP.ukeiAnF2vQ2o2mFLU00WLAAAAA&pid=Api&P=0&h=180', element: 'Tanah Level 2',elementlv3: 'Gama', asal: 'Rataka' },
];





function HomeScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      <Image source={{ uri: item.photo }} style={styles.contactPhoto} />
      <Text style={styles.contactName}>{item.name}</Text>
      <TouchableOpacity style={styles.detailButton} onPress={() => handleDetailPress(item)}>
        <Text style={styles.detailButtonText}>Detail</Text>
      </TouchableOpacity>
    </View>
  );
  

  const handleDetailPress = (contact) => {
    navigation.navigate('Profile', {
      name: contact.name,
      elementlv2: contact.elementlv2,
      elementlv3: contact.elementlv3,
      asal: contact.asal,
      photo: contact.photo,
    });
  };
  
  

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>List Contact</Text>
      </View>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contactList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'lightgrey',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
  },
  contactList: {
    padding: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  contactPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contactName: {
    fontSize: 16,
    flex: 1,
  },
  detailButton: {
    backgroundColor: 'blue',
    padding: 10,
  },
  detailButtonText: {
    color: 'white',
  },
});

export default HomeScreen;
