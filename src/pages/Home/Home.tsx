import React, {useEffect, useState} from 'react';
import { View} from 'react-native';

import {
  Container,
  Input,
  SeachContainer,
  SeachButton,
  ListContainer,
  ImageLeague,
  TextLeague,
  ImageContainer,
  CardContainer,
  ButtonLeague,
} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import dados from '../../util/Dataold';
import {ScrollView} from 'react-native-gesture-handler';

interface Dados {
  dado: Array<{
    nome: string;
  }>;
}

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [dado, setDado] = useState<string[]>([]);
  const [name, setName] = useState('');

  function handleNavigateToCard(name: string) {
    navigation.navigate('card', {name});
  }

  function handleSearchName() {
     
       const newDados = dados.filter(resp => resp.toLowerCase().includes(name.toLowerCase()))
       setDado(newDados);

  }


  useEffect(() => {
    setDado(dados);
  }, []);

  return (
    <ScrollView>
      <Container>
        <SeachContainer>
          <Input value={name} onChangeText={setName}></Input>
          <SeachButton onPress={() => handleSearchName()}>
            <Feather name="search" size={24} color="#000"></Feather>
          </SeachButton>
        </SeachContainer>
        <ListContainer>
          {dado.map((resp) => {
            // console.log(resp);
            return (
              <CardContainer key={resp}>
                <ImageContainer>
                  <ImageLeague
                    resizeMode="cover"
                    source={{
                      uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${resp}_0.jpg`,
                    }}
                  />
                </ImageContainer>
                <ButtonLeague
                  onPress={() => {
                    handleNavigateToCard(resp);
                  }}>
                  <TextLeague>{resp}</TextLeague>
                </ButtonLeague>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 30,
                  }}>
                  <Feather name="arrow-right" size={24} color="#fff" />
                </View>
              </CardContainer>
            );
          })}
        </ListContainer>
      </Container>
    </ScrollView>
  );
};

export default Home;
