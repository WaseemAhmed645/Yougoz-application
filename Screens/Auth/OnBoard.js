import React, { Component } from 'react'
import { Text, View,ImageBackground,TouchableOpacity,Image,StyleSheet } from 'react-native'
import  {Colors} from '../Comon/colors'
// import SwiperFlatList from 'react-native-swiper-flatlist';
import Swiper from 'react-native-swiper'
export class OnBoard extends Component {
    render() {
        return (
          <View style={{flex:1}}>
            <View style={{width:'100%',height:20}}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} >
    <Text style={{position:'absolute',marginBottom:20,top:20,right:5,fontSize:16,width:40,color:Colors.LightText,marginRight:15}}>SKIP</Text>
    </TouchableOpacity>
    </View>
                      <ImageBackground source={require('../../Images/Homepage.png')} style={{width:'90%',marginLeft:30,alignSelf:'center',height:'100%'}} imageStyle={{resizeMode:'contain'}} >

    </ImageBackground>
<View style={{width:'100%',alignItems:'center',height:'30%',backgroundColor:'white',position:'absolute',bottom:0,borderTopLeftRadius:30,borderTopRightRadius:30}}>
<Swiper style={styles.wrapper} dotStyle={{bottom:60}} activeDotStyle={{bottom:60}} autoplay showsButtons={false}>
<View style={styles.slide1}>
          <View style={{justifyContent:"center",alignItems:'center',marginBottom:40}}>
          <Text style={{fontSize:18,fontFamily:'Avenir-Black',marginBottom:10,color:Colors.HEADING}}>Welcome to Fuboot</Text>
<Text style={{color:Colors.LightText}}>Donec facilities tortor ut augue lacinia, at</Text>
<Text style={{color:Colors.LightText,marginTop:2,marginBottom:10}}>viverra est semper</Text>
{/* <Image source={require('../../Images/swiper.jpg')} style={{marginBottom:20,resizeMode:'contain'}} /> */}
          </View>

<View style={{width:'100%',flexDirection:'row',justifyContent:'space-around'}}>
<TouchableOpacity style={{width:'45%',height:45,justifyContent:'center',backgroundColor:'#0047CC',alignItems:'center',borderWidth:0.5,borderColor:'#0047CC',borderRadius:5}}
onPress={()=>this.props.navigation.navigate('Login')}

>
                                    <Text style={{fontSize:14,color:'white'}}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'45%',height:45,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderWidth:0.5,borderColor:'#0047CC',borderRadius:5}}
onPress={()=>this.props.navigation.navigate('Signup')}
                    
                    >
                    <Text style={{fontSize:14,color:Colors.LightText}}>Sign Up</Text>
                    </TouchableOpacity>
</View>
        </View>
    
    
        <View style={styles.slide2}>
          <View style={{justifyContent:"center",alignItems:'center',marginBottom:40}}>
          <Text style={{fontSize:18,fontFamily:'Avenir-Black',marginBottom:10,color:Colors.HEADING}}>Have your personal bank</Text>
<Text style={{color:Colors.LightText}}>Donec facilities tortor ut augue lacinia, at</Text>
<Text style={{color:Colors.LightText,marginTop:2,marginBottom:10}}>viverra est semper</Text>
{/* <Image source={require('../../Images/swiper.jpg')} style={{marginBottom:20,resizeMode:'contain'}} /> */}
          </View>

<View style={{width:'100%',flexDirection:'row',justifyContent:'space-around'}}>
<TouchableOpacity style={{width:'45%',height:45,justifyContent:'center',backgroundColor:'#0047CC',alignItems:'center',borderWidth:0.5,borderColor:'#0047CC',borderRadius:5}}
onPress={()=>this.props.navigation.navigate('Login')}

>
                                    <Text style={{fontSize:14,color:'white'}}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'45%',height:45,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderWidth:0.5,borderColor:'#0047CC',borderRadius:5}}
onPress={()=>this.props.navigation.navigate('Signup')}
                    
                    >
                    <Text style={{fontSize:14,color:Colors.LightText}}>Sign Up</Text>
                    </TouchableOpacity>
</View>
        </View>
          
        <View style={styles.slide3}>
          <View style={{justifyContent:"center",alignItems:'center',marginBottom:40}}>
          <Text style={{fontSize:18,fontFamily:'Avenir-Black',marginBottom:10,color:Colors.HEADING}}>Welcome to Fuboot</Text>
<Text style={{color:Colors.LightText}}>Donec facilities tortor ut augue lacinia, at</Text>
<Text style={{color:Colors.LightText,marginTop:2,marginBottom:10}}>viverra est semper</Text>
{/* <Image source={require('../../Images/swiper.jpg')} style={{marginBottom:20,resizeMode:'contain'}} /> */}
          </View>

<View style={{width:'100%',flexDirection:'row',justifyContent:'space-around'}}>
<TouchableOpacity style={{width:'45%',height:45,justifyContent:'center',backgroundColor:'#0047CC',alignItems:'center',borderWidth:0.5,borderColor:'#0047CC',borderRadius:5}}
onPress={()=>this.props.navigation.navigate('Login')} >
                                    <Text style={{fontSize:14,color:'white'}}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'45%',height:45,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderWidth:0.5,borderColor:'#0047CC',borderRadius:5}}
onPress={()=>this.props.navigation.navigate('Signup')} >
                    <Text style={{fontSize:14,color:Colors.LightText}}>Sign Up</Text>
                    </TouchableOpacity>
        </View>
        </View>
      </Swiper>
</View>
</View>

       
         
 

        )
    }
}
const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      alignItems: 'center',
      backgroundColor: 'white'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      alignItems: 'center',
      backgroundColor: 'white'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      backgroundColor: 'white'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })
export default OnBoard
