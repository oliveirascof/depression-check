import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Q1 } from '../screens/Q1';
import { Q2 } from '../screens/Q2';
import { Q3 } from '../screens/Q3';
import { Q4 } from '../screens/Q4';
import { Q5 } from '../screens/Q5';
import { THEME } from '../styles/Theme';


const { Navigator, Screen } = createStackNavigator(); 
const color = THEME

export const AppRoutes = () => {

  return (
    <Navigator initialRouteName="home" 
                screenOptions={{
                  headerShown: true, 
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: color.colors.green[700] },
                  headerMode: 'float',
                  headerTintColor: 'white',
                }}>

        <Screen name="home" component={Home} options={{ headerShown: false}}/>
        <Screen name="q1" component={Q1} options={{title: 'Questão 1'}}/>
        <Screen name="q2" component={Q2} options={{title: 'Questão 2'}}/>
        <Screen name="q3" component={Q3} options={{title: 'Questão 3'}}/>
        <Screen name="q4" component={Q4} options={{title: 'Questão 4'}}/>
        <Screen name="q5" component={Q5} options={{title: 'Questão 5'}}/>

    </Navigator>
  );
}