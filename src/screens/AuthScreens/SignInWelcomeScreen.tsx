import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, parameters} from '../../global/styles';
import Swiper from 'react-native-swiper';
import {Button} from '@rneui/base';


const SignInWelcomeScreen = ({navigation } : {navigation:any}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          DISCOVER RESTAURANTS
        </Text>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          IN YOUR AREA
        </Text>
      </View>
      <View
        style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://tasdelenkebap.com.tr/uploads/images/category_yesil-salata_63cfb8b37329e.webp',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://cdn.yemek.com/mnresize/1250/833/uploads/2016/12/akcaabat-koftesi-one-cikan.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{uri: 'https://hotdoner.com/img/NTbJxe4G.jpg'}}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>
      <View style={{flex: 4, justifyContent:'flex-end', marginBottom:20}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title={'SIGN IN'}
            buttonStyle={parameters.styledButton as any}
            titleStyle={parameters.buttonTitle as any}
            onPress={()=>{navigation.navigate('SignInScreen')}}
          />
        </View>
        <View>
        <Button 
        title={"Create your account"}
        buttonStyle={styles.createButton}
        titleStyle={styles.createButtonTitle}
        />
      </View>
      </View>
    </View>
  );
};

export default SignInWelcomeScreen;

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BB09',
  },
  createButton:{
    backgroundColor:"white",
    alignContent:'center',
    justifyContent:'center',
    borderRadius:12,
    borderWidth:1,
    borderColor:colors.grey3,
    height:50,
    marginHorizontal:20,
    marginVertical:15
  },
  createButtonTitle:{
    color:colors.grey3,
    fontSize:16,
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center'
  }
});
