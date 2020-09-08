import React, { Component } from 'react'
import { Text, View,Dimensions,FlatList,ImageBackground,Image,TouchableOpacity,ScrollView,StatusBar } from 'react-native'
import {Colors} from '../Comon/colors'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import {Left,Right,Body, Separator} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import { CheckBox } from 'react-native-elements'
export class Chat extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
             <StatusBar hidden={true} />
                <View style={{width:'100%',flexDirection:'row',height:'8%',marginBottom:10,elevation:1,backgroundColor:'white'}}>
            <Left style={{flexDirection:'row',marginLeft:10}}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
            <Icon name='arrowleft' size={20} style={{paddingTop:2}} />

</TouchableOpacity>
                <Text style={{fontSize:18,marginLeft:15,color:Colors.HEADING,fontWeight:'bold'}}>
               Car Fund
                </Text>
            </Left>
            <Right style={{marginRight:10}}>
                {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditList')}>
                <Icon name='edit' size={10} color={Colors.BLUE} />
                </TouchableOpacity> */}
            </Right>
              </View>

              <View style={{justifyContent:'flex-end'}}>
                 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>

                  <ImageBackground source={require('../../Images/rec.png')} style={{width:250,justifyContent:'center',alignItems:'center',height:80}} imageStyle={{borderRadius:10}} >

                      <Text style={{marginLeft:20,fontSize:16,fontFamily:'Avenir-Light'}}>Hi there,...how are you.. Where you've been ? call me.. Tc</Text>
                  </ImageBackground>
                  <Image source={require('../../Images/3.jpg')} style={{width:20,margin:10,height:20,borderRadius:10}} />
                  </View>
                 
                  <Text style={{position:'absolute',right:40,top:83,color:Colors.LightText}}>Tues | 12:Pm</Text>

                 
              </View>

              {/* <View style={{justifyContent:'flex-end',marginTop:35}}>
                 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                 <Image source={require('../../Images/3.jpg')} style={{width:20,margin:10,height:20,borderRadius:10}} />

                  <ImageBackground source={require('../../Images/sent.png')} style={{width:250,justifyContent:'center',alignItems:'center',height:80}} imageStyle={{borderRadius:10}} >

                      <Text style={{marginLeft:20,fontSize:16,color:'white'}}>Hi there,...how are you.. Where you've been ? call me.. Tc</Text>
                  </ImageBackground>
                  </View>
                 
                  <Text style={{position:'absolute',left:40,top:83,color:Colors.LightText}}>Tues | 12:Pm</Text>

                 
              </View> */}
              <View style={{justifyContent:'flex-end',marginTop:35}}>
                 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                 <Image source={require('../../Images/3.jpg')} style={{width:20,margin:10,height:20,borderRadius:10}} />

                  <ImageBackground source={require('../../Images/sent.png')} style={{width:250,justifyContent:'center',alignItems:'center',height:80}} imageStyle={{borderRadius:10}} >

                      <Text style={{marginLeft:20,fontSize:16,color:'white',fontFamily:'Avenir-Light'}}>Hi there,...how are you.. Where you've been ? call me.. Tc</Text>
                  </ImageBackground>
                  </View>
                 
                  <Text style={{position:'absolute',left:40,top:83,color:Colors.LightText}}>Tues | 12:Pm</Text>

                 
              </View>



              <View style={{justifyContent:'flex-end'}}>
                 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end',marginTop:40}}>

                  <ImageBackground source={require('../../Images/car.jpg')} style={{width:250,justifyContent:'center',alignItems:'center',height:150}} imageStyle={{borderRadius:10}} >

                      {/* <Text style={{marginLeft:20,fontSize:16}}>Hi there,...how are you.. Where you've been ? call me.. Tc</Text> */}
                  </ImageBackground>
                  <Image source={require('../../Images/3.jpg')} style={{width:20,margin:10,height:20,borderRadius:10}} />
                  </View>
                 
                  <Text style={{position:'absolute',right:40,top:200,color:Colors.LightText}}>Tues | 12:Pm</Text>

                 
              </View>
              <Image source={require('../../Images/bottom.jpg')} style={{width:'100%',position:'absolute',bottom:10,resizeMode:'contain'}}/>
            </View>
        )
    }
}

export default Chat
