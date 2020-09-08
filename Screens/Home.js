import React, { Component } from 'react'
import { Text, View,Dimensions,FlatList,StyleSheet,Image,AsyncStorage,TouchableOpacity,StatusBar,ImageBackground,ScrollView } from 'react-native'
import {Colors} from './Comon/colors'
import {Left,Right,Body} from 'native-base'
import {useRoute,useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'
import Swiper from 'react-native-swiper'
import ProgressCircle from 'react-native-progress-circle'
// import styles from '../src/styles.css';
const name=true

const Home = ({navigation}) => {
    const {navigate} = useNavigation()
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

    //     console.log("Here check home",name)
        return (
            <View style={{flex:1,backgroundColor:Colors.BACKGROUND}}>
                <StatusBar hidden={true} />
                <ImageBackground source={require('../Images/rectangle.png')} style={{width:'100%',height:'60%'}} imageStyle={{resizeMode:'stretch'}} >
                <Image source={require('../Images/InerOval.png')} style={{position:'absolute',right:0,top:0}}/>
                  
                    <View style={{flexDirection:'row',width:'90%',alignSelf:'center',paddingTop:25}}>
                        <Left>
                        <Text style={{color:'white',fontSize:18,letterSpacing:0.39,fontFamily:'Avenir-Heavy'}}>
                            Your Programs
                        </Text>
                        </Left>
                        <Right>
                            <TouchableOpacity onPress={()=>navigate('MessageNotification')}>
                       <Image source={require("../Images/comment.png")}style={{width:20,height:20}} />
                        {/* <Icon name='wechat' color='white' size={24} /> */}
                            </TouchableOpacity>
                        </Right>
                   </View>
                </ImageBackground>
                <View style={{width:'85%',alignSelf:'center',elevation:5,position:'absolute',top:'12%',height:290,borderRadius:20,backgroundColor:'white'}}>
                <Swiper style={styles.wrapper} showsButtons={false} autoplay activeDotStyle={{width:25,height:6}} dotStyle={{width:25,height:6}}>
        <View style={styles.slide1}>
      
 {name?<View>
     <View style={{flexDirection:'row',width:'90%',alignSelf:'center',marginBottom:10}}>
     <Left style={{flexDirection:'row'}}>
     <Text style={{color:Colors.LightText,fontSize:13,marginRight:5,marginTop:0}}>
         for
     </Text>
     <Text style={{color:Colors.HEADING,width:200,fontSize:13,fontFamily:'Avenir-Black'}}>
         House Renovation
     </Text>
     </Left>
     <Right>
    <Text style={{color:Colors.BLUE,fontFamily:'Avenir-Black',fontSize:13}}>View Details</Text>
     </Right>
</View>
<View style={{alignSelf:'center',marginTop:0,marginBottom:30}}>
{/* <CircularProgressbar percentage={60} /> */}
<ProgressCircle
percent={60}
radius={100}
borderWidth={11}
color="#F24750"
shadowColor="#999"
bgColor="#fff"
>
<Image source={require('../Images/card.png')} style={{width:30,marginTop:5,resizeMode:'contain',height:25}} />

<Text style={{fontSize:13,color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.27,marginTop:8}}>you have in escrow</Text>
<Text style={{fontSize:28,fontFamily:'Avenir-Black',lineHeight:40,color:Colors.HEADING,marginTop:5,marginBottom:5}}>$10,000</Text>

<Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.111,lineHeight:15}}>of $20,000</Text>

<Text style={{color:'#EE5A55',marginTop:8,fontFamily:'Avenir-Heavy',letterSpacing:0.111,lineHeight:18}}> $2000/month</Text>
</ProgressCircle>
</View>
</View>
:<View style={{alignSelf:'center',width:'100%',marginBottom:50,borderTopLeftRadius:20,borderTopRightRadius:20}}>
    <Text style={{fontSize:30,fontFamily:'Avenir-Heavy',fontStyle:'normal',color:Colors.HEADING,marginLeft:20,marginTop:20}}>Welcome to Fuboot,</Text>
<Text style={{fontSize:18,fontWeight:'normal',marginTop:18,fontFamily:'Avenir',fontStyle:'normal',width:'90%',marginLeft:20,color:Colors.HEADING}}>Let's get started by giving your name program</Text>
<Text style={{fontSize:18,fontWeight:'normal',marginTop:20,width:'90%',fontFamily:'Avenir',fontStyle:'normal',marginLeft:20,color:Colors.HEADING}}>Just need few details and we will set up work program for you.</Text>
<TouchableOpacity style={{width:'90%',height:45,justifyContent:'center',alignSelf:'center',alignItems:'center',marginTop:30,backgroundColor:Colors.BLUE,borderRadius:5}}
onPress={()=>navigate('MakeProgram')}
>
         <Text style={{fontSize:16,color:'white'}}>Make A Program</Text>
       </TouchableOpacity>

</View>
 }

        </View>
        <View style={styles.slide2}>
      
      {name?<View>
          <View style={{flexDirection:'row',width:'90%',alignSelf:'center',marginBottom:10}}>
          <Left style={{flexDirection:'row'}}>
          <Text style={{color:Colors.LightText,fontSize:13,marginRight:5,marginTop:0}}>
              for
          </Text>
          <Text style={{color:Colors.HEADING,width:200,fontSize:13,fontFamily:'Avenir-Black'}}>
              House Renovation
          </Text>
          </Left>
          <Right>
         <Text style={{color:Colors.BLUE,fontFamily:'Avenir-Black',fontSize:13}}>View Details</Text>
          </Right>
     </View>
     <View style={{alignSelf:'center',marginTop:0,marginBottom:30}}>
     {/* <CircularProgressbar percentage={60} /> */}
     <ProgressCircle
     percent={60}
     radius={100}
     borderWidth={11}
     color="#F24750"
     shadowColor="#999"
     bgColor="#fff"
     >
     <Image source={require('../Images/card.png')} style={{width:30,marginTop:5,resizeMode:'contain',height:25}} />
     
     <Text style={{fontSize:13,color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.27,marginTop:8}}>you have in escrow</Text>
     <Text style={{fontSize:28,fontFamily:'Avenir-Black',lineHeight:40,color:Colors.HEADING,marginTop:5,marginBottom:5}}>$10,000</Text>
     
     <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.111,lineHeight:15}}>of $20,000</Text>
     
     <Text style={{color:'#EE5A55',marginTop:8,fontFamily:'Avenir-Heavy',letterSpacing:0.111,lineHeight:18}}> $2000/month</Text>
     </ProgressCircle>
     </View>
     </View>
     :<View style={{alignSelf:'center',width:'100%',marginBottom:50,borderTopLeftRadius:20,borderTopRightRadius:20}}>
         <Text style={{fontSize:30,fontFamily:'Avenir-Heavy',fontStyle:'normal',color:Colors.HEADING,marginLeft:20,marginTop:20}}>Welcome to Fuboot,</Text>
     <Text style={{fontSize:18,fontWeight:'normal',marginTop:18,fontFamily:'Avenir',fontStyle:'normal',width:'90%',marginLeft:20,color:Colors.HEADING}}>Let's get started by giving your name program</Text>
     <Text style={{fontSize:18,fontWeight:'normal',marginTop:20,width:'90%',fontFamily:'Avenir',fontStyle:'normal',marginLeft:20,color:Colors.HEADING}}>Just need few details and we will set up work program for you.</Text>
     <TouchableOpacity style={{width:'90%',height:45,justifyContent:'center',alignSelf:'center',alignItems:'center',marginTop:30,backgroundColor:Colors.BLUE,borderRadius:5}}
     onPress={()=>navigate('MakeProgram')}
     >
              <Text style={{fontSize:16,color:'white'}}>Make A Program</Text>
            </TouchableOpacity>
     
     </View>
      }
     
             </View>
             <View style={styles.slide3}>
      
      {name?<View>
          <View style={{flexDirection:'row',width:'90%',alignSelf:'center',marginBottom:10}}>
          <Left style={{flexDirection:'row'}}>
          <Text style={{color:Colors.LightText,fontSize:13,marginRight:5,marginTop:0}}>
              for
          </Text>
          <Text style={{color:Colors.HEADING,width:200,fontSize:13,fontFamily:'Avenir-Black'}}>
              House Renovation
          </Text>
          </Left>
          <Right>
         <Text style={{color:Colors.BLUE,fontFamily:'Avenir-Black',fontSize:13}}>View Details</Text>
          </Right>
     </View>
     <View style={{alignSelf:'center',marginTop:0,marginBottom:30}}>
     {/* <CircularProgressbar percentage={60} /> */}
     <ProgressCircle
     percent={60}
     radius={100}
     borderWidth={11}
     color="#F24750"
     shadowColor="#999"
     bgColor="#fff"
     >
     <Image source={require('../Images/card.png')} style={{width:30,marginTop:5,resizeMode:'contain',height:25}} />
     
     <Text style={{fontSize:13,color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.27,marginTop:8}}>you have in escrow</Text>
     <Text style={{fontSize:28,fontFamily:'Avenir-Black',lineHeight:40,color:Colors.HEADING,marginTop:5,marginBottom:5}}>$10,000</Text>
     
     <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.111,lineHeight:15}}>of $20,000</Text>
     
     <Text style={{color:'#EE5A55',marginTop:8,fontFamily:'Avenir-Heavy',letterSpacing:0.111,lineHeight:18}}> $2000/month</Text>
     </ProgressCircle>
     </View>
     </View>
     :<View style={{alignSelf:'center',width:'100%',marginBottom:50,borderTopLeftRadius:20,borderTopRightRadius:20}}>
         <Text style={{fontSize:30,fontFamily:'Avenir-Heavy',fontStyle:'normal',color:Colors.HEADING,marginLeft:20,marginTop:20}}>Welcome to Fuboot,</Text>
     <Text style={{fontSize:18,fontWeight:'normal',marginTop:18,fontFamily:'Avenir',fontStyle:'normal',width:'90%',marginLeft:20,color:Colors.HEADING}}>Let's get started by giving your name program</Text>
     <Text style={{fontSize:18,fontWeight:'normal',marginTop:20,width:'90%',fontFamily:'Avenir',fontStyle:'normal',marginLeft:20,color:Colors.HEADING}}>Just need few details and we will set up work program for you.</Text>
     <TouchableOpacity style={{width:'90%',height:45,justifyContent:'center',alignSelf:'center',alignItems:'center',marginTop:30,backgroundColor:Colors.BLUE,borderRadius:5}}
     onPress={()=>navigate('MakeProgram')}
     >
              <Text style={{fontSize:16,color:'white'}}>Make A Program</Text>
            </TouchableOpacity>
     
     </View>
      }
     
             </View>
             
</Swiper>
                
                </View>
                <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                

                <View style={{width:'100%',height:'40%',marginTop:'5%',backgroundColor: Colors.BACKGROUND}}>
            <View style={{width:'100%',height:45,backgroundColor:Colors.BACKGROUND,marginTop:0,flexDirection:'row',justifyContent:'space-evenly'}}>
            <TouchableOpacity style={{flexDirection:'row',width:'40%',height:'90%',backgroundColor:name?Colors.BLUE:'#E5E5E5',borderRadius:10}}
            onPress={()=>navigate('Funds')}
            >
                <Left style={{marginLeft:10}}>
                    <Image source={require('../Images/Homesend.png')} style={{width:20,height:20}} />
                    {/* <Icon name='home' color='white' /> */}
                </Left>
            
                <Text style={{fontSize:14,color:'white',marginTop:'8%'}}>See Funds</Text>
            
                <Right /> 
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row',width:'40%',height:'90%',backgroundColor:name?Colors.BLUE:'#E5E5E5',borderRadius:10}}
               onPress={()=>navigate('Withdraw')}
            >
                <Left style={{marginLeft:10}}>
                    <Image source={require('../Images/HomeUser.png')} style={{width:20,height:20}} />
                    {/* <Icon name='user' size={20} color='white' /> */}
                </Left>
            
                <Text style={{fontSize:14,color:'white',marginTop:'8%'}}>Withdraw List</Text>
            
                <Right />
            </TouchableOpacity>

            </View>
            <Text style={{marginLeft:10,marginTop:10,fontFamily:'Avenir-Black',color:Colors.HEADING,fontSize:20}}>Transactions</Text>

            {name?<View>
            <View style={{width:'100%',height:40,backgroundColor:Colors.BACKGROUND,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
            <TouchableOpacity style={{width:80,height:25,backgroundColor:'transparent',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white'}}>Day</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:80,height:25,backgroundColor:'transparent',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'grey'}}>Week</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:80,height:25,backgroundColor:'#DFE7F5',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:Colors.BLUE,fontWeight:'bold'}}>Months</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:80,height:25,backgroundColor:'transparent',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white'}}>Year</Text>
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
                  <Text style={{fontSize:16,fontFamily:'Avenir-Black',width:150,letterSpacing:0.2,color:Colors.HEADING}}>{item.name}</Text>
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
    wrapper: { borderBottomRightRadius:30,borderBottomLeftRadius:30,marginBottom:20},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      alignItems: 'center',borderBottomRightRadius:30,borderBottomLeftRadius:30,
      backgroundColor: 'white'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      alignItems: 'center',borderBottomRightRadius:30,borderBottomLeftRadius:30,
      backgroundColor: 'white'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,borderBottomRightRadius:30,borderBottomLeftRadius:30,
      backgroundColor: 'white'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })
export default Home
