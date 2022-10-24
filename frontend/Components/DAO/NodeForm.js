/* eslint-disable prettier/prettier */

import React, { useContext, useState } from 'react';

import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements';
import UsersContext from '../Context/UserContext';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { windowHeight, windowWidth } from '../utils/Dimensions';
// import { Container } from './styles';

export default ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  const { dispatch } = useContext(UsersContext);


  return (
    <>
      <View style={style.form}>
      <Text style={style.title}>Create a DAO</Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
      <TouchableOpacity
        style={style.navButton}
      >
        <Text style={style.navButtonText}>Choose a name and symbol for the DAO, GT will get the same parameters. Distribute GT between addresses that will participate in voting</Text>
      </TouchableOpacity>
        <Text style={style.text}>DAO Name:</Text>

        <FormInput
          style={style.input}
          onChangeText={nodeName => setUser({ ...user, nodeName })}
          placeholder="Inform the name"
          value={user.nodeName}
        />

        <Text style={style.text}>Contract Address:</Text>

        <FormInput
          style={style.input}
          onChangeText={contractAddress => setUser({ ...user, contractAddress })}
          placeholder="Inform the E-mail"
          value={user.contractAddress}
        />

        <Text style={style.text}>Main Token:</Text>

        <FormInput
          style={style.input}
          onChangeText={mainTokenSymbol => setUser({ ...user, mainTokenSymbol })}
          placeholder="Report or link to your main token"
          value={user.mainTokenSymbol}
        />

        <Text style={style.text}>Network:</Text>

        <FormInput
          style={style.input}
          onChangeText={basedNet => setUser({ ...user, basedNet })}
          placeholder="Report or link to your main token"
          value={user.basedNet}
        />

        <Text style={style.text}>Mission:</Text>

        <FormInput
          style={style.input}
          onChangeText={mission => setUser({ ...user, mission })}
          placeholder="Report or link to your main token"
          value={user.mission}
        />
        <View style={style.formButton}>
          <FormButton 
            buttonTitle="Create a DAO"
            onPress={() => {
              dispatch({
                type: user.id ? 'updateUser' : 'createUser',
                payload: user,
              });
              navigation.navigate('UserList');
            }} />
        </View>
        </ScrollView>
      </View>
    </>
  );
};


const style = StyleSheet.create({
  form: {
    padding: 12,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'black',
  },
  text:{
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.1,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  formButton: {
    flex:1,
    alignItems: 'center',
  },
  navButton: {
    marginTop: 5,
  },
  navButtonText: {
    fontSize: 16,
    color: '#6646ee',
    padding: 10,
    alignItems: 'center'
  },
});
