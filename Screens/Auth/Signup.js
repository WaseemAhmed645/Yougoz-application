import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Image,ScrollView } from 'react-native'
// import { Input } from 'react-native-elements';
import {Colors} from '../Comon/colors'
import {Left,Right} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import { TextInput,RadioButton } from 'react-native-paper';

export class Signup extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
              

              
                <TouchableOpacity onPress={()=>this.props.navigation.goBack(null)}>
                <Icon name='arrowleft' size={24} style={{marginLeft:20,marginTop:20}} />   

                </TouchableOpacity>
                <Text style={{fontSize:30,margin:20,lineHeight:40,fontWeight:'800',letterSpacing:0.62,color:Colors.HEADING,fontFamily:'Avenir-Black',fontStyle:'normal'}}>New Here? Sign Up</Text>
                <ScrollView>
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
                      
                        <TextInput
                          theme={{ colors: { primary: "#2AD95A" }}}
                          label="Username"
                            style={{backgroundColor:'white',width:'90%',alignSelf:'flex-start',marginLeft:10}}
                            underlineColor='#E5E5E5'
                        // value={text}
                        // onChangeText={(text) => setText(text)}
                         />
                    </View>

                    <View>
                      
                        <TextInput
                          theme={{ colors: { primary: "#2AD95A" }}}
                          label="Email"
                            style={{backgroundColor:'white',width:'90%',alignSelf:'flex-start',marginLeft:10}}
                            underlineColor='#E5E5E5'
                        // value={text}
                        // onChangeText={(text) => setText(text)}
                         />
                    </View>
                    <View>
                    
                        <TextInput
                          theme={{ colors: { primary: "#2AD95A" }}}
                          label="Phone"
                          keyboardType='number-pad'
                            style={{backgroundColor:'white',width:'90%',alignSelf:'flex-start',marginLeft:10}}
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
                    <View style={{flexDirection:'row',width:'95%',borderBottomWidth:0.8,alignSelf:'center',borderBottomColor:'#E5E5E5'}}>
                    <TextInput
                          theme={{ colors: { primary: "#2AD95A" }}}
                          label="Confirm Password"
                          secureTextEntry={true}

                            style={{backgroundColor:'white',width:'85%',alignSelf:'flex-start'}}
                            underlineColor='white'
                        // value={text}
                        // onChangeText={(text) => setText(text)}
                         />
                   
                  
                       <Icon name='eyeo' color='#77869E'style={{marginTop:28,marginLeft:15}}  size={17}/>
                 
                  
                    </View>
                </View>
                <TouchableOpacity style={{width:'90%',marginTop:40,alignSelf:'center',height:45,backgroundColor:'#0047CC',justifyContent:'center',alignItems:'center',borderRadius:5}}
                onPress={()=>this.props.navigation.navigate('Login')}
                >
                    <Text style={{color:'white',fontSize:14,fontFamily:'Avenir-Heavy'}}>Sign up</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row',marginTop:15,alignSelf:'center'}}>
                    <Text style={{color:'#77869E',lineHeight:22,top:3,letterSpacing:0.1,fontWeight:'normal',fontSize:15,fontFamily:'Avenir-Heavy'}}>Have an account?</Text>

                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                            <Text style={{fontSize:16,fontFamily:'Avenir-Black'}}> Sign in</Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
                    </View>
        )
    }
}

export default Signup
