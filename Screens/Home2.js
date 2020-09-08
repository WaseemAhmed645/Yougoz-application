import React, { Component } from 'react'
import { Text, View,Dimensions,FlatList,Image,AsyncStorage,StyleSheet,TouchableOpacity,StatusBar,ImageBackground,ScrollView } from 'react-native'
import {Colors} from './Comon/colors'
import {Left,Right,Body} from 'native-base'
import {useRoute,useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'
import Swiper from 'react-native-swiper'

import ProgressCircle from 'react-native-progress-circle'
// import styles from '../src/styles.css';
const name=false;

const Home2 = ({navigation}) => {
    // const {navigsate} = useNavigation()
   const Data=[
        {
            name:'Mitchell Henry',
            subititle:'has withdraw',
            picture:require('../Images/1.jpg'),
            ammount:'-$20.000'
        },   {
            name:'Josia Maran',
            subititle:'has withdraw',
            picture:require('../Images/2.jpg'),
            ammount:'-$20.000'
        },
        {
            name:'Ricord Jospher',
            subititle:'has withdraw',
            picture:require('../Images/3.jpg'),
            ammount:'-$20.000'
        },
        {
            name:'Cameron Foz',
            subititle:'has withdraw',
            picture:require('../Images/4.jpg'),
            ammount:'-$20.000'
        },
    ]
    // const {params} = useRoute();
    // const {name} = params;

        // console.log("Here check home",name)
        return (
            <View style={{flex:1,backgroundColor:Colors.BACKGROUND}}>
                <StatusBar hidden={true}  />
                <ImageBackground source={require('../Images/rectangle.png')} style={{width:'100%',height:'60%'}} imageStyle={{resizeMode:'stretch'}} >
                <Image source={require('../Images/InerOval.png')} style={{position:'absolute',right:0,top:0}}/>
                    <View style={{flexDirection:'row',width:'90%',alignSelf:'center',paddingTop:30}}>
                        <Left>
                        <Text style={{color:'white',lineHeight:20,fontSize:16,fontFamily:'Avenir-Heavy'}}>
                            Your Programs
                        </Text>
                        </Left>
                        <Right>
                            <TouchableOpacity onPress={()=>navigation.navigate('MessageNotification')}>
                            <Image source={require("../Images/comment.png")}style={{width:20,height:20}} />
</TouchableOpacity>
                        </Right>
                   </View>
                </ImageBackground>
        
        <View style={{width:'85%',alignSelf:'center',elevation:5,position:'absolute',top:'10%',height:300,borderRadius:20,backgroundColor:'white'}}>
        
        <Swiper style={styles.wrapper}dotStyle={{top:15}} activeDotStyle={{top:15}} showsButtons={false} autoplay>
        <View style={styles.slide1}>
      
 {name?<View>
     <View style={{flexDirection:'row',width:'90%',alignSelf:'center',paddingTop:10}}>
     <Left style={{flexDirection:'row'}}>
     <Text style={{color:Colors.LightText,fontSize:16,marginRight:5}}>
         for
     </Text>
     <Text style={{color:Colors.HEADING,fontSize:16}}>
         House Renovation
     </Text>
     </Left>
     <Right>
    <Text style={{color:Colors.BLUE}}>View Details</Text>
     </Right>
</View>
<View style={{alignSelf:'center',marginTop:15}}>
{/* <CircularProgressbar percentage={60} /> */}
<ProgressCircle
percent={60}
radius={110}
borderWidth={9}
color="#3399FF"
shadowColor="#999"
bgColor="#fff"
>
<Icon name='creditcard' size={20} color={Colors.BLUE} />
<Text style={{fontSize:14,color:Colors.LightText,fontWeight:'bold',marginTop:10}}>you have in escrow</Text>
<Text style={{fontSize:22,fontWeight:'bold',color:Colors.HEADING,marginTop:10,marginBottom:10}}>$10,000</Text>
<Text style={{color:Colors.LightText}}>of $20,000</Text>
<Text style={{color:'#EE5A55',marginTop:10}}>$2000/month</Text>
</ProgressCircle>
</View>
</View>
:<View style={{alignSelf:'center',width:'100%',marginBottom:50,borderTopLeftRadius:20,borderTopRightRadius:20}}>
    <Text style={{fontSize:24,lineHeight:33,fontFamily:'Avenir-Black',letterSpacing:0.62,fontStyle:'normal',color:Colors.HEADING,marginLeft:20,marginTop:40}}>Welcome to Fuboot,</Text>
<Text style={{fontSize:16,fontWeight:'normal',lineHeight:25,marginTop:18,fontFamily:'Avenir-Heavy',fontStyle:'normal',width:'90%',marginLeft:20,color:Colors.HEADING}}>Let's get started by giving your program a name</Text>
<Text style={{fontSize:16,fontWeight:'normal',lineHeight:25,marginTop:20,width:'90%',fontFamily:'Avenir-Heavy',fontStyle:'normal',marginLeft:20,color:Colors.HEADING}}>We just need a few details to set
up your program.</Text>
<TouchableOpacity style={{width:'90%',height:45,justifyContent:'center',alignSelf:'center',alignItems:'center',marginTop:30,backgroundColor:Colors.BLUE,borderRadius:5}}
onPress={()=>navigation.navigate('MakeProgram')}
>
         <Text style={{fontSize:14,color:'white',fontFamily:'Avenir-Heavy'}}>Make A Program</Text>
       </TouchableOpacity>

</View>
 }

        </View>

</Swiper>
           
                
                </View>
                <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                

                <View style={{width:'100%',height:'40%',marginTop:'2%',backgroundColor: Colors.BACKGROUND}}>
            <View style={{width:'100%',height:50,backgroundColor:Colors.BACKGROUND,marginTop:5,flexDirection:'row',justifyContent:'space-evenly'}}>
            <TouchableOpacity style={{flexDirection:'row',width:'40%',height:'90%',backgroundColor:name?Colors.BLUE:'#E5E5E5',borderRadius:10}}
            onPress={()=>navigation.navigate('Funds')}
            >
                <Left style={{marginLeft:10}}>
                    <Image source={require('../Images/fund.png')} style={{width:20,marginTop:2,height:20}} />
                    {/* <Icon name='home' color='white' /> */}
                </Left>
            
                <Text style={{fontSize:14,color:'white',marginTop:'8%'}}>See Funds</Text>
            
                <Right /> 
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row',width:'40%',height:'90%',backgroundColor:name?Colors.BLUE:'#E5E5E5',borderRadius:10}}
               onPress={()=>navigation.navigate('Withdraw')}
            >
                <Left style={{marginLeft:10}}>
                    {/* <Image source={require('../Images/fund.png')} style={{width:40,height:40}} /> */}
                    <Icon name='user' size={20} color='white' />
                </Left>
            
                <Text style={{fontSize:14,color:'white',marginTop:'8%'}}>Withdraw List</Text>
            
                <Right />
            </TouchableOpacity>

            </View>
            <Text style={{margin:10,fontFamily:'Avenir-Heavy',color:Colors.HEADING,fontSize:20}}>Transactions</Text>

            {name?<View>
            <View style={{width:'100%',height:40,backgroundColor:Colors.BACKGROUND,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
            <TouchableOpacity style={{width:80,height:25,backgroundColor:'transparent',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'grey'}}>Day</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:80,height:25,backgroundColor:'transparent',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'grey'}}>Week</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:80,height:25,backgroundColor:'#DFE7F5',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:Colors.BLUE,fontWeight:'bold'}}>Month</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:80,height:25,backgroundColor:'transparent',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'grey'}}>Year</Text>
            </TouchableOpacity>
            </View>
            <View style={{flex:1}}>

            <FlatList
          data={Data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={{flexDirection:'row',width:'90%',margin:8,height:60,borderRadius:10,backgroundColor:'white',alignSelf:'center'}}>
              <Left style={{flexDirection:'row',marginLeft:10}}>
                  <Image source={item.picture} style={{width:45,marginRight:5,height:45,borderRadius:5}} />
                  <View style={{marginLeft:5}}>
                  <Text style={{fontSize:16,fontWeight:'bold',color:Colors.HEADING}} numberOfLines={1}>{item.name}</Text>
            <Text style={{color:Colors.LightText}}>{item.subititle}</Text>
                  </View>
              </Left>
              <Body>

              </Body>
              <Right style={{marginRight:10}}>
                  <Text style={{color:'#EE5A55',fontSize:16,fontWeight:'900'}}>{item.ammount}</Text>
              </Right>
        
          </View>
          }
          keyExtractor={item => item.email}
        />
            </View>

                
            </View>:<View><Text style={{fontSize:18,margin:20,color:Colors.LightText}}>None</Text></View>}
          
                </View>
                </ScrollView>
            </View>
        )
    
}
const styles = StyleSheet.create({
    wrapper: {
        borderBottomLeftRadius:30,borderBottomRightRadius:30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,

    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
        borderBottomLeftRadius:30,borderBottomRightRadius:30,
      alignItems: 'center',
      backgroundColor: 'white'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
        borderBottomLeftRadius:30,borderBottomRightRadius:30,
        alignItems: 'center',
      backgroundColor: 'white'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius:30,
        borderBottomLeftRadius:30,borderBottomRightRadius:30,
        borderTopRightRadius:30,
      backgroundColor: 'white'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })
export default Home2
