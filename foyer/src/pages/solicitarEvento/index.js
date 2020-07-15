import React , { useState } from 'react';
import { View , Text , ScrollView, TouchableOpacity , Button , Platform , TextInput} from 'react-native';
import { Input } from 'react-native-elements';
import { CalendarList , LocaleConfig } from 'react-native-calendars';
import LottieView from 'lottie-react-native'
import calendar from '../../animation/calendar.json';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icons from 'react-native-vector-icons/FontAwesome5'
import TimePicker from 'react-native-simple-time-picker';
import TextArea from 'react-native-textarea';
import api from '../../services/api'

import Headers from '../../components/Header';
import glb from '../../components/global';
import style from './style';
import AsyncStorage from '@react-native-community/async-storage';


export default function solicitarEvento() {

  const [ data , setData ] = useState('');
  const [ dateView , setDateView ] = useState('Selecione um data no calendario');
  const [ nomeLocal , setNomeLocal ] = useState('')
  const [ descricao , setDescricao ] = useState('')
  


  const [ horaSelecionadaIni , setHoraSelecionadaIni ] = useState();
  const [ minSelecionadoIni , setMinSelecionadoIni ] = useState();
  const [ horaSelecionadaTer , setHoraSelecionadaTer ] = useState();
  const [ minSelecionadoTer , setMinSelecionadoTer ] = useState();
  const [ horaTer , setHoraTer ] = useState();
  const [ horaIni , setHoraIni ] = useState();
          
          
  const [isTimeInicio, setTimeInicio] = useState(false);
  const [isTimeTermino, setTimeTermino] = useState(false);

  
LocaleConfig.locales['br'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Mar','Abr','Mai','Jun','Jul.','Ago','Set.','Out.','Nov','Dez'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
  dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
  today: 'Hoje\'hoj',
};
LocaleConfig.defaultLocale = 'br';

function mostrarData( dia ){
  setData(dia.dateString)
  setDateView(`${dia.day}/${dia.month}/${dia.year}`)
  console.log(horaTer)
  console.log(horaIni)
  console.log(data)

}

async function solicitarEvento(){
  try{
    
    const id_morador = await AsyncStorage.getItem('id_mora');
    const id_condEvento = await AsyncStorage.getItem('id_cond')
    const evento = { data , nomeLocal  ,  horaIni , horaTer , descricao , id_condEvento , id_morador};
    const solicitacao = await api.post('evento', evento ,{
      headers:{
        authorization:id_morador
      }
    })
    console.log(solicitacao)
  } catch (err){
    console.log(err)
  }
}


 return (
   
    <View style={glb.container}>
      <ScrollView>
        <Headers />
        <View style={style.viewDescription}>
        <View style={style.viewText}>
            <Text style={style.textDescription}>Nessa página você terá a possibilidade de solicitar um evento para o sindio, e caso
            seja confirmado ele será incluido na agenda!</Text>
        </View>
        <View style={style.viewAnimation}>
          <LottieView autoSize={false} speed={0.6} source={calendar} autoPlay={true} loop />
        </View>
      </View>
        <View style={style.calendar}>
        <CalendarList
          horizontal={true}
          pagingEnabled={true}
          onDayPress={(dia) => mostrarData( dia )}
          hideExtraDays={false}
          markedDates={{
            '2020-05-16': {selected: true, marked: true, selectedColor: '#4db8fe'},
            '2020-07-03': {selected: true, marked: true, selectedColor: '#4db8fe'},
          }}
        />
        </View>
        <View style={style.viewInput}>
        <Text style={style.text}>Data do evento</Text>
        <View style={style.inputDate}>
          <Text style={style.textDate}>{dateView}</Text>
        </View>
        
        <Text style={style.text}>Nome do Local</Text>
        
        <TextInput
          style={style.input}
          onChangeText={(text) => setNomeLocal(text)}
        />
        <Text style={style.text}>Descrição do Evento</Text>
        <View style={style.textareaContainer}>
          <TextArea
            containerStyle={style.viewTextarea}
            style={style.textArea}
            onChangeText={(text) => setDescricao(text)}
            value={descricao}
          />
        </View>
           
          <Text style={style.text}>Horário de Inicio</Text>
          <TimePicker
          selectedHours={horaSelecionadaIni}
          selectedMinutes={minSelecionadoIni}
          onChange={(hours, minutes) => setHoraIni(`${hours}:${minutes}`)}
        />
          <Text style={style.text}>Horário de Termino</Text>
          <TimePicker
          selectedHours={horaSelecionadaTer}
          selectedMinutes={minSelecionadoTer}
          onChange={(hours, minutes) => setHoraTer(`${hours}:${minutes}`)}
        />
        <TouchableOpacity
          style={style.buttonEdit}
          onPress={() => solicitarEvento()}
        >

          <Text  style={style.textButton}>Solicitar</Text>
        </TouchableOpacity>
        </View>
  
   </ScrollView>
    </View>
    
  );
}