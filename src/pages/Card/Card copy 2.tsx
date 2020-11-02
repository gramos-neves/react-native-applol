import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import api from '../../service/Api';
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
} from './styles';

interface LeagueDetailsRouterParams {
  name: string;
}

interface LeagueInfo {
  attack: number;
  defense: number;
}

interface Props{
  lore: string;
}

interface League {
  blurb: string;
  name: string;
  title: string;
  sections: [{
       props: Props
     }
  ];
}

const Card: React.FC = () => {
  const route = useRoute();
  const [league, setLeague] = useState<League>();
  const [description, setDescription] = useState('');

  const params = route.params as LeagueDetailsRouterParams;

  useEffect(() => {
    async function loadLeague() {
      
      let nomeChamps = params.name; 

      if(nomeChamps === 'AurelionSol'){
         nomeChamps = 'aurelion-sol';
      }else if(nomeChamps === 'DrMundo'){
        nomeChamps = 'dr-mundo';
      }else if(nomeChamps === 'Velkoz'){
        nomeChamps = 'vel-koz';
      }else if(nomeChamps === 'XinZhao'){
        nomeChamps = 'xin-zhao';
      }
      
      
      
        

      await api
        .get(`/${nomeChamps.toLocaleLowerCase()}/page-data.json`)
        .then((resp) => {
         // console.log(resp.data.result.pageContext.data)
           setLeague(resp.data.result.pageContext.data);
          // setDescription(resp.data.result.pageContext.data.sections[0].props.lore)
        })
        .catch((err) => {
          console.log(err);
        });
    }

    loadLeague();
  }, []);

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
            <Title>{ league?.title }</Title>
        </HeadTitle>
        <BodyContainer>
          <Description>
            <DescriptionText>
                  { league?.sections[0].props.lore }
            </DescriptionText>
          </Description>
        </BodyContainer>
      </Container>
    </ScrollView>
  );
};

export default Card;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
});
