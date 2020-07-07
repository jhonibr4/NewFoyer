import React from 'react';
import { View , Text, ScrollView , TouchableOpacity, FlatList} from 'react-native';
import { CalendarList , LocaleConfig } from 'react-native-calendars'
import { Button } from 'react-native-elements';
import style from './style';
import glb from '../../../components/global';
import { useNavigation } from '@react-navigation/native';
export default function Agenda() {

  const navigation = useNavigation();

LocaleConfig.locales['br'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Mar','Abr','Mai','Jun','Jul.','Ago','Set.','Out.','Nov','Dez'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
  dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
  today: 'Hoje\'hoj',
};
LocaleConfig.defaultLocale = 'br';
 return (
   
   <View style={style.container}>
     
      <View style={style.header}>   
        <Text style={style.textHeader}>Agenda</Text>
      </View>
      <View style={style.calendar}>
        <CalendarList
          
          horizontal={true}
          pagingEnabled={true}
          onDayPress={(dia) => {console.log('Dia selecionado', dia)}}
          hideExtraDays={false}
          
          markedDates={{
            
            '2020-05-16': {selected: true, marked: true, selectedColor: '#4db8fe'},
            '2020-07-03': {selected: true, marked: true, selectedColor: '#4db8fe'},
          }}
        />
        </View>
      <Button title="Exibir Evento" type='outline' buttonStyle={style.buttons} titleStyle={style.textButtons}/>
      <TouchableOpacity style={glb.button} onPress={() => navigation.navigate('Solicitar Evento')}>
        <Text style={glb.textButton}>Solicitar Evento</Text>
      </TouchableOpacity>
  </View>
  );
}