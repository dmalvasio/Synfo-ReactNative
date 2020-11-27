import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { navigationRef } from './RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/FontAwesome"
import s from './NavigatorStyle'

import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'

function DrawerMenu(props){
  return(
    <TouchableOpacity onPress={props.navigation}>
      <View style={s.menuContainer}>
        <View style={s.iconoContainer}>
           <Icon size={17} name={props.iconName}/>
        </View>
        <View style={s.tituloContainer}>
           <Text style={s.tituloTxt}>{props.titleName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function Menu(props) {
  return(
    <View style={s.container}>
      <View style={s.bgContainer}>
        <TouchableOpacity>
          <View style={s.userContainer}>
              <Image style={s.userImagen} source={ require('../assets/synfo.jpg')}/>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerMenu iconName='home' titleName='Home' navigation={()=>props.navigation.navigate('Home')}/>
      <DrawerMenu iconName='user' titleName='Login' navigation={()=>props.navigation.navigate('Login')}/>
    </View>
  )
}

const Drawer = createDrawerNavigator();

function SynfoNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator drawerContent={(props)=> <Menu {...props}/>}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default SynfoNavigator;