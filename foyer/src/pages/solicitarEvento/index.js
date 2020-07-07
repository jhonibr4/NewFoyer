import React , { useState } from 'react';
import { View , Text , ScrollView, TouchableOpacity , Button , Platform , TextInput} from 'react-native';
import { Input } from 'react-native-elements';
import { CalendarList , LocaleConfig } from 'react-native-calendars';
import LottieView from 'lottie-react-native'
import calendar from '../../animation/calendar.json';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icons from 'react-native-vector-icons/FontAwesome5'

import Headers from '../../components/Header';
import glb from '../../components/global';
import style from './style';


export default function solicitarEvento() {

  const [ date , setDate ] = useState(new Date(1598051730000));
  const [ horarioInicio , setHorarioInicio ] = useState();
  const [ horarioTermino , setHorarioTermino ] = useState();
  const [ dateView , setDateView ] = useState();

  const [isTimeInicio, setTimeInicio] = useState(false);
  const [isTimeTermino, setTimeTermino] = useState(false);

  const onChange = (event, selectedTime) => {
    const currentDate = selectedTime || date;
    setDate(currentDate);
  };

  function showTimeInicio(){
    setTimeInicio(true);
  };
  function showTimeTermino(){
    setTimeTermino(true);
  };
  
  function hideDatePicker(){
    setTimeInicio(false);
    setTimeTermino(false);
  };

  function handleConfirmI(){
    console.log(date)
    setHorarioInicio(horarioInicio)
    hideDatePicker();
  };
  function handleConfirmT(){
    console.log(date)
    setHorarioInicio(horarioTermino)
    hideDatePicker();
  };
LocaleConfig.locales['br'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Mar','Abr','Mai','Jun','Jul.','Ago','Set.','Out.','Nov','Dez'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
  dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
  today: 'Hoje\'hoj',
};
LocaleConfig.defaultLocale = 'br';

function mostrarData( dia ){
  setDate(dia.dateString)
  setDateView(`${dia.day}/${dia.month}/${dia.year}`)
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
        <TextInput
          placeholder="Selecione uma data no calendário"
          style={style.input}
          value={dateView}
          disabled
        />
        
        <Text style={style.text}>Nome do Local</Text>
        
        <TextInput
          style={style.input}
          u
        />
        <Text style={style.text}>Horário de Inicio</Text>
        <TextInput
          style={style.input}
          onPress={() => showTimeInicio()} />
        <View style={style.line}>
                <View>
                <Text style={style.text}>Horário de Inicio</Text>
                <TextInput
                    onChangeText={(text) => setConds(text)}
                    style={style.inputLine}
                />
                </View>
                
                <TouchableOpacity style={style.buttonSearch} onPress={() => showTimeInicio()}>
                    <Icons name="door-open" size={30} color="white"/>
                </TouchableOpacity>
            </View>
        <View style={style.line}>
                <View>
                <Text style={style.text}>Horário de Termino</Text>
                <TextInput
                    onChangeText={(text) => setConds(text)}
                    style={style.inputLine}
                />
                </View>
                
                <TouchableOpacity style={style.buttonSearch} onPress={() => showTimeTermino()}>
                    <Icons name="door-closed" size={30} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
       

      
      <DateTimePickerModal
        isVisible={isTimeTermino}
        mode="time"
        onConfirm={handleConfirmI}
        onCancel={hideDatePicker}
        onChange={onChange}
        display="clock"
      />
      <DateTimePickerModal
        isVisible={isTimeInicio}
        mode="time"
        onConfirm={handleConfirmT}
        onCancel={hideDatePicker}
        onChange={onChange}
        display="clock"
        onChange={(date) => setHorarioTermino(date)}
      />
   </ScrollView>
    </View>
    
  );
}