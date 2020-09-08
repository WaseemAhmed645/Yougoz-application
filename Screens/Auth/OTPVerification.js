

import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Image } from 'react-native'
// import { Input } from 'react-native-elements';
import {Colors} from '../Comon/colors'
import { TextInput,RadioButton } from 'react-native-paper';

import Icon from 'react-native-vector-icons/AntDesign'
export class PhoneVerification extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack(null)}>
                <Icon name='arrowleft' size={24} style={{margin:20}} />   
                </TouchableOpacity>
                <Text style={{fontSize:32,lineHeight:38,margin:20,color:Colors.HEADING,fontStyle:'normal',fontWeight:'900',fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Forgot Password</Text>
                <Text style={{fontSize:18,width:300,marginLeft:20,marginTop:10,marginBottom:30,color:Colors.HEADING,fontFamily:'Avenir-Heavy',fontStyle:'normal'}}>Please enter the OTP send on your number</Text>
              
                <View style={{marginTop:60}}>
                    <View>
                    <TextInput
                          theme={{ colors: { primary: "#2AD95A" }}}
                          label="OTP"
                            style={{backgroundColor:'white',width:'90%',alignSelf:'center'}}
                            underlineColor='#E5E5E5'
                        // value={text}
                        // onChangeText={(text) => setText(text)}
                         />
                    </View>

                </View>
                <View style={{flexDirection:'row',marginTop:20,marginBottom:20,alignSelf:'center'}}>
                    <Text style={{color:'#77869E',lineHeight:22,top:3,letterSpacing:0.1,fontWeight:'normal',fontSize:15,fontFamily:'Avenir-Heavy'}}>Don't recieve any code?</Text>

                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                            <Text style={{fontSize:16,fontFamily:'Avenir-Black'}}> Send again</Text>
                        </TouchableOpacity>
                    </View>
          

                <TouchableOpacity style={{width:'90%',marginTop:10,alignSelf:'center',height:45,backgroundColor:'#0047CC',justifyContent:'center',alignItems:'center',borderRadius:5}}
                onPress={()=>this.props.navigation.navigate('ResetPassword')}
                >
                    <Text style={{color:'white',fontFamily:'Avenir-Heavy'}}>Verify</Text>
                    </TouchableOpacity>

            </View>
        )
    }
}

export default PhoneVerification
