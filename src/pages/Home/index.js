import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, Button } from 'react-native';
// import { Button } from '@material-ui/core';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

const Home = () => {
  const navigation = useNavigation();

  const HandleAbastecer = () => {
    navigation.navigate('addFuel');
  };
  return (
    <Container>
      <Text>Algo</Text>
      <Button title='Abastecer' onPress={HandleAbastecer}></Button>
    </Container>
  );
};
export default Home;
