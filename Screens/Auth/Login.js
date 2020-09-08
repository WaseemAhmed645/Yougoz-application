import React, { Component,useState } from 'react'
import { Text, View,TouchableOpacity,AsyncStorage,Image } from 'react-native'
// import { Input } from 'react-native-elements';
import {Colors} from '../Comon/colors'
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { TextInput,RadioButton } from 'react-native-paper';
import {Left,Right} from 'native-base'

const first=true;
function Login() {
    const [checked, setChecked] = React.useState('DEC');
    const {navigate} = useNavigation();
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <TouchableOpacity onPress={()=>navigate('onBoard')}>
                <Icon name='arrowleft' size={24} style={{margin:20}} />   
{/* <Text style={{fontFamily:'RobotoRoboto',fontSize:20}}>ggggggggggggggggggggg</Text> */}
                </TouchableOpacity>
                <Text style={{fontSize:32,lineHeight:38,margin:20,color:Colors.HEADING,fontStyle:'normal',fontWeight:'900',fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Welcome Login</Text>
                <View style={{width:'100%',height:100,marginTop:20,backgroundColor:'white',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                    <TouchableOpacity style={{width:'45%',height:40,justifyContent:'center',alignItems:'center',borderWidth:0.3,borderColor:'#77869E',borderRadius:10}}>
                                    <Image source={require('../../Images/facebook.png')} style={{width:28,height:28,resizeMode:'cover'}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'45%',height:40,justifyContent:'center',alignItems:'center',borderWidth:0.3,borderColor:'#77869E',borderRadius:10}}>
                    <Image source={require('../../Images/google.png')} style={{width:30,height:30}} />
                    </TouchableOpacity>

                </View>
                <View>
                    <View>
                        {/* <Text style={{marginLeft:10,color:Colors.LightText}}>User name</Text> */}
                        <TextInput
                          theme={{ colors: { primary: "#2AD95A" }}}
                          label="Username"
                            style={{backgroundColor:'white',width:'95%',alignSelf:'flex-start',marginLeft:10}}
                            underlineColor='#E5E5E5'
                        // value={text}
                        // onChangeText={(text) => setText(text)}
                         />
                    </View>

                <View style={{flexDirection:'row',width:'95%',borderBottomWidth:0.8,alignSelf:'center',borderBottomColor:'#E5E5E5'}}>
                  
                    <TextInput
                          theme={{ colors: { primary: "#2AD95A" }}}
                          label="Password"
                          secureTextEntry={true}

                            style={{backgroundColor:'white',width:'85%',alignSelf:'flex-start'}}
                            underlineColor='white'
                        // value={text}
                        // onChangeText={(text) => setText(text)}
                         />
                   
                  
                       <Icon name='eyeo' color='#77869E'style={{marginTop:28,marginLeft:15}}  size={17}/>
                 
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Left>
                    <View style={{flexDirection:'row'}}>
                    <RadioButton
                 value="Remember me"
                 color={'#2AD95A'}
                //  size={10}
                 label='Remember me'
                 status={ checked === 'first' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('first')}
      />
      <Text style={{marginTop:8,color:Colors.LightText,fontSize:13,letterSpacing:0.3}}>Remember me</Text>
                    </View>
                    </Left>
                   <Right>


                   <TouchableOpacity onPress={()=>navigate('PhoneVerification')}>
                <Text style={{margin:10,color:'#0047CC',fontSize:13,fontFamily:'Avenir-Black',letterSpacing:0.2,lineHeight:18}}>Forgot Password ?</Text>
                </TouchableOpacity>

                   </Right>

                </View>
          
               
                <TouchableOpacity style={{width:'90%',marginTop:30,alignSelf:'center',height:50,backgroundColor:'#0047CC',justifyContent:'center',alignItems:'center',borderRadius:5}}
                onPress={()=>navigate("Home2")}
                >
                    <Text style={{color:'white'}}>Login</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row',marginTop:25,alignSelf:'center'}}>
                        <Text style={{color:'#77869E',lineHeight:22,letterSpacing:0.1,fontWeight:'normal',fontSize:15,fontFamily:'Avenir-Heavy'}}>Don't have a account? </Text>
                        <TouchableOpacity onPress={()=>navigate('Signup')}>
                            <Text style={{lineHeight:22,letterSpacing:0.4,fontSize:16,fontFamily:'Avenir-Black'}}> Sign up</Text>
                        </TouchableOpacity>
                    </View>
            </View>
    )
    
}

export default Login
