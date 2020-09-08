import React, { Component } from 'react'
import { Text, View,Dimensions,FlatList,Image,TouchableOpacity,StatusBar,ScrollView } from 'react-native'
import {Colors} from './Comon/colors'
import {Left,Right,Body} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import Header from './Comon/Header'
import ProgressBarAnimated from 'react-native-progress-bar-animated';

class Funds extends Component {
    state = {
        progress: 80,
        progressWithOnComplete: 0,
        progressCustomized: 0,
      }
     
    //   increase = (key, value) => {
    //     this.setState({
    //       [key]: this.state[key] + value,
    //     });
    //   }
      Pending=[
        {
            name:'Mitchell Henry',
            subititle:'has withdraw',
            picture:require('../Images/user1.png'),
            ammount:'-$20.000'
        },   {
            name:'Josia Maran',
            subititle:'has withdraw',
            picture:require('../Images/user1.png'),
            ammount:'-$20.000'
        },
        {
            name:'Ricord Jospher',
            subititle:'has withdraw',
            picture:require('../Images/user3.png'),
            ammount:'-$20.000'
        },
        {
            name:'Cameron Foz',
            subititle:'has withdraw',
            picture:require('../Images/4.jpg'),
            ammount:'-$20.000'
        },
    ]
      Cleared=[
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
    render() {
        const barWidth = Dimensions.get('screen').width - 30;
    const progressCustomStyles = {
      backgroundColor: '#4DF1A1',
      borderRadius:2,
      height:5,
      borderWidth:0.2
    };
  
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
         <StatusBar hidden={true} />
                <ScrollView>


           <View style={{width:'100%',flexDirection:'row',height:'8%',elevation:1,marginBottom:10,backgroundColor:'white'}}>
            <Left style={{flexDirection:'row',marginLeft:10}}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                <Icon name='arrowleft' size={24} style={{paddingTop:5}} />

                </TouchableOpacity>
                <Text style={{fontSize:20,marginLeft:15,color:Colors.HEADING,fontFamily:'Avenir-Black',letterSpacing:0.4}}>
                    Funds
                </Text>
            </Left>
            <Right style={{marginRight:10}}>
                <Image source={require('../Images/Export.png')} style={{width:28,height:20}} />
                {/* <Icon name='export' size={20} color={Colors.BLUE} /> */}
            </Right>
              </View>
        
            <View style={{width:'90%',alignSelf:'center',marginTop:15,flexDirection:'row',justifyContent:'space-around'}}>
            <View style={{width:'45%'}}>
                    <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy'}}>In escrow</Text>
                    <Text style={{marginTop:5,fontSize:24,color:Colors.HEADING,fontFamily:'Avenir-Black',letterSpacing:0.42}}>$12,400</Text>
                </View>
                <View style={{width:'45%'}}>
                <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy'}}>Total</Text>
                    <Text style={{marginTop:5,fontSize:24,color:Colors.HEADING,fontFamily:'Avenir-Black',letterSpacing:0.42}}>$20,400</Text>
                </View>
            </View>
           
            <View>
                <View style={{width:'90%',alignSelf:'center',flexDirection:'row',marginTop:20}}>
                    <Left>
                    <Text style={{fontSize:12,width:250,letterSpacing:0.27,lineHeight:18,fontFamily:'Avenir-Black',color:Colors.HEADING}}>Remaining ammount for this month </Text>
                    </Left>
                    <Right>
                        <Text style={{color:Colors.HEADING,marginBottom:3,fontFamily:'Avenir-Black',letterSpacing:0.42}}>%38</Text> 
                    </Right>
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
            <View style={{marginLeft:15,marginTop:15}}>
            <Text style={{color:Colors.LightText,fontSize:13,lineHeight:18,marginTop:10,fontFamily:'Avenir-Heavy',letterSpacing:0.42}}>Your Contribution Till Month</Text>
                <Text style={{fontSize:24,marginTop:5,color:Colors.HEADING,fontFamily:'Avenir-Black',letterSpacing:0.42}}>$10,000</Text>
            </View>
            <View>
                <View style={{flexDirection:'row',marginTop:15}}>
                <Left style={{marginLeft:10}}>
                      <Text style={{fontSize:18,fontFamily:'Avenir-Black',letterSpacing:0.42,color:Colors.HEADING}}>Funds Cleared By</Text>
                    </Left>
                    <Right style={{marginRight:10}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Members')}>
                        {/* <Text style={{color:Colors.BLUE,fontFamily:'Avenir-Heavy',letterSpacing:0.42}}>See All</Text>  */}
                        </TouchableOpacity>
                    </Right>
                </View>
                    <View style={{width:'100%',height:130,flexDirection:'row',backgroundColor:'trasnaprent',marginTop:10}}>
                  
                    <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
          data={this.Cleared}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={{backgroundColor:'white',margin:5,width:100,height:120,borderRadius:5,elevation:4,justifyContent:'center',alignItems:'center'}}>
               <Image source={item.picture} style={{width:50,height:50,borderRadius:5,resizeMode:'cover'}} />
                <Text style={{color:Colors.LightText,marginTop:5,fontSize:12,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>{item.name}</Text>
                <Text style={{color:Colors.LightText,marginTop:0,fontSize:12,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Morison</Text>

                    </View>
          }
          keyExtractor={item => item.email}
        />     
                </View>
            </View>
            <View style={{flexDirection:'row',marginTop:20}}>
                <Left style={{marginLeft:10}}>
                      <Text style={{fontSize:18,width:300,fontFamily:'Avenir-Black',letterSpacing:0.42,color:Colors.HEADING}}>Pending for this month</Text>
                    </Left>
                    <Right style={{marginRight:10}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Members')}>
                        {/* <Text style={{color:Colors.BLUE,fontFamily:'Avenir-Heavy',letterSpacing:0.42}}>See All</Text>  */}
                        </TouchableOpacity>
                    </Right>
                </View>
                <View style={{width:'100%',height:130,marginBottom:50,flexDirection:'row',backgroundColor:'trasnaprent',marginTop:10}}>
                  
                  <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
        data={this.Cleared}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>
        <View style={{backgroundColor:'white',margin:5,width:100,height:120,borderRadius:5,elevation:4,justifyContent:'center',alignItems:'center'}}>
             <Image source={item.picture} style={{width:50,height:50,borderRadius:5,resizeMode:'cover'}} />
              <Text style={{color:Colors.LightText,marginTop:5,fontSize:12,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>{item.name}</Text>
              <Text style={{color:Colors.LightText,marginTop:0,fontSize:12,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Morison</Text>

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

export default Funds
