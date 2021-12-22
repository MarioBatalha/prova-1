import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {
  Title,
  SubTitle,
  Input,
  Button,
  ButtonText,
  BoldText,
} from '../../styles';

import { useNavigation } from '@react-navigation/native';

const Home = () =>  {
  const navigation = useNavigation();

  const handleNavigateToList = () => {
    navigation.navigate('List');
  };
  return (
    <View
    justify="flex-start"
    style={{ backgroundColor: 'black' }}
    height="100%"
    alignItems="center"
    justifyContent="center"
  >
    <View
      alignItems="center"
      justifyContent="center"
      padding={30}
      position="relative"
      height={270}
      top={0}
      zIndex={9}
    >
      <Image source={Logo} />
      <Title color="secondary">PICK UP LOCATION</Title>
    </View>
    <View alignItems="center" justifyContent="center">
      <FontAwesome5 name="user-plus" size={50} color="white" />
      <Title color="secondary">Registrar</Title>
    </View>
    <View width="80%">
      <Input textContentType="password" street-address placeholder="Location" />
      <Input keyboardType="date" placeholder="2021-12-11" />
      <Input keyboardType="date" placeholder="2021-12-11" />
      
      <Button color="button" onPress={handleNavigateToList}>
        <ButtonText color="primary">GET A QUOTE</ButtonText>
      </Button>
      
    </View>
  </View>
  );
}

export default Home;