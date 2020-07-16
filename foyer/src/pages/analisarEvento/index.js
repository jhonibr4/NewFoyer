import React from 'react';
import { View } from 'react-native';

import style from './style';
import glb from '../../components/global';
import Headers from '../../components/Header';


export default function analisarEvento() {
 return (
    <View style={glb.container}>
        <Headers/>
    </View>
  );
}