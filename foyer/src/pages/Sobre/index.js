import React from 'react';
import { View , Text , Image, ScrollView } from 'react-native';
import Header from '../../components/Header';
import ImgSobre from '../../assets/sobrenos.png';
import style from './style';
import glb from '../../components/global';
export default function Sobre() {
 return (
  <ScrollView>
   <View style={glb.container}>
     
       <Header />
     
       <View style={style.box}>
       <Image source={ImgSobre} style={style.imgSobre}/>
       <Text style={style.text}>Formado por cinco jovens empreendedores o grupo Foyer trata-se de uma start-up que pretende se estabelecer 
         no ramo imobiliário brasileiro, oferecendo um produto  que possibilita a melhora na qualidade de vida dentro de condomínios. 
         Sendo impulsionados pelo Centro Paula Souza (graças aos recursos intelectuais e físicos fornecidos), temos a chance de desenvolver 
         uma tecnologia acessível para as diversas camadas sociais que as encaixam em nosso perfil de clientela, vivendo nestes 
         espaços e passando pelos mesmos padrões de aborrecimento diário. Com nossa iniciativa, pretendemos 
         reduzir cada aborrecimento seu ao contribuir com a construção de uma convivência organizada dentro da sua e de 
         tantas outras vizinhaças brasileiras.</Text>
       </View>
       
    </View>
</ScrollView>
  );
}