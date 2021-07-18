import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.View`
  /* background-color: lightblue; */
`;

export const ContainerInput = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
`;

export const ButtonCss = styled.View`
  margin: 10px;
  width: 170px;
`;

export const Button = styled.Button``;

export const TextInput = styled.Text`
  margin-left: 20px;
  margin-top: 20px;
  width: 150px;
`;

export const TextValues = styled.Text`
  margin-left: 20px;
  margin-top: 20px;
  width: 300px;
`;

export const InputLiterFuel = styled.TextInput`
  flex: 1;
  margin-top: 10px;
  margin-bottom: 12px;
  margin-left: 20px;
  margin-right: 50px;
  height: 45px;
  width: 100px;

  background: #ffffff;
  opacity: 0.8;
  border: 1px solid ${props => props.action};
  border-radius: 6px;
  padding-left: 15px;
  font-size: 15px;
`;
export const InputLiterValue = styled(TextInputMask)`
  margin-top: 10px;
  margin-bottom: 12px;
  margin-left: 20px;
  margin-right: 50px;
  width: 150px;
  height: 45px;
  background: #ffffff;
  opacity: 0.8;
  border: 1px solid ${props => props.action};
  border-radius: 6px;
  padding-left: 15px;
  font-size: 15px;
`;
