import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Image } from 'react-native'
// import { Input } from 'react-native-elements';
import {Colors} from '../Comon/colors'
import {Left,Right} from 'native-base'
import { TextInput,RadioButton } from 'react-native-paper';

import Icon from 'react-native-vector-icons/AntDesign'
export class ResetPassword extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack(null)}>
                <Icon name='arrowleft' size={24} style={{margin:20}} />   

                </TouchableOpacity>
                <Text style={{fontSize:32,lineHeight:38,margin:20,color:Colors.HEADING,fontStyle:'normal',fontWeight:'900',fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Reset Password</Text>
                <Text style={{fontSize:18,marginLeft:20,marginTop:10,marginBottom:30,color:Colors.HEADING,fontFamily:'Avenir-Heavy',fontStyle:'normal'}}>Enter a new password</Text>
              
                <View style={{marginTop:60}}>
                <View style={{flexDirection:'row',width:'95%',borderBottomWidth:0.8,alignSelf:'center',borderBottomColor:'#E5E5E5'}}>
                    <Left>
                    <TextInput
                          theme={{ colors: { primary: "#2AD95A" }}}
                          label="Password"
                          secureTextEntry={true}

                            style={{backgroundColor:'white',width:'85%',alignSelf:'flex-start'}}
                            underlineColor='white'
                        // value={text}
                        // onChangeText={(text) => setText(text)}
                         />
                    </Left>
                   
                   <Right style={{marginRight:15,top:5}}>
                       <Icon name='eyeo' color='#77869E' size={17}/>
                   </Right>
                  
                    </View>

                    <View style={{flexDirection:'row',width:'98%',borderBottomWidth:0.8,alignSelf:'center',borderBottomColor:'#E5E5E5'}}>
                    <Left>
                    <TextInput
                          theme={{ colors: { primary: "#2AD95A" }}}
                          label="Confirm Password"
                          secureTextEntry={true}

                            style={{backgroundColor:'white',width:'85%',alignSelf:'flex-start'}}
                            underlineColor='white'
                        // value={text}
                        // onChangeText={(text) => setText(text)}
                         />
                    </Left>
                   
                   <Right style={{marginRight:15,top:5}}>
                       <Icon name='eyeo' color='#77869E' size={17}/>
                   </Right>
                  
                    </View>
                </View>
          

                <TouchableOpacity style={{width:'90%',marginTop:50,alignSelf:'center',height:45,backgroundColor:'#0047CC',justifyContent:'center',alignItems:'center',borderRadius:5}}
                onPress={()=>this.props.navigation.navigate('Login')}
                >
                    <Text style={{color:'white',fontFamily:'Avenir-Heavy'}}>Reset Password</Text>
                    </TouchableOpacity>

            </View>
        )
    }
}

export default ResetPassword
