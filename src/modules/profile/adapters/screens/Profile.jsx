import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Avatar } from '@rneui/themed';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.halfScreen, styles.info]}>
        <View style={{ marginTop: 42, alignItems: 'center' }}>
          <Avatar
            size={120}
            rounded
            source={{ uri: 'https://cdn.pixabay.com/photo/2021/06/04/10/29/guy-6309462_1280.jpg' }}
            title="Bj"
            containerStyle={{ backgroundColor: 'grey' }}
          >
            <Avatar.Accessory size={40} />
          </Avatar>

          <View style={{ marginTop: 24, alignItems: 'center' }}>
            <Text style={styles.text}>Enrique Copado Vargas</Text>
            <Text style={styles.text}>+52 777 123 5678</Text>
          </View>
        </View>
      </View>
      <View style={[styles.halfScreen, styles.cardInfo]}>
        <View style={styles.textContainer}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Email:</Text>
          <Text style={{fontSize: 16, color: '#5E5E5E'}}>enriquevargas@gmail.com</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Teléfono:</Text>
          <Text style={{fontSize: 16, color: '#5E5E5E'}}>+52 777 123 5678</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Género:</Text>
          <Text style={{fontSize: 16, color: '#5E5E5E'}}>Masculino</Text>
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FE1300'
  },
  halfScreen: {
    flex: 0.5
  },
  info: {
    backgroundColor: '#FE1300',
    alignItems: 'center'
  },
  cardInfo: {
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 8,
    color: '#fff'
  },
  textContainer: {
    width: '80%',
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between'
  }
})