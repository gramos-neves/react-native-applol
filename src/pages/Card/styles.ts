import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
//import circle from '../../assets/img/circle.png';

var x = Dimensions.get('window').width;
const tamanho = x + 'px';

export const Container = styled.View`
  flex: 1;
`;

export const CardContainerImagem = styled.View`
  height: 400px;
  width: ${tamanho};
`;

export const CardImagem = styled.Image`
  height: 400px;
  width: ${tamanho};
  align-items: center;
`;

export const ScrollImagem = styled.ScrollView`
  flex-direction: row;
`;

export const HeadTitle = styled.View`
   padding: 20px;
   align-items: center;
   background:rgb(6, 28, 37);  
  
`

export const Title = styled.Text`
    font-size: 18px; 
    font-weight: bold;
    color: #fff;
    font-family: 'RobotoSlab-Regular';
`

export const BodyContainer = styled.View`
    flex: 1;
   
` 


export const Description = styled.View`
        padding:15px;
`


export const DescriptionText = styled.Text`
      font-family: 'RobotoSlab-Regular';
      text-align: justify;
      font-size: 12px;

`

export const ContainerImagem = styled.View`
     align-items:center;
     flex-direction: row;
     justify-content:center;

    
`; 

export const ContainerType = styled.ImageBackground`
      width:70px;
      height: 70px;
      
`;

export const ContainerTypeBack = styled.View`
       width:70px;
       height: 70px;
       flex: 1;
       align-items:center;
       justify-content:center;
       margin-top:5px;
`


export const ImagemType = styled.Image`
       width: 40px;
       height: 40px;
       

`


export const ContainerRating = styled.View`
      align-items:center

    
`
