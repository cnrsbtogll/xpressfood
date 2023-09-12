import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootClientTabs from './ClientTab';
import {Icon} from '@rneui/base';
import {colors} from '../global/styles';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
    drawerContent= {props =><DrawerContent {...props} /> }
      screenOptions={{
        headerShown: false,
      }}
      >
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          title: 'Client',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home"
              type="material-commonity"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Business consoleScreen"
        component={BusinessConsoleScreen}
        options={{
          title: 'Business console',
          drawerIcon: ({focused, size}) => (
            <Icon
              type="material"
              name="business"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
