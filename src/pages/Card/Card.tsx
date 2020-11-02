import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import api from '../../service/Api';
import Loading from '../../components/Loading';
import circle from '../../assets/img/circle.png';
import Rating from '../../components/Rating';

import {
  Container,
  CardContainerImagem,
  CardImagem,
  ScrollImagem,
  HeadTitle,
  BodyContainer,
  Title,
  Description,
  DescriptionText,
  ContainerImagem,
  ContainerType,
  ImagemType,
  ContainerTypeBack,
  ContainerRating
} from './styles';

interface LeagueDetailsRouterParams {
  name: string;
}

interface League {
  lore: string;
  name: string;
  title: string;
  tags: [];
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
}

const Card = () => {
  const route = useRoute();
  const [league, setLeague] = useState<League>();
  const params = route.params as LeagueDetailsRouterParams;

  const ratingObj = {
    ratings: 3,
    views: 'Dificuldade'
  }


  useEffect(() => {
    async function loadLeague() {
      await api
        .get(`/championFull.json`)
        .then((resp) => {
          setLeague(resp.data.data[params.name]);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    loadLeague();
  }, []);

  if (!league) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <Container>
        <CardContainerImagem>
          <ScrollImagem horizontal pagingEnabled>
            <CardImagem
              resizeMode="cover"
              source={{
                uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.name}_0.jpg`,
              }}
            />
            <CardImagem
              resizeMode="cover"
              source={{
                uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.name}_1.jpg`,
              }}
            />
            <CardImagem
              resizeMode="cover"
              source={{
                uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.name}_2.jpg`,
              }}
            />
          </ScrollImagem>
        </CardContainerImagem>
        <HeadTitle>
          <Title>{league.name + ' ' + league.title}</Title>
        </HeadTitle>
        <BodyContainer>
          <Description>
            <DescriptionText>{league.lore}</DescriptionText>
          </Description>

          <ContainerImagem>
            {league.tags.map((resp) => {
              let url = '../../assets/img/Fighter.png';

              if (resp === 'Tank') {
                url = require('../../assets/img/Tank.png');
              } else if (resp === 'Assassin') {
                url = require('../../assets/img/Assassin.png');
              } else if (resp === 'Mage') {
                url = require('../../assets/img/Mage.png');
              } else if (resp === 'Marksman') {
                url = require('../../assets/img/Marksman.png');
              } else if (resp === 'Support') {
                url = require('../../assets/img/Support.png');
              } else if (resp === 'Fighter') {
                url = require('../../assets/img/Fighter.png');
              }

              return (
                <View
                  key={resp}
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 10,
                  }}>
                  <ContainerType source={circle}>
                    <ContainerTypeBack>
                      <ImagemType source={url} />
                    </ContainerTypeBack>
                  </ContainerType>
                  <Text>{resp}</Text>
                </View>
              );
            })}
          </ContainerImagem>
           <ContainerRating> 
            <Rating  ratings={league.info.difficulty} /> 
            <Text >(Dificuldade)</Text>
            </ContainerRating>         
        </BodyContainer>
      </Container>
    </ScrollView>
  );
};

export default Card;
