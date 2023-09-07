import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import {colors} from '../global/styles';
import {Icon} from '@rneui/base';
import {FlatList} from 'react-native-gesture-handler';
import {filterData} from '../global/data';

export default function HomeScreen() {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');
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
          <View style={styles.addressView}>
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
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View
                  style={
                    indexCheck === item.id
                      ? {...styles.smallCardSelected}
                      : {...styles.smallCard}
                  }>
                  <Image
                    style={{height: 60, width: 60, borderRadius: 30}}
                    source={item.image}
                  />
                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? {...styles.smallCardTextSected}
                          : {...styles.smallCardText}
                      }>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}> Free delivery now</Text>
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
  addressView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.grey5,
    marginHorizontal: 20,
    borderRadius: 25,
    padding: 4,
    flex: 9,
  },
  headerText: {
    color: colors.grey2,
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  headerTextView: {
    backgroundColor: colors.grey5,
    paddingVertical: 2,
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 80,
    margin: 10,
    padding: 5,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 80,
    margin: 10,
    padding: 5,
  },
  smallCardTextSected: {
    fontWeight: 'bold',
    color: colors.cardBackground,
  },
  smallCardText: {
    fontWeight: 'bold',
    color: colors.grey2,
  },
});
