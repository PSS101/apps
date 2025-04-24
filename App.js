

import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity ,SafeAreaView } from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 function LoginPage({ navigation }) {
  const [name,setName] = useState('')
  const [outText,setOutText] = useState('')
  const [pass,setPass] = useState('')
  const pressed = ()=>{
    if(name && pass){
      setOutText(`Hello ${name} with pass${pass}`)
      setName('')
      setPass('')
      navigation.navigate('Home')
    }
    else{
      if(name){
        setOutText('Please Enter a Pass')
        setPass('')
      }
      else if(pass){
        setOutText('Please Enter a Name')
        setName('')
      }
      else{
        setOutText('Please Enter')
      }
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Enter your Name</Text>
      <TextInput keyboardType="default" placeholder="Enter your name" value={name}  onChangeText = {setName} style={styles.input}/>
      <TextInput keyboardType="default" placeholder="Enter your pass" secureTextEntry={true} value={pass}  onChangeText = {setPass} style={styles.input}/>
      
      <View style={styles.container2}>
      <TouchableOpacity  onPress={()=>{navigation.navigate('SignUp')}} style={styles.SignUpBtn}>
        <Text style={styles.signUp}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=>{navigation.navigate('Forgot')}} style={styles.ForgotBtn}>
        <Text style={styles.signUp}>Forgot pass</Text>
      </TouchableOpacity>
      </View>

      <TouchableOpacity  onPress={pressed}  style={styles.btn}>
        <Text style={styles.btnText}>Enter</Text>
      </TouchableOpacity>
      <Text>{outText}</Text>
    
    </SafeAreaView>
  );
}
function HomePage({ navigation }){
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.home}>Welcome user</Text>
    </SafeAreaView>
    
  )
}
function SignUp({ navigation }){
  const [name,setName] = useState('')
  const [rpass,setRpass] = useState('')
  const [pass,setPass] = useState('')
  const [outText,setOutText] = useState('')
  const pressed = ()=>{
    if(name &&  pass===rpass){
      navigation.navigate('Login')
    }
    else{
      if(name && !pass){
        setOutText('Please Enter a Pass')
        setPass('')
      }
      else if(pass!==rpass){
        setOutText('Please re-enter the pass correctly')
        setName('')
      }
      else{
        setOutText('Please Enter')
      }
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Create your Account</Text>
      <TextInput keyboardType="default" placeholder="Enter your name" value={name}  onChangeText = {setName} style={styles.input}/>
      <TextInput keyboardType="default" placeholder="Enter your pass" secureTextEntry={true} value={pass}  onChangeText = {setPass} style={styles.input}/>
      <TextInput keyboardType="default" placeholder="Re-Enter your pass" secureTextEntry={true} value={rpass}  onChangeText = {setRpass} style={styles.input}/>
      <TouchableOpacity  onPress={pressed} style={styles.btn}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      
      <Text>{outText}</Text>
    
    </SafeAreaView>
  );
}
function Forgot(){
  return(
    
    <SafeAreaView style={styles.container}>
<Text>Forgot Pass</Text>
    </SafeAreaView>
  )
}
const Stack = createNativeStackNavigator()
export default function App(){
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={LoginPage} options={{ headerTitleAlign: 'center',}}/>
        <Stack.Screen name="Home" component={HomePage} options={{ headerTitleAlign: 'center',}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerTitleAlign: 'center',}}/>
        <Stack.Screen name="Forgot" component={Forgot} options={{ headerTitleAlign: 'center',}}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
  },
  input: {
    width:'80%',
    height:40,
    borderWidth:1,
    borderRadius:10,
    margin:10,
  }
  ,
  btn:{
    width:'40%',
    height:40,
    margin:10,
    backgroundColor:'lightblue',
    justifyContent:'center',
    alignItems:"center",
    borderColor:'transparent',
    borderRadius:20,
    borderWidth:1,
   
  },
  btnText:{
     color:'white',
  },
  heading:{
    fontWeight:'bold',
    fontSize:20,
  },
  home:{
    textAlign:'center',
    fontSize:20,
  },
  signUp:{
    color:'blue',
  },
  container2:{
    
    flexDirection:'row',
    flexWrap:'wrap',
    width:'100%'
  },
  SignUpBtn:{
    marginRight:'auto',
    marginLeft:30,
  },
  ForgotBtn:{
    marginLeft:'auto',
    marginRight:30,
  }
});
