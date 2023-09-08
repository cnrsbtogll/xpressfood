import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootClientTabs from './ClientTab';
import {Icon} from '@rneui/base';
import {colors} from '../global/styles';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
        headerShown:false
    }}>
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
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
