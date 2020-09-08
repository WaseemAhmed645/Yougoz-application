import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,Image,ScrollView,StatusBar} from 'react-native'
import {Colors} from '../Comon/colors'
import {Left,Right,Body} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/EvilIcons'

export class EditProfile extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <StatusBar hidden={true} />
               <View style={{width:'100%',flexDirection:'row',height:'8%',elevation:1,backgroundColor:'white'}}>
            <Left style={{flexDirection:'row',marginLeft:20}}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
               
               <Icon name='arrowleft' size={20} style={{paddingTop:2}} />
   
                  </TouchableOpacity>
                  
                <Text style={{fontSize:18,marginLeft:15,color:Colors.HEADING,fontFamily:'Avenir-Black'}}>
                    Profile Settings
                </Text>
            </Left>
            <Right style={{marginRight:10}}>
                <Icon name={this.props.Right} size={20} color={Colors.BLUE} />
            </Right>
              </View>

              <View style={{borderBottomWidth:0.3,flexDirection:'row',alignItems:'center',borderColor:'#dedede',width:'100%',height:70,backgroundColor:'white'}}>
                    <View style={{width:50,height:50,marginLeft:20,borderRadius:25,bottom:5}}>
                        <Image source={require('../../Images/3.jpg')} style={{width:60,height:60,borderRadius:30}} />
                    </View>
                    <View style={{width:50,marginLeft:20,justifyContent:'center',marginTop:5,alignItems:'center',height:50,borderRadius:30,backgroundColor:'#dede'}}>
                        <Icon1 name='image' size={35} />
                    </View>
              </View>
              <ScrollView>
              <View style={{borderBottomWidth:0.3,flexDirection:'row',alignItems:'center',borderColor:'#dedede',width:'100%',height:60,backgroundColor:'white'}}>
                   <Left style={{marginLeft:20,flexDirection:'row'}}>
                <Text style={{fontSize:16,fontFamily:'Avenir-Heavy',letterSpacing:0.4,color:'black',fontWeight:"bold",width:80}}>Name</Text>
                <Text style={{marginLeft:30,fontFamily:'Avenir-Heavy',letterSpacing:0.4,fontSize:14,marginTop:1,color:Colors.LightText}}>John Doe</Text>
                   </Left>

              </View>
              <View style={{borderBottomWidth:0.3,flexDirection:'row',alignItems:'center',borderColor:'#dedede',width:'100%',height:60,backgroundColor:'white'}}>
                   <Left style={{marginLeft:20,flexDirection:'row'}}>
                <Text style={{fontSize:16,fontFamily:'Avenir-Heavy',letterSpacing:0.4,color:'black',fontWeight:"bold",width:80}}>Username</Text>
                <Text style={{marginLeft:30,fontFamily:'Avenir-Heavy',letterSpacing:0.4,fontSize:14,marginTop:1,color:Colors.LightText}}>@doe</Text>
                   </Left>

              </View>
              <View style={{borderBottomWidth:0.3,flexDirection:'row',alignItems:'center',borderColor:'#dedede',width:'100%',height:60,backgroundColor:'white'}}>
                   <Left style={{marginLeft:20,flexDirection:'row'}}>
                <Text style={{fontSize:16,fontFamily:'Avenir-Heavy',letterSpacing:0.4,color:'black',fontWeight:"bold",width:80}}>Gender</Text>
                <Text style={{marginLeft:30,fontFamily:'Avenir-Heavy',letterSpacing:0.4,fontSize:14,marginTop:1,color:Colors.LightText}}>Male</Text>
                   </Left>

              </View>
              <View style={{borderBottomWidth:0.3,flexDirection:'row',alignItems:'center',borderColor:'#dedede',width:'100%',height:60,backgroundColor:'white'}}>
                   <Left style={{marginLeft:20,flexDirection:'row'}}>
                <Text style={{fontSize:16,fontFamily:'Avenir-Heavy',letterSpacing:0.4,color:'black',fontWeight:"bold",width:80}}>Age</Text>
                <Text style={{marginLeft:30,fontFamily:'Avenir-Heavy',letterSpacing:0.4,fontSize:14,marginTop:1,color:Colors.LightText}}>32</Text>
                   </Left>

              </View>
              <View style={{borderBottomWidth:0.3,flexDirection:'row',alignItems:'center',borderColor:'#dedede',width:'100%',height:60,backgroundColor:'white'}}>
                   <Left style={{marginLeft:20,flexDirection:'row'}}>
                <Text style={{fontSize:16,fontFamily:'Avenir-Heavy',letterSpacing:0.4,color:'black',fontWeight:"bold",width:80}}>Phone</Text>
                <Text style={{marginLeft:30,fontFamily:'Avenir-Heavy',letterSpacing:0.4,fontSize:14,marginTop:1,color:Colors.LightText}}>+92032514635</Text>
                   </Left>

              </View>
              <View style={{borderBottomWidth:0.3,flexDirection:'row',alignItems:'center',borderColor:'#dedede',width:'100%',height:60,backgroundColor:'white'}}>
                   <Left style={{marginLeft:20,flexDirection:'row'}}>
                <Text style={{fontSize:16,fontFamily:'Avenir-Heavy',letterSpacing:0.4,color:'black',fontWeight:"bold",width:80}}>Email</Text>
                <Text style={{marginLeft:30,fontFamily:'Avenir-Heavy',letterSpacing:0.4,fontSize:14,marginTop:1,color:Colors.LightText}}>Jdoe@gmail.com</Text>
                   </Left>

              </View>
              <View style={{borderBottomWidth:0.3,flexDirection:'row',alignItems:'center',borderColor:'#dedede',width:'100%',height:60,backgroundColor:'white'}}>
                   <Left style={{marginLeft:20,flexDirection:'row'}}>
                <Text style={{fontSize:16,fontFamily:'Avenir-Heavy',letterSpacing:0.4,color:'black',fontWeight:"bold",width:80}}>Bio</Text>
                <Text style={{marginLeft:30,fontFamily:'Avenir-Heavy',letterSpacing:0.4,fontSize:14,marginTop:1,color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Dad of 3 and making graphics</Text>
                   </Left>

              </View>
              <TouchableOpacity style={{width:'90%',marginTop:40,alignSelf:'center',height:45,backgroundColor:'#0047CC',justifyContent:'center',alignItems:'center',borderRadius:5}}
                onPress={()=>this.props.navigation.navigate('Login')}
                >
                    <Text style={{color:'white',fontSize:16,fontFamily:'Avenir-Heavy'}}>Save</Text>
                    </TouchableOpacity>
              </ScrollView>
              

 
              
            </View>
        )
    }
}

export default EditProfile
