import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,Image,ScrollView,FlatList,StatusBar,TextInput} from 'react-native'
import {Left,Right,Body} from 'native-base'
import {Colors} from '../Screens/Comon/colors'
import Icon from 'react-native-vector-icons/AntDesign'

export class PaymentMethod extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <StatusBar hidden={true} />
                 <View style={{width:'100%',flexDirection:'row',height:'10%',backgroundColor:'white'}}>
            <Left style={{flexDirection:'row',marginLeft:10}}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
               
               <Icon name='arrowleft' size={24} style={{paddingTop:2}} />
   
                  </TouchableOpacity>
               
               
            </Left>
            <Right style={{marginRight:10}}>
                {/* <TouchableOpacity>
                <Icon name='creditcard' size={20} color={Colors.BLUE} />
                </TouchableOpacity> */}
            </Right>
              </View>
              <Text style={{fontSize:32,lineHeight:38,margin:20,color:Colors.HEADING,fontStyle:'normal',fontWeight:'900',fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Payment Method</Text>

            
<View style={{marginLeft:30,marginTop:20}}>
    <Text style={{color:Colors.LightText}}>Card Number</Text>
    <TextInput 
    placeholder='xxx xxxx xx xxxx'
    style={{width:'90%',fontWeight:"bold"}}
    placeholderTextColor={Colors.HEADING}
    underlineColorAndroid='#E5E5E5'
    />
</View>
<View style={{width:'100%',flexDirection:'row',justifyContent:'space-evenly',marginTop:30}}>
   <View style={{alignItems:'center'}}>
   <Text style={{color:'#77869E',fontSize:12,fontWeight:'normal',lineHeight:18,fontFamily:'Avenir-Heavy',letterSpacing:0.27}}>Expiry</Text>
    <TextInput 
    placeholder='MM/YY'
    // style={{width:'60%'}}
    placeholderTextColor={'#dedede'}
    underlineColorAndroid='#E5E5E5'
    />
   </View>

   <View style={{alignItems:'center'}}>
   <Text style={{color:'#77869E',fontSize:12,fontWeight:'normal',lineHeight:18,fontFamily:'Avenir-Heavy',letterSpacing:0.27}}>CVV</Text>
    <TextInput 
    placeholder='123'
    // style={{width:'60%'}}
    placeholderTextColor={'#dedede'}
    
    underlineColorAndroid='#E5E5E5'
    />
   </View>

   <View style={{alignItems:'center'}}>
   <Text style={{color:'#77869E',fontSize:12,fontWeight:'normal',lineHeight:18,fontFamily:'Avenir-Heavy',letterSpacing:0.27}}>Post Code</Text>
    <TextInput 
    placeholder='1000'
    // style={{width:'60%'}}
    placeholderTextColor={'#dedede'}
    underlineColorAndroid='#E5E5E5'
    />
   </View>
  
</View>
<TouchableOpacity style={{width:'90%',height:45,justifyContent:'center',alignSelf:'center',alignItems:'center',marginTop:30,backgroundColor:Colors.BLUE,borderRadius:5}}
onPress={()=>this.props.navigation.navigate('Home')}
>
                <Text style={{fontSize:14,color:'white',fontFamily:'Avenir-Heavy'}}>Save Card</Text>
              </TouchableOpacity>
      <View style={{width:'90%',alignSelf:'center',marginTop:30}}>
          <Text style={{color:Colors.HEADING,fontSize:14,lineHeight:19,letterSpacing:0.85,marginTop:15}}>$XX-XX amount will be deducted from your account, and xx or every month so make this process smooth and less work for you.</Text>
      </View>
            </View>
        )
    }
}

export default PaymentMethod
