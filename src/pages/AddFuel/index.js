import React, { useEffect, useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  InputLiterValue,
  InputLiterFuel,
  ContainerInput,
  TextInput,
  ButtonCss,
  Button,
  ContainerButton,
  TextValues,
} from './styles';

const addFuel = () => {
  const navigation = useNavigation();

  const [literValue, setLiterValue] = useState(0);
  const [liters, setLiters] = useState(0);
  const [distance, setDistance] = useState(0);
  const [average, setAverage] = useState(0);
  const [costUnitDistance, setCostUnitDistance] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [validateValues, setValidateValues] = useState(false);
  const HandleAbastecer = useCallback(() => {
    navigation.navigate('addFuel');
  }, []);

  const HandleClean = useCallback(() => {
    setLiterValue(0);
    setLiters(0);
    setDistance(0);
  }, []);

  const deleteMaskMoney = value => {
    return value.replace(/[^0-9,]*/g, '').replace(',', '.');
  };

  const addMaskMoney = value => {
    return 'R$ ' + parseFloat(value).toFixed(2).replace('.', ',');
  };

  const addMaskNumber = value => {
    return value.replace(',', '.');
  };

  useEffect(() => {
    if (liters && literValue) {
      setAverage((distance / liters).toFixed(2));
    } else setAverage(0);
  }, [distance, liters]);

  useEffect(() => {
    if (liters && literValue) {
      setTotalValue(liters * literValue);
    } else setTotalValue(0);
  }, [literValue, liters]);

  useEffect(() => {
    if (distance && totalValue) {
      setCostUnitDistance(totalValue / distance);
    } else setCostUnitDistance(0);
  }, [distance, totalValue]);

  useEffect(() => {
    setValidateValues(literValue && liters && distance);
  }, [liters, literValue, distance]);

  return (
    <Container>
      <ContainerInput>
        <TextInput>Valor do litro:</TextInput>
        <InputLiterValue
          type={'money'}
          placeholder='R$'
          value={literValue}
          onChangeText={value => setLiterValue(deleteMaskMoney(value))}
        />
      </ContainerInput>
      <ContainerInput>
        <TextInput>Kilometros Rodados:</TextInput>
        <InputLiterFuel
          type={'only-numbers'}
          value={distance}
          placeholder='0'
          onChangeText={value => setDistance(addMaskNumber(value))}
        />
      </ContainerInput>
      <ContainerInput>
        <TextInput>Quantidade de Litros:</TextInput>
        <InputLiterFuel
          type={'only-numbers'}
          value={liters}
          placeholder='0'
          onChangeText={value => setLiters(addMaskNumber(value))}
        />
      </ContainerInput>
      {!!totalValue && (
        <TextValues>Valor total: {addMaskMoney(totalValue)}</TextValues>
      )}
      {!!totalValue && (
        <TextValues>Custo por KM: {addMaskMoney(costUnitDistance)}</TextValues>
      )}
      {!!totalValue && <TextValues>Média por litro: {average}</TextValues>}

      <ContainerButton>
        <ButtonCss>
          <Button title='Limpar' onPress={HandleClean}></Button>
        </ButtonCss>
        <ButtonCss>
          <Button
            title='Abastecer'
            disabled={!validateValues}
            onPress={HandleAbastecer}
          ></Button>
        </ButtonCss>
      </ContainerButton>
    </Container>
  );
};
export default addFuel;
