import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {colors, parameters} from '../../global/styles';
import {Icon, Button, SocialIcon} from '@rneui/themed';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';

export default function SignInScreen() {
  const [textInput2Focused, setTextInput2Focused] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View>
      <Header title={'MY ACCOUNT'} type={'ionicon'} />

      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={styles.title}>Sign-In</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter the e-mail and password.</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>
      <View>
        <View>
          <TextInput
            style={styles.textInput1}
            placeholder="Email"
            ref={textInput1 as any}
          />
        </View>
        <View style={styles.textInput2}>
          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="lock"
              iconStyle={{color: colors.grey3}}
              type="material"
            />
          </Animatable.View>
          <TextInput
            placeholder="Password"
            style={{width: '80%'}}
            ref={textInput2 as any}
            onFocus={() => {
              setTextInput2Focused(false);
            }}
            onBlur={() => {
              setTextInput2Focused(true);
            }}
          />
          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              name="visibility-off"
              iconStyle={{color: colors.grey3, marginRight: 10}}
              type="material"
            />
          </Animatable.View>
        </View>
      </View>
      <View style={{margin: 20}}>
        <Button
          title="SIGN IN"
          buttonStyle={parameters.styledButton as any}
          titleStyle={parameters.buttonTitle as any}
        />
      </View>
      <View>
        <Text
          style={{
            ...styles.text1,
            textDecorationLine: 'underline',
            textAlign: 'center',
          }}>
          {' '}
          Forgot Password ?
        </Text>
      </View>
      <View>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 15,
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          OR
        </Text>
      </View>
      <View>
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View>
        <SocialIcon
          title="Sign In With Google"
          button
          type="google"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View>
        <Text
          style={{
            ...styles.text1,
            marginLeft: 20,
            marginTop:15
          }}>
          {' '}
          New on XpressFood ?
        </Text>
      </View>
      <View>
        <Button 
        title={"Create an account"}
        buttonStyle={styles.createButton}
        titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#ff8c52',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  textInput1: {
    borderWidth: 1,
    borderColor: colors.grey3,
    marginHorizontal: 20,
    borderRadius: 12,
    marginVertical: 20,
    paddingLeft: 15,
  },
  textInput2: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.grey3,
    marginHorizontal: 20,
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 'auto',
    borderRadius: 12,
    marginHorizontal: 20,
    height: 50,
  },
  createButton:{
    backgroundColor:"white",
    alignSelf:'flex-end',
    alignContent:'center',
    justifyContent:'center',
    borderRadius:12,
    borderWidth:1,
    borderColor:colors.buttons,
    height:40,
    paddingHorizontal:20,
    marginRight:20,
    marginVertical:15
  },
  createButtonTitle:{
    color:colors.buttons,
    fontSize:16,
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center'
  }
});
