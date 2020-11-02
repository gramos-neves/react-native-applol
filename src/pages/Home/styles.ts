import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const SeachContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  background: #fff;
  width: 80%;
  padding: 14px;
  height: 55px;
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
  color: rgb(6, 28, 37);
`;

export const SeachButton = styled.TouchableOpacity`
  width: 20%;
  background: #fff;
  align-items: center;
  justify-content: center;
  height: 55px;
`;

export const ListContainer = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const CardContainer = styled.View`
  height: 60px;
  flex-direction: row;
  background: rgb(6, 28, 37);
  margin-top: 10px;
`;

export const ImageLeague = styled.Image`
  height: 100%;
  width: 100%;
`;

export const ImageContainer = styled.View`
  height: 60px;
  width: 70px;
`;

export const TextLeague = styled.Text`
  color: #fff;
  margin-left: 30px;
`;

export const ButtonLeague = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
