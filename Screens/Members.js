import React, { Component } from 'react'
import { Text, View,FlatList,Image,TouchableOpacity,StatusBar} from 'react-native'
import {Colors} from './Comon/colors'
import {Left,Right,Body} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
// import { TouchableOpacity } from 'react-native-gesture-handler'

export class Memeber extends Component {
    ProgramsList=[
        {
            name:'Mitchell Henry',
            picture:require('../Images/1.jpg'),
        },   {
            name:'Josia Maran Josp',
            picture:require('../Images/user2.png'),
        },
        {
            name:'Ricord Jospher Henry',
            picture:require('../Images/3.jpg'),
        },
        {
            name:'Cameron Foz Josp',
            picture:require('../Images/user4.jpg'),
        },
        {
            name:'Josia Maran Josp',
            picture:require('../Images/2.jpg'),
        },
        {
            name:'Ricord Josp Henry',
            picture:require('../Images/user3.png'),
        },
        {
            name:'Cameron Foz Henry',
            picture:require('../Images/user1.png'),
        },
    ]
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <StatusBar hidden={true} />
             <View style={{width:'100%',flexDirection:'row',height:'8%',elevation:1,backgroundColor:'white'}}>
            <Left style={{flexDirection:'row',marginLeft:10}}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()} >
                <Icon name='arrowleft' size={20} style={{paddingTop:5}} />

                </TouchableOpacity>
                <Text style={{fontSize:18,marginLeft:15,color:Colors.HEADING,fontFamily:'Avenir-Black'}}>
                    Members
                </Text>
                <View style={{flexDirection:'row',paddingTop:5}}>
                <Text style={{fontSize:16,marginLeft:15,color:Colors.LightText}}>
                    total
                </Text>
                <Text style={{fontSize:14,marginTop:3 ,marginLeft:5,color:Colors.HEADING,fontWeight:'bold'}}>
                    10
                </Text>
                </View>
                
            </Left>
            <Right style={{marginRight:10}}>
                {/* <Icon name={this.props.Right} size={20} color={Colors.BLUE} /> */}
            </Right>
              </View>
          
              <FlatList
          data={this.ProgramsList}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={{flexDirection:'row',width:'100%',margin:3,height:60,borderRadius:10,backgroundColor:'white',alignSelf:'center'}}>
              <Left style={{flexDirection:'row',marginLeft:10,alignItems:'center'}}>
                  <Image source={item.picture} style={{width:40,marginRight:5,height:40,borderRadius:5}} />
                  <View style={{marginLeft:5}}>
                  <Text style={{fontFamily:'Avenir-Black',letterSpacing:0.4,lineHeight:22,letterSpacing:0.4,marginLeft:10,fontSize:16,color:Colors.HEADING}} numberOfLines={1}>{item.name}</Text>
                  </View>
              </Left>
          </View>
          }
          keyExtractor={item => item.email}
        />
            </View>
        )
    }
}

export default Memeber
