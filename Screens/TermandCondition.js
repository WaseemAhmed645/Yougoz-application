import React, { Component } from 'react'
import { Text, View,Dimensions,FlatList,Image,TouchableOpacity,ScrollView,StatusBar } from 'react-native'
import {Colors} from './Comon/colors'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import {Left,Right,Body, Separator} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import { CheckBox } from 'react-native-elements'
export class TermsandCondition extends Component {
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
            <View style={{flex:1,backgroundColor:'#FFFF'}}>
                <StatusBar hidden={true} />
                <View style={{width:'100%',flexDirection:'row',height:'8%',elevation:1,backgroundColor:'white'}}>
            <Left style={{flexDirection:'row',marginLeft:10}}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
               
               <Icon name='arrowleft' size={20} style={{paddingTop:2}} />
   
                  </TouchableOpacity>
                  
                <Text style={{fontSize:18,marginLeft:15,color:Colors.HEADING,fontWeight:'bold'}}>
               Invitation
                </Text>
            </Left>
            <Right style={{marginRight:10}}>
                {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditList')}>
                <Icon name='edit' size={10} color={Colors.BLUE} />
                </TouchableOpacity> */}
            </Right>
              </View>
              {/* <Text style={{margin:10,color:Colors.LightText}}>you are invited by Carl Mig for new program</Text> */}
              <View style={{flexDirection:'row',marginTop:10}}>
                 
                      <Text style={{fontSize:24,marginLeft:20,marginTop:20,marginBottom:10,fontFamily:'Avenir-Black',color:Colors.HEADING}}>Terms & Conditions</Text>
               
                  <Right style={{marginRight:10}}>
                      {/* <Icon name='edit' size={20} /> */}
                  </Right>
              </View>
              <Text style={{fontSize:18,marginLeft:10,marginTop:10,fontFamily:'Avenir-Black',color:Colors.HEADING}}>Rules</Text>

              <Text style={{margin:10,fontFamily:'Avenir-Heavy',fontSize:14,color:'grey',letterSpacing:0.4}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</Text>
                
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold',fontSize:30,marginLeft:10}}>.</Text>
                    <Text style={{fontFamily:'Avenir-Heavy',fontSize:14,color:'grey',letterSpacing:0.4,marginTop:17,marginLeft:10,width:'90%'}}>Lorem of the printing and typesetting industry. Lorem Ipsum has been the industry's text</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Text style={{fontWeight:'bold',fontSize:30,marginLeft:10}}>.</Text>
                    <Text style={{fontFamily:'Avenir-Heavy',fontSize:14,color:'grey',letterSpacing:0.4,marginTop:17,marginLeft:10,width:'90%'}}>Lorem of the printing and typesetting industry. Lorem Ipsum has been the industry's text</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Text style={{fontWeight:'bold',fontSize:30,marginLeft:10}}>.</Text>
                    <Text style={{fontFamily:'Avenir-Heavy',fontSize:14,color:'grey',letterSpacing:0.4,marginTop:17,marginLeft:10,width:'90%'}}>Lorem of the printing and typesetting industry. Lorem Ipsum has been the industry's text</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Text style={{fontWeight:'bold',fontSize:30,marginLeft:10}}>.</Text>
                    <Text style={{fontFamily:'Avenir-Heavy',fontSize:14,color:'grey',letterSpacing:0.4,marginTop:17,marginLeft:10,width:'90%'}}>Lorem of the printing and typesetting industry. Lorem Ipsum has been the industry's text</Text>
                </View>
                <TouchableOpacity style={{width:'90%',position:'absolute',bottom:20,justifyContent:'center',alignItems:'center',height:45,borderRadius:5,alignSelf:'center',backgroundColor:Colors.BLUE}}
                onPress={()=>this.props.navigation.navigate('.')}
                >
              <Text style={{fontSize:14,color:'white'}}>Accept</Text>
          </TouchableOpacity>
    
            </View>
        )
    }
}

export default TermsandCondition
