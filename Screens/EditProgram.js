import React, { Component } from 'react'
import { Text, View,Dimensions,FlatList,Image,TouchableOpacity,ScrollView,StatusBar } from 'react-native'
import {Colors} from './Comon/colors'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import {Left,Right,Body, Separator} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import { TextInput,RadioButton } from 'react-native-paper';

import { CheckBox } from 'react-native-elements'
export class EditProgram extends Component {
    constructor(props){
        super(props);
        this.state={
            checked:false
        }
    }
    _AgeMenu=null;

    setAgeRef = ref => {
        this._AgeMenu = ref;
      };
      checkboxstate=()=>{
          this.setState({checked:!this.state.checked})
      }
    AgeOpen =()=>{
        this._AgeMenu.show();
  
      }
      Age =(value)=>{
          this.setState({
              Age:value
          })
        this._AgeMenu.hide();
  
      }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <StatusBar hidden={true} />
                <View style={{width:'100%',flexDirection:'row',height:'10%',backgroundColor:'white'}}>
            <Left style={{flexDirection:'row',marginLeft:10}}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
               
            <Icon name='arrowleft' size={24} style={{paddingTop:2}} />

               </TouchableOpacity>
               
            </Left>
            <Right style={{marginRight:10}}>
                {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditList')}>
                <Icon name='edit' size={10} color={Colors.BLUE} />
                </TouchableOpacity> */}
            </Right>
              </View>
              <Text style={{fontSize:30,fontFamily:'Avenir-Black',letterSpacing:0.2,lineHeight:40,color:Colors.HEADING,fontStyle:'normal',marginLeft:20}}>Edit Programs Details</Text>
              <View style={{marginLeft:10,marginTop:10}}>
    {/* <Text style={{color:Colors.LightText}}>Name</Text> */}
    <TextInput
                          theme={{ colors: { primary: "#2AD95A" }}}
                          label="Name"
                            style={{backgroundColor:'white',width:'90%',alignSelf:'flex-start',marginLeft:10}}
                            underlineColor='#E5E5E5'
                        // value={text}
                        // onChangeText={(text) => setText(text)}
                         />
</View>
<View style={{marginLeft:10,marginTop:10}}>
    {/* <Text style={{color:Colors.LightText}}>Description</Text> */}
    <TextInput
                          theme={{ colors: { primary: "#2AD95A" }}}
                          label="Description"
                            style={{backgroundColor:'white',height:80,width:'90%',alignSelf:'flex-start',marginLeft:10}}
                            underlineColor='#E5E5E5'
                            numberOfLines={3}
                            
                        // value={text}
                        // onChangeText={(text) => setText(text)}
                         />
</View>
            <Text style={{color:Colors.LightText,marginLeft:30,marginTop:15,fontFamily:'Avenir-Heavy'}}>Select your payment model</Text>
            <TouchableOpacity style={{flexDirection:'row',borderBottomColor:'#dedede',borderBottomWidth:0.4,width:'80%',alignSelf:'center',marginTop:20}} onPress={this.AgeOpen}>
                <Left style={{}}>
                <Text style={{fontFamily:'Avenir-Heavy',paddingBottom:10,color:Colors.HEADING}}>Monthly</Text>
                </Left>
<Right style={{marginRight:10}}>
<Menu
          ref={this.setAgeRef}
          button={<View onPress={this.AgeOpen} style={{flexDirection:'row'}}>
          <Icon name='caretdown' style={{paddingLeft:5,paddingBottom:10}} />
          </View>}
        >
          <MenuItem onPress={()=>this.Age('15-10')}>Days</MenuItem>
          <MenuDivider />
          <MenuItem onPress={()=>this.Age('10-25')}>Months</MenuItem>
          <MenuDivider />

          <MenuItem onPress={()=>this.Age('10-30')}>Years</MenuItem>
          {/* <MenuItem onPress={()=>this.Age('30-40')}>30 - 40</MenuItem> */}
        </Menu>
</Right>
           
            </TouchableOpacity>
          <TouchableOpacity style={{width:'90%',marginTop:40,justifyContent:'center',alignItems:'center',height:45,borderRadius:5,alignSelf:'center',backgroundColor:Colors.BLUE}}
          onPress={()=>this.props.navigation.navigate('.')}
          >
              <Text style={{fontSize:14,color:'white'}}>Save</Text>
          </TouchableOpacity>
            </View>
        )
    }
}

export default EditProgram
