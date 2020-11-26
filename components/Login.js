import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet,Button, Text, View, ImageBackground,Image,TouchableOpacity,ScrollView,ImageBackgroundBase, Dimensions } from 'react-native';
import InputTextFields from './../components/InputTextFields';
const {width: WIDTH} = Dimensions.get('window')

export default class Login extends React.Component {
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

  return (
    <ImageBackground source={require('./../images/Whatsapp-Wallpaper-102.jpg')} style={styles.backgroundContainer}>

    <ScrollView style= {styles.container}>
      <View>
        <View style={styles.viewlogo}>
          <Image source={require('./../images/Logo_TV_2015.png')} style={styles.logo}></Image>
          <Text style={[styles.logoText]}>heart<Text style={[styles.text2,{marginTop:10, fontSize: 22,fontWeight:"500",fontWeight: "bold"}]}>Link</Text></Text>
        </View>

          <View>
          <InputTextFields title="Username" placeholderText ="anneb@gmail.com"></InputTextFields>
          <InputTextFields style={{marginTop: 32, marginBottom: 8}} title= "Password" isSecure = {true} placeholderText ="****************" ></InputTextFields>

          <Text style={[styles.text, styles.link,{textAlign: "right"}]}>Forgot Password?</Text>
          <TouchableOpacity style={styles.btnLogin}>
              <Text style={styles.textbtn}>Login</Text>
          </TouchableOpacity>
          <Text style={[styles.text,{color:"#000", fontSize: 15, textAlign: "center", marginVertical: 20}]} >OR CONNECT WITH:</Text>

        </View>
        <View style={{marginTop: 48,flexDirection: "row", justifyContent: "center"}}>

          <TouchableOpacity>
            <View style={styles.socialButtonF}>
              <Image source={require('./../images/logo-facebook.png')} style={styles.Sociallogo}></Image>
              <Text style={styles.text}>FACEBOOK</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.socialButtonI}>
              <Image source={require('./../images/google-plus-logo-1254.png') } style={styles.Sociallogo}></Image>
              <Text style={styles.text}>GOOGLE</Text>
            </View>
          </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
    </ImageBackground>

  );
}
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 30,
    width:'100%',
    height:'100%'
  },
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
    width: 25,
    height: 25,
    marginRight: 8
  },

text: {
color: "#fff",
fontWeight: "bold",
},
text2: {
  color: "#C70039"
  },
socialButtonF:{
  flexDirection: "row",
  marginHorizontal: 12,
  paddingVertical: 12,
  paddingHorizontal: 30,
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: "rgba(171, 180, 189, 065)",
  borderRadius: 25,
  backgroundColor: "#fff",
  shadowColor: "rgba(171, 180, 189, 0.35)",
  shadowOffset: {width: 0,height:10},
  shadowOpacity: 1,
  backgroundColor:"#4267B2",
  shadowRadius: 20,
},
socialButtonI:{
  flexDirection: "row",
  marginHorizontal: 12,
  paddingVertical: 12,
  paddingHorizontal: 30,
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: "rgba(171, 180, 189, 065)",
  borderRadius: 25,
  backgroundColor: "#fff",
  shadowColor: "rgba(171, 180, 189, 0.35)",
  shadowOffset: {width: 0,height:10},
  shadowOpacity: 1,
  backgroundColor:"#DB4437",
  shadowRadius: 20,
},
link: {
  color: "#FF1654",
  fontSize: 14,
  fontWeight: "500"
},
logoText: {
  color: 'black',
  fontSize: 20,
  fontWeight: "500",
  marginTop:10,
  opacity: 0.5
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
});

