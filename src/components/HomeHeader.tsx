import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, parameters} from '../global/styles';
import {Icon, withBadge} from '@rneui/base';

export default function HomeHeader({navigation}:{navigation:any}) {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.header}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 15,
        }}>
        <Icon name="menu" type="material" color={colors.headerText} size={32} onPress={()=>{
          navigation.toggleDrawer();
        }} />
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text
          style={{color: colors.headerText, fontSize: 25, fontWeight: 'bold'}}>
          XpressFood
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 15,
        }}>
        <BadgeIcon
          type="material-community"
          name="cart"
          color={colors.headerText}
          size={32}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
});
