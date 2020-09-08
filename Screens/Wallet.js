import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,Image,ScrollView,FlatList,StatusBar} from 'react-native'
import {Left,Right,Body} from 'native-base'
import {Colors} from '../Screens/Comon/colors'
import Icon from 'react-native-vector-icons/AntDesign'

export class Wallet extends Component {
    Data=[
        {
            name:'Add to wallet',
            subititle:'for james school funds',
            // picture:require('../Images/1.jpg'),
            type:'arrowup',
            color:'green',
            background: 'rgba(41, 191, 118, 0.1)',
            ammount:'+ $20.000'
        },
        {
            name:'Withdraw from wallet',
            subititle:'for cash funds',
            // picture:require('../Images/1.jpg'),
            background: 'rgba(242, 71, 80, 0.1)',
            type:'arrowdown',
            color:'red',
            ammount:'- $8.000'
        },
        {
            name:'Add to wallet',
            subititle:'for james school funds',
            // picture:require('../Images/1.jpg'),
            type:'arrowup',
            color:'green',
            background: 'rgba(41, 191, 118, 0.1)',
            ammount:'+ $10.000'
        }
    ]
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <StatusBar hidden={true} />
                 <View style={{width:'100%',flexDirection:'row',height:'8%',elevation:1,backgroundColor:'white'}}>
            <Left style={{flexDirection:'row',marginLeft:10}}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
               
               <Icon name='arrowleft' size={20} style={{paddingTop:2}} />
   
                  </TouchableOpacity>
                  
                <Text style={{fontSize:18,marginLeft:15,color:Colors.HEADING,fontFamily:'Avenir-Black'}}>
                Wallet
                </Text>
                <Text style={{fontSize:16,marginLeft:5,marginTop:5,color:Colors.LightText}}>
                for
                </Text>
                <Text style={{fontSize:14,marginLeft:5,marginTop:5,color:Colors.HEADING,fontFamily:'Avenir-Black'}}>
                Home Fund
                </Text>
            </Left>
            <Right style={{marginRight:10}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Addnewcard')} >
                <Image source={require('../Images/addcard.png')} style={{width:25,height:25,resizeMode:"contain"}} />

                </TouchableOpacity>
            </Right>
              </View>
              <View style={{flexDirection:'row',width:'100%',margin:15,height:160}}>

<ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Image source={require('../Images/card3.png')} style={{width:220,margin:5,height:160,resizeMode:"contain"}} />
                  <Image source={require('../Images/card2.jpg')} style={{marginTop:5,width:220,height:160,resizeMode:"contain"}} />
                  <Image source={require('../Images/card1.jpg')} style={{width:220,marginTop:5,marginRight:20,height:160,resizeMode:"contain"}} /> 
            
</ScrollView>
</View>
<View style={{flexDirection:'row'}}>
    <Left style={{marginLeft:20}}>
    <View style={{width:'60%'}}>
                    <Text style={{color:Colors.LightText,lineHeight:18,fontFamily:'Avenir-Heavy',letterSpacing:0.27}}>In wallet</Text>
                    <Text style={{marginTop:0,fontSize:24,color:Colors.HEADING,fontFamily:'Avenir-Black'}}>$12,400</Text>
                </View>
    </Left>
    <Right style={{marginRight:20}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('CardWithdraw')}>
        <Text style={{color:Colors.BLUE,fontFamily:'Avenir-Black',marginBottom:35}}>Withdraw</Text>

        </TouchableOpacity>
    </Right>
</View>
<View style={{width:'100%',marginTop:20,justifyContent:'space-between',alignSelf:'center',flexDirection:'row'}}>
    <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
        <View style={{justifyContent:'center',alignItems:'center',width:48,height:48,borderRadius:10,backgroundColor: 'rgba(41, 191, 118, 0.1)'}}>
                <Icon name='arrowup' size={20} color='#1BC773'/>
        </View>
        <View style={{marginLeft:10}}>
            <Text style={{color:Colors.LightText,fontWeight:'bold'}}>Received</Text>
            <Text style={{fontSize:16,fontFamily:'Avenir-Black'}}>$3,132</Text>
        </View>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',marginRight:70}}>
        <View style={{justifyContent:'center',alignItems:'center',width:48,height:48,borderRadius:10,backgroundColor: 'rgba(242, 71, 80, 0.1)'}}>
                <Icon name='arrowup' size={20} color='#F24750'/>
        </View>
        <View style={{marginLeft:10}}>
            <Text style={{color:Colors.LightText,fontWeight:'bold'}}>Paid</Text>
            <Text style={{fontSize:16,fontFamily:'Avenir-Black'}}>$1,632</Text>
        </View>
    </View>
</View>
<Text style={{margin:10,marginTop:20,fontFamily:'Avenir-Black',color:Colors.HEADING,fontSize:20}}>Transactions</Text>
            <View style={{width:'100%',height:35,backgroundColor:'white',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
            <TouchableOpacity style={{width:80,height:25,backgroundColor:'transparent',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white'}}>Day</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:80,height:25,backgroundColor:'transparent',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'grey'}}>Week</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:80,height:25,backgroundColor:'#DFE7F5',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:Colors.BLUE,fontWeight:'bold'}}>Month</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:80,height:25,backgroundColor:'transparent',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white'}}>Year</Text>
            </TouchableOpacity>
            </View>
            <View style={{flex:1}}>

<FlatList
data={this.Data}
showsVerticalScrollIndicator={false}
renderItem={({item}) =>
<View style={{flexDirection:'row',width:'90%',margin:8,height:60,borderRadius:10,backgroundColor:'white',alignSelf:'center'}}>
  <Left style={{flexDirection:'row',marginLeft:10}}>
  <View style={{flexDirection:'row',alignItems:'center'}}>
        <View style={{justifyContent:'center',alignItems:'center',width:45,height:45,borderRadius:10,backgroundColor:item.background}}>
                <Icon name={item.type} size={20} color={item.color}/>
        </View>
    </View>
      <View style={{marginLeft:15,marginTop:5}}>
      <Text style={{fontSize:16,fontFamily:'Avenir-Black',color:Colors.HEADING}} numberOfLines={1}>{item.name}</Text>
<Text style={{color:Colors.LightText}}>{item.subititle}</Text>
      </View>
  </Left>
 
  <Right style={{marginRight:10}}>
      <Text style={{color:'#EE5A55',fontSize:16,fontWeight:'900'}}>{item.ammount}</Text>
  </Right>

</View>
}
keyExtractor={item => item.email}
/>
</View>
            </View>
        )
    }
}

export default Wallet
