import React, { Component } from 'react'
import { Text, View,Dimensions,FlatList,Image,TouchableOpacity ,StatusBar} from 'react-native'
import {Colors} from './Comon/colors'
import {Left,Right,Body} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import Header from './Comon/Header'
import DraggableFlatList from 'react-native-draggable-flatlist'
import ProgressBarAnimated from 'react-native-progress-bar-animated';

  const WithDrawList=[
    {
        name:'Mitchell Henry',
        subititle:'has withdraw',
        picture:require('../Images/34.jpg'),
        ammount:'JUL - 20'
    },   {
        name:'Josia Maran',
        subititle:'has withdraw',
        picture:require('../Images/34.jpg'),
        ammount:'AUG - 20'
    },
    {
        name:'Ricord Jospher',
        subititle:'has withdraw',
        picture:require('../Images/user3.png'),
        ammount:'JUL - 20'
    },
    {
        name:'Cameron Foz',
        subititle:'has withdraw',
        picture:require('../Images/34.jpg'),
        ammount:'DEC - 20'
    },
    {
        name:'Mitchell Henry',
        subititle:'has withdraw',
        picture:require('../Images/user1.png'),
        ammount:'JUL - 20'
    },   {
        name:'Josia Maran',
        subititle:'has withdraw',
        picture:require('../Images/34.jpg'),
        ammount:'AUG - 20'
    },
    {
        name:'Ricord Jospher',
        subititle:'has withdraw',
        picture:require('../Images/user3.png'),
        ammount:'JUL - 20'
    },
    {
        name:'Cameron Foz',
        subititle:'has withdraw',
        picture:require('../Images/34.jpg'),
        ammount:'DEC - 20'
    },
]
const exampleData =[ ...WithDrawList.map((d, index) => ({
    key: `item-${index}`, // For example only -- don't use index as your key!
    label: index,
    data:d,
    backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index *
      5}, ${132})`
  }))];
export class Withdraw extends Component {
    constructor(props){
        super(props);
        this.state={
            data:exampleData
        }
    }
 
    renderItem = ({ item, index,data, drag, isActive }) => {
        console.log("Here Rnder of List",item.data)
        return (
            <TouchableOpacity  onLongPress={drag}>
            <View style={{flexDirection:'row',width: isActive?'90%':'100%',margin:3,height:isActive ?55: 60,borderRadius:5,backgroundColor:isActive ? "white" :'white',elevation:isActive ? 3 :0,borderRadius: isActive ? 10:0,alignSelf:'center'}}>
                     <Left style={{flexDirection:'row',marginLeft:10,alignItems:'center'}}>
                         <Image source={item.data.picture} style={{width:45,marginRight:5,height:45,borderRadius:5}} />
                         <View style={{marginLeft:5}}>
                         <Text style={{fontSize:15,fontFamily:'Avenir-Black',lineHeight:22,letterSpacing:0.4,color:Colors.HEADING}} numberOfLines={1}>{item.data.name}</Text>
                         </View>
                     </Left>
                     <Body>
       
                     </Body>
                     <Right style={{marginRight:10}}>
                         <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy',fontSize:14,letterSpacing:0.4,fontWeight:'900'}}>{item.data.ammount}</Text>
                     </Right>
               
                 </View>
                 </TouchableOpacity>
        );
      };
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
           <View style={{width:'100%',elevation:1,flexDirection:'row',marginBottom:10,height:'8%',backgroundColor:'white'}}>
            <Left style={{flexDirection:'row',marginLeft:10}}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                <Icon name='arrowleft' size={24} style={{paddingTop:5}} />

                </TouchableOpacity>
                <Text style={{fontSize:20,marginLeft:15,color:Colors.HEADING,fontWeight:'bold'}}>
                    Withdraw List
                </Text>
            </Left>
            <Right style={{marginRight:10}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditList')}>
                <Image source={require('../Images/Shape.png')} style={{width:20,height:20}} />

                </TouchableOpacity>

            </Right>
              </View>
                <View style={{flexDirection:'row'}}>
                    <Left style={{marginLeft:10}}>
                        <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy',lineHeight:18,marginBottom:5}}>Member</Text>
                    </Left>
                    <Right style={{marginRight:10}}>
                        <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy',lineHeight:18,marginBottom:5}}>Month</Text>
                    </Right>
                </View>
                <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          onDragEnd={({ data }) => this.setState({ data })}
        />
                {/* <FlatList
          data={this.WithDrawList}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={{flexDirection:'row',width:'100%',margin:8,height:60,borderRadius:10,backgroundColor:'white',alignSelf:'center'}}>
              <Left style={{flexDirection:'row',marginLeft:10,alignItems:'center'}}>
                  <Image source={item.picture} style={{width:45,marginRight:5,height:45,borderRadius:5}} />
                  <View style={{marginLeft:5}}>
                  <Text style={{fontSize:16,fontWeight:'bold',color:Colors.HEADING}} numberOfLines={1}>{item.name}</Text>
                  </View>
              </Left>
              <Body>

              </Body>
              <Right style={{marginRight:10}}>
                  <Text style={{color:Colors.LightText,fontSize:16,fontWeight:'900'}}>{item.ammount}</Text>
              </Right>
        
          </View>
          }
          keyExtractor={item => item.email}
        /> */}
                        </View>
        )
    }
}

export default Withdraw
