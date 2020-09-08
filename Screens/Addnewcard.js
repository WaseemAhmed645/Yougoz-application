import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,Image,ScrollView,FlatList,StatusBar,TextInput} from 'react-native'
import {Left,Right,Body} from 'native-base'
import {Colors} from '../Screens/Comon/colors'
import Icon from 'react-native-vector-icons/AntDesign'

export class Addnewcard extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <StatusBar hidden={true} />
                 <View style={{width:'100%',flexDirection:'row',height:'8%',elevation:1,backgroundColor:'white'}}>
            <Left style={{flexDirection:'row',marginLeft:10}}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
               
               <Icon name='arrowleft' size={24} style={{paddingTop:2}} />
   
                  </TouchableOpacity>
                  
                <Text style={{fontSize:18,marginLeft:15,fontFamily:'Avenir-Black',letterSpacing:0.4}}>
                Add New Card
                </Text>
               
            </Left>
            <Right style={{marginRight:10}}>
                {/* <TouchableOpacity>
                <Icon name='creditcard' size={20} color={Colors.BLUE} />
                </TouchableOpacity> */}
            </Right>
              </View>
            
<View style={{marginLeft:30,marginTop:20}}>
    <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy'}}>Card Number</Text>
    <TextInput 
    placeholder='xxx xxxx xx xxxx'
    style={{width:'90%',fontFamily:'Avenir-Black'}}
    placeholderTextColor='black'
    underlineColorAndroid='#E5E5E5'
    />
</View>
<View style={{width:'100%',flexDirection:'row',justifyContent:'space-evenly',marginTop:40}}>
   <View style={{alignItems:'center'}}>
   <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Expiry</Text>
    <TextInput 
    placeholder='MM/YY'
    // style={{width:'60%'}}
    placeholderTextColor={Colors.LightText}
    underlineColorAndroid='#E5E5E5'
    />
   </View>

   <View style={{alignItems:'center'}}>
   <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>CVV</Text>
    <TextInput 
    placeholder='123'
    // style={{width:'60%'}}
    placeholderTextColor={Colors.LightText}
    underlineColorAndroid='#E5E5E5'
    />
   </View>

   <View style={{alignItems:'center'}}>
   <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Post Code</Text>
    <TextInput 
    placeholder='1000'
    // style={{width:'60%'}}
    placeholderTextColor={Colors.LightText}
    underlineColorAndroid='#E5E5E5'
    />
   </View>
  
</View>
<TouchableOpacity style={{width:'90%',height:45,justifyContent:'center',alignSelf:'center',alignItems:'center',marginTop:40,backgroundColor:Colors.BLUE,borderRadius:5}}
onPress={()=>this.props.navigation.goBack()}
>
                <Text style={{fontSize:16,color:'white'}}>Save Card</Text>
              </TouchableOpacity>
      
            </View>
        )
    }
}

export default Addnewcard
