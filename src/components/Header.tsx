import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {colors, parameters} from '../global/styles';
import {Icon} from '@rneui/themed';

export default function Header({title, type} : {title: string, type: string}) {
  return (
    <View style={styles.header}>
      <View style={{marginHorizontal:20}}>
        <Icon
          type={type}
          name="arrow-back"
          size={28}
          color={colors.headerText}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
