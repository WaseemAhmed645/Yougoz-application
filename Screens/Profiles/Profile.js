import React, { Component } from 'react'
import { Text, View,Image, ImageBackground,FlatList ,TouchableOpacity,ScrollView,StatusBar} from 'react-native'
import {Colors} from '../Comon/colors'
import Icon from 'react-native-vector-icons/AntDesign'
import Pen from 'react-native-vector-icons/Foundation'

import ProgressCircle from 'react-native-progress-circle'
import {Left,Right,Body} from 'native-base'
export class Profile extends Component {
    render() {
       
        return (
            <View style={{flex:1,backgroundColor:Colors.BACKGROUND}}>
                <StatusBar hidden={true} />
                <ImageBackground source={require('../../Images/rectangle.png')} style={{width:'100%',height:'55%'}} imageStyle={{resizeMode:'stretch'}} >
                    
                <Image source={require('../../Images/InerOval.png')} style={{position:'absolute',right:0,top:0}}/>
                    
                    <View style={{flexDirection:'row',width:'90%',alignSelf:'center',paddingTop:20}}>
                        <Left>
                        <Text style={{color:'white',fontSize:18,fontFamily:'Avenir-Heavy'}}>
                           Profiles
                        </Text>
                        </Left>
                        <Right>
                            {/* <Pen name='pencil' size={24} color='white' /> */}
                        <Image source={require('../../Images/Edit.png')}  />
                        </Right>
                   </View>
                </ImageBackground>
                <View style={{width:'85%',alignSelf:'center',elevation:5,position:'absolute',top:'10%',height:250,borderRadius:20,backgroundColor:'white'}}>
              <View style={{width:80,height:80,marginTop:20,elevation:5,alignSelf:'center',backgroundColor:'white',borderRadius:10}}>
              <Image source={require('../../Images/2.jpg')} imageStyle={{elevation:5}} style={{width:80,resizeMode:'cover',height:80,alignSelf:'center',borderRadius:10}} />
              </View>
             <View style={{alignSelf:'center',marginTop:10,alignItems:'center'}}>
                 <Text style={{fontFamily:'Avenir-Heavy',letterSpacing:0.4,fontSize:16,color:Colors.HEADING}}>John Doe</Text>
                 <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>jdoe@gmail.com</Text>
             </View>
             <Text style={{position:'absolute',fontFamily:'Avenir-Heavy',letterSpacing:0.4,bottom:30,color:Colors.LightText,alignSelf:'center'}}>Dad of 3 and making cool graphics</Text>
                
                </View>
         
         
         <ScrollView showsVerticalScrollIndicator={false}>

            <View style={{alignSelf:'center'}}>
                <Text style={{fontSize:16,color:Colors.HEADING,fontFamily:'Avenir-Heavy',letterSpacing:0.4,marginBottom:15}}>General</Text>
                <TouchableOpacity style={{width:'90%',height:60,flexDirection:'row',backgroundColor:'white',borderRadius:10}}
                onPress={()=>this.props.navigation.navigate('EditProfile')}
                >
                <Left style={{flexDirection:'row',marginLeft:10,alignItems:'center'}}>
                <View style={{justifyContent:'center',alignItems:'center',width:50,height:50,borderRadius:10,backgroundColor: '#DFE7F5'}}>
                <Icon name='setting' size={20} color='#0EAFE6'/>
        </View>
        <View style={{marginLeft:10}}>
            <Text style={{color:'black',fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Profile Settings</Text>
            <Text style={{fontSize:12,color:'grey',fontFamily:'Avenir-Heavy',letterSpacing:0.4,width:200}}>Update & notify your profile</Text>

        </View>
                </Left>
                <Right style={{marginRight:10}}>
                    <Icon name='right' size={16} color={Colors.LightText} />
                </Right>
                </TouchableOpacity>
            </View>

            <View style={{alignSelf:'center',marginTop:10,marginBottom:10}}>
        
                <TouchableOpacity style={{width:'90%',height:60,flexDirection:'row',backgroundColor:'white',borderRadius:10}}
                  onPress={()=>this.props.navigation.navigate('Privacy')}
                >
                <Left style={{flexDirection:'row',marginLeft:10,alignItems:'center'}}>
                <View style={{justifyContent:'center',alignItems:'center',width:50,height:50,borderRadius:10,backgroundColor: '#DFE7F5'}}>
                <Icon name='lock' size={20} color='#0EAFE6'/>
        </View>
        <View style={{marginLeft:10}}>
            <Text style={{color:'black',fontWeight:'bold',fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Privacy</Text>
            <Text style={{fontSize:12,color:'grey',fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Change your password</Text>

        </View>
                </Left>
                <Right style={{marginRight:10}}>
                    <Icon name='right' size={16} color={Colors.LightText} />
                </Right>
                </TouchableOpacity>
            </View>

            <View style={{alignSelf:'center'}}>
                <TouchableOpacity style={{width:'90%',height:60,flexDirection:'row',backgroundColor:'white',borderRadius:10}}
                  onPress={()=>this.props.navigation.navigate('Notifications')}
                >
                <Left style={{flexDirection:'row',marginLeft:10,alignItems:'center'}}>
                <View style={{justifyContent:'center',alignItems:'center',width:50,height:50,borderRadius:10,backgroundColor: '#DFE7F5'}}>
                <Icon name='bells' size={20} color='#0EAFE6'/>
        </View>
        <View style={{marginLeft:10}}>
            <Text style={{color:'black',fontWeight:'bold',fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Notification</Text>
            <Text style={{fontSize:12,color:'grey',fontFamily:'Avenir-Heavy',letterSpacing:0.4,width:200}}>Change notification settings</Text>

        </View>
                </Left>
                <Right style={{marginRight:10}}>
                    <Icon name='right' size={16} color={Colors.LightText} />
                </Right>
                </TouchableOpacity>
            </View>
           
            <View style={{alignSelf:'center',marginBottom:20}}>
                <Text style={{fontSize:16,color:Colors.HEADING,fontFamily:'Avenir-Heavy',letterSpacing:0.4,marginTop:10,marginBottom:15}}>Programs</Text>
                <TouchableOpacity style={{width:'90%',height:60,flexDirection:'row',backgroundColor:'white',borderRadius:10}}
                onPress={()=>this.props.navigation.navigate('MyPrograms')}
                
                >
                <Left style={{flexDirection:'row',marginLeft:10,alignItems:'center'}}>
                <View style={{justifyContent:'center',alignItems:'center',width:50,height:50,borderRadius:10,backgroundColor: '#DFE7F5'}}>
                <Icon name='piechart' size={20} color='#0EAFE6'/>
        </View>
        <View style={{marginLeft:10}}>
            <Text style={{color:'black',fontWeight:'bold',fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Show Programs</Text>
            <Text style={{fontSize:12,color:'grey',fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Edit , New Programs</Text>

        </View>
                </Left>
                <Right style={{marginRight:10}}>
                    <Icon name='right' size={16} color={Colors.LightText} />
                </Right>
                </TouchableOpacity>
            </View>


         </ScrollView>
           
            </View>
        )
    }
}

export default Profile
