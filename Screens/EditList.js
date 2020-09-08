import React, { Component } from 'react'
import { Text, View,Dimensions,FlatList,Image,TouchableOpacity,StatusBar } from 'react-native'
import {Colors} from './Comon/colors'
import {Left,Right,Body} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import DraggableFlatList from 'react-native-draggable-flatlist'

import Header from './Comon/Header'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
const WithDrawList=[
    {
        name:'Mitchell Henry',
        subititle:'has withdraw',
        picture:require('../Images/user1.png'),
        ammount:'JUL - 20'
    },{
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
export class EditList extends Component {
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
            <View style={{flexDirection:'row',width: isActive?'90%':'100%',margin:2,height: isActive ?55: 60,elevation:isActive ?3:0,borderRadius:isActive?10: 0,backgroundColor:isActive ? "white" :'white',alignSelf:'center'}}>
                     <Left style={{flexDirection:'row',marginLeft:10,alignItems:'center'}}>
                         <Image source={item.data.picture} style={{width:45,marginRight:5,height:45,borderRadius:5}} />
                         <View style={{marginLeft:5}}>
                         <Text style={{fontSize:15,fontFamily:'Avenir-Black',letterSpacing:0.4,color:Colors.HEADING}} numberOfLines={1}>{item.data.name}</Text>
                         </View>
                     </Left>
                     <Body>
       
                     </Body>
                     <Right style={{marginRight:10}}>
                         <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.4,fontSize:14,fontWeight:'900'}}>{item.data.ammount}</Text>
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
           <View style={{width:'100%',flexDirection:'row',height:'8%',backgroundColor:'white',elevation:1}}>
            <Left style={{flexDirection:'row',marginLeft:10}}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                <Icon name='arrowleft' size={24} style={{paddingTop:5}} />
                </TouchableOpacity>
                <Text style={{fontSize:20,marginLeft:15,color:Colors.HEADING,fontFamily:'Avenir-Black'}}>
                    Edit List
                </Text>
            </Left>
            <Right style={{marginRight:10}}>
            <Text style={{color:Colors.BLUE,fontFamily:'Avenir-Heavy',lineHeight:18,marginBottom:5}}>Save</Text>

                {/* <Icon name='export' size={20} color={Colors.BLUE} /> */}
            </Right>
              </View>
              <Text style={{margin:10,color:Colors.BLUE,fontWeight:'bold'}}>Long press to move in list.</Text>
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
                        </View>
        )
    }
}

export default EditList
