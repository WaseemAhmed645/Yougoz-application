import React, { Component } from 'react'
import { Text, View,Dimensions,FlatList,Image,TouchableOpacity,ScrollView,StatusBar } from 'react-native'
import {Colors} from './Comon/colors'
import {Left,Right,Body} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import Header from './Comon/Header'
import ProgressBarAnimated from 'react-native-progress-bar-animated';

export class Programs extends Component {
    state = {
        progress: 70,
        progressWithOnComplete: 0,
        progressCustomized: 0,
      }
     
      increase = (key, value) => {
        this.setState({
          [key]: this.state[key] + value,
        });
      }
      ProgramsList=[
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
     
    Data=[
        {
            name:'Mitchell Henry',
            picture:require('./../Images/user1.png'),
          
        },   {
            name:'Josia Maran',
            picture:require('./../Images/user2.png'),
          
        },
        {
            name:'Ricord Jospher',
            picture:require('./../Images/user3.png'),
          
        },
        {
            name:'Cameron Foz',
            picture:require('./../Images/user4.jpg'),
          
        },
    ]
    render() {
        const barWidth = Dimensions.get('screen').width - 30;
    const progressCustomStyles = {
      backgroundColor: '#4DF1A1',
      borderRadius:2,
      height:5,
      borderWidth:0.2
    };
 
        return (
            <View style={{flex:1,backgroundColor:Colors.BACKGROUND}}>
                <StatusBar hidden={true} />
                <ScrollView showsVerticalScrollIndicator={false}>
             <View style={{width:'100%',flexDirection:'row',height:'7%',elevation:1,backgroundColor:Colors.BACKGROUND}}>
            <Left style={{flexDirection:'row',marginLeft:10}}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                <Icon name='arrowleft' size={24} style={{paddingTop:2}} />
                </TouchableOpacity>
                <Text style={{fontSize:18,marginLeft:15,color:Colors.HEADING,fontFamily:'Avenir-Black',letterSpacing:0.24}}>
                My Programs
                </Text>
            </Left>
            <Right style={{marginRight:10}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditList')}>
                <Image source={require('../Images/Shape.png')} style={{width:20,height:20}} />

                </TouchableOpacity>
            </Right>
              </View>
            <View style={{marginLeft:20,marginTop:30}}>
                <Text style={{fontSize:28,color:Colors.HEADING,letterSpacing:0.4,fontFamily:'Avenir-Black'}}>House Renovation</Text>
                <Text style={{color:'#77869E',lineHeight:22,top:3,letterSpacing:0.1,fontWeight:'normal',fontSize:15,fontFamily:'Avenir-Heavy'}}>Joe wants $20,000 for a home improvement project</Text>
            </View>
            <View style={{width:'90%',alignSelf:'center',marginTop:30,flexDirection:'row',justifyContent:'space-around'}}>
            <View style={{width:'45%'}}>
                    <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.27}}>In escrow</Text>
                    <Text style={{marginTop:5,fontSize:24,color:Colors.HEADING,fontFamily:'Avenir-Black'}}>$12,400</Text>
                </View>
                <View style={{width:'45%'}}>
                <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.27}}>Total</Text>
                    <Text style={{marginTop:5,fontSize:24,color:Colors.HEADING,fontFamily:'Avenir-Black'}}>$20,400</Text>
                </View>
            </View>
            <View>
                <View style={{width:'90%',alignSelf:'center',flexDirection:'row',marginTop:20}}>
                    
                      <Text style={{fontSize:12,letterSpacing:0.27,lineHeight:18,fontFamily:'Avenir-Black',color:Colors.HEADING}}>Remaining ammount for this month </Text>
                    
                    
                        <Text style={{color:Colors.HEADING,fontFamily:'Avenir-Black',lineHeight:18,marginLeft:60,paddingBottom:5}}>%38</Text> 
                                    </View>
                <View style={{marginLeft:15,marginTop:5}}>
                <ProgressBarAnimated
            {...progressCustomStyles}
            width={barWidth}
            value={this.state.progress}
            backgroundColorOnComplete="#6CC644"
          />
                </View>
           
            </View>
            <View>
                <View style={{flexDirection:'row',marginTop:20}}>
                <Left style={{marginLeft:10}}>
                      <Text style={{fontSize:20,fontFamily:'Avenir-Black',color:Colors.HEADING}}>Members (10)</Text>
                    </Left>
                    <Right style={{marginRight:10}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Members')}>
                        <Text style={{color:Colors.BLUE,fontFamily:'Avenir-Heavy'}}>See All</Text> 
                        </TouchableOpacity>
                    </Right>
                </View>
                    <View style={{width:'100%',height:130,flexDirection:'row',backgroundColor:'trasnaprent',marginTop:10}}>
                    <View style={{backgroundColor:'white',margin:5,width:100,height:120,borderRadius:5,elevation:3,justifyContent:'center',alignItems:'center'}}>
                {/* <Icon name='pluscircleo' style={{color:Colors.BLUE}} size={22} />
                 */}
                <Image source={require('../Images/plus.png')} style={{width:22,height:22}} />
                <Text style={{fontFamily:'Avenir-Heavy',color:Colors.LightText,lineHeight:18,marginTop:10,fontSize:12}}>Add new</Text>
                <Text style={{fontFamily:'Avenir-Heavy',color:Colors.LightText,lineHeight:18,marginTop:2,fontSize:12}}>contact</Text>
                    
                    </View>
                    <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
          data={this.Data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={{backgroundColor:'white',margin:5,width:100,height:120,borderRadius:5,elevation:3,justifyContent:'center',alignItems:'center'}}>
               <Image source={item.picture} style={{width:50,height:50,borderRadius:10,resizeMode:'cover'}} />
                <Text style={{color:Colors.LightText,lineHeight:18,fontFamily:'Avenir-Heavy',marginTop:5,fontSize:12}}>{item.name}</Text>
                <Text style={{color:Colors.LightText,lineHeight:18,fontFamily:'Avenir-Heavy',marginTop:0,fontSize:12}}>Morison</Text>

                    </View>
          }
          keyExtractor={item => item.email}
        />     
                </View>
            </View>
            <Text style={{margin:10,fontFamily:'Avenir-Black',marginTop:10,color:Colors.HEADING,fontSize:20}}>Transactions</Text>
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
           
            <View  style={{flex:1,height:380}}>
            <FlatList
          data={this.ProgramsList}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={{flexDirection:'row',width:'90%',margin:5,height:60,borderRadius:10,backgroundColor:'white',alignSelf:'center'}}>
              <Left style={{flexDirection:'row',marginLeft:10}}>
                  <Image source={item.picture} style={{width:45,marginRight:5,height:45,borderRadius:5}} />
                  <View style={{marginLeft:5}}>
                  <Text style={{fontSize:16,color:Colors.HEADING,fontFamily:'Avenir-Heavy'}} numberOfLines={1}>{item.name}</Text>
            <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy'}}>{item.subititle}</Text>
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
        </ScrollView>
            </View>
        )
    }
}

export default Programs
