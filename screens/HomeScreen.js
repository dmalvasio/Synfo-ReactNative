import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import CustomBttn from '../components/CustomBttn'

export default function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>Home Screen</Text>
        <CustomBttn name='Login' dest='Login'/>
      </View>
    );
}