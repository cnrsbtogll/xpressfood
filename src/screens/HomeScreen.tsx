import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import {colors} from '../global/styles';
import {Icon} from '@rneui/base';

export default function HomeScreen() {
  const [delivery, setDelivery] = useState(true);
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator>
        <View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}
              style={{
                ...styles.deliveryButton,
                backgroundColor: delivery ? colors.buttons : colors.grey5,
              }}>
              <View>
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
              }}
              style={{
                ...styles.deliveryButton,
                backgroundColor: delivery ? colors.grey5 : colors.buttons,
              }}>
              <View>
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filterView}>
          <View
            style={styles.addressView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="map-marker"
                type="material-community"
                size={26}
                color={colors.grey4}
              />
              <Text style={{marginLeft: 5}}>22 Bessire Street</Text>
            </View>
            <View style={styles.clockView}>
              <Icon
                name="clock-time-four"
                type="material-community"
                size={26}
                color={colors.grey4}
              />
              <Text style={{marginLeft: 5}}>Now</Text>
            </View>
          </View>
          <View style={{flex: 1, marginRight: 15}}>
            <Icon
              name="tune"
              type="material-community"
              size={26}
              color={colors.grey4}
            />
          </View>
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}> Categories</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
    alignItems: 'center',
  },
  deliveryText: {
    fontSize: 16,
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
    borderRadius: 15,
    paddingHorizontal: 5,
  },
  addressView:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.grey5,
    marginHorizontal: 20,
    borderRadius: 25,
    padding: 4,
    flex: 9,
  },
  headerText:{
    color:colors.grey2,
    fontSize:22,
    fontWeight:'bold',
    paddingLeft:20
  },
  headerTextView:{
    backgroundColor:colors.grey5,
    paddingVertical:2
  }
});
