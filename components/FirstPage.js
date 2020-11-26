import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground,Image,TouchableOpacity,ScrollView,ImageBackgroundBase, Dimensions } from 'react-native';

const {width: WIDTH} = Dimensions.get('window')
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class FirstPage extends Component  {

  static navigationOptions = {
    title: 'First Page',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#87CEFA',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
    
  };
  constructor (props) {
    super(props)
}
  render(){
    const { navigate } = this.props.navigation;
    console.log(this.props,"porps->>>>")
  return (
    <ImageBackground source={require('./../images/Whatsapp-Wallpaper-102.jpg')} style={styles.backgroundContainer}>

 <View style={styles.logoontainer}>
   <Image source={require('./../images/Logo_TV_2015.png')} style={styles.logo}/>
   <Text style={[styles.logoText]}>heart<Text style={[styles.text,{marginTop:10, fontSize: 22,fontWeight:"500",fontWeight: "bold"}]}>Link</Text></Text>

 </View>
  <View style={{marginTop: 100}}>
  <TouchableOpacity style={styles.btnSignup}>
    <Text style={styles.textbtns}>SIGNUP</Text>
  </TouchableOpacity>
      <TouchableOpacity style={styles.btnLogin}  onPress={() =>navigate('Login')}>
        <Text style={styles.textbtn}>LOGIN</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>

  );
}
}

const styles = StyleSheet.create({

  backgroundContainer: {
    flex: 1,
    width:null,
    height:null,
    alignItems: 'center',
    justifyContent: 'center',

  },
  viewlogo:{
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
    

  },
  logo:{
 
    width: 120,
    height: 120
  },
  Sociallogo:{
    width: 16,
    height: 16,
    marginRight: 8
  },

text: {
color: "#C70039"
},


logoontainer: {
  alignItems: "center"
},
logoText: {
  color: 'black',
  fontSize: 20,
  fontWeight: "500",
  marginTop:10,
  opacity: 0.5
},
btnSignup: {
  marginTop:50,
  width: WIDTH -55,
  height: 50,
  borderRadius: 25,
  backgroundColor: '#ff4539',
  justifyContent: 'center',
  borderColor:'#fff',
  borderWidth: 1,

},
 btnLogin: {
  width: WIDTH -55,
  height: 50,
  borderRadius: 25,
  backgroundColor: '#fff',
  justifyContent: 'center',
  marginTop: 20
},
textbtn: {
  color: '#ff4539',
  fontSize: 16,
  fontWeight: "bold",
  textAlign: 'center'
},
textbtns: {
  color: '#fff',
  fontSize: 16,
  fontWeight: "bold",
  textAlign: 'center'
},
});
