import React, { Component } from 'react'
import { Text, View,Dimensions,FlatList,Image,TouchableOpacity,ScrollView,StatusBar } from 'react-native'
import {Colors} from './Comon/colors'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import {Left,Right,Body, Separator} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import { CheckBox } from 'react-native-elements'
export class Add extends Component {
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
                <View style={{width:'100%',flexDirection:'row',height:'8%',elevation:1,backgroundColor:'white'}}>
            <Left style={{flexDirection:'row',marginLeft:10}}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
            <Icon name='arrowleft' size={24} style={{paddingTop:5}} />

</TouchableOpacity>
                <Text style={{fontSize:18,marginLeft:15,color:Colors.HEADING,fontFamily:'Avenir-Black'}}>
               Invitation
                </Text>
            </Left>
            <Right style={{marginRight:10}}>
                {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditList')}>
                <Icon name='edit' size={10} color={Colors.BLUE} />
                </TouchableOpacity> */}
            </Right>
              </View>
              <Text style={{margin:20,marginLeft:20,marginTop:20,color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>you are invited by Carl Mig for new program</Text>
              <View style={{flexDirection:'row',marginTop:10}}>
                 
                      <Text style={{fontSize:30,marginLeft:10,lineHeight:41,fontFamily:'Avenir-Black',letterSpacing:0.42,color:Colors.HEADING}}>House Renovation</Text>
              
                   <Right style={{marginRight:10}}>
                   <TouchableOpacity
               onPress={()=>this.props.navigation.navigate('EditProgram')}
               >
                                   <Image source={require('../Images/Shape.png')} style={{width:20,height:20}}  />

               </TouchableOpacity>

                  </Right>

                  
              </View>
              <Text style={{margin:5,marginLeft:10,fontSize:14,lineHeight:22,letterSpacing:0.4,fontFamily:'Avenir-Heavy',color:Colors.HEADING}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </Text>
              <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
           <Left style={{marginLeft:10}}>
           <View>
                    <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Total</Text>
                    <Text style={{marginTop:5,fontSize:22,color:Colors.HEADING,fontFamily:'Avenir-Black'}}>$12,400</Text>
                </View>
           </Left>
           
               <Right style={{marginRight:40}}>
               <View>
                <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Monthly</Text>
                    <Text style={{marginTop:5,fontSize:22,color:Colors.HEADING,fontFamily:'Avenir-Black'}}>$10,400</Text>
                </View>
               </Right>
                
            </View>

            <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
           <Left style={{marginLeft:10}}>
           <View>
                    <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Members</Text>
                    <Text style={{marginTop:5,fontSize:22,color:Colors.HEADING,fontFamily:'Avenir-Black'}}>10</Text>
                </View>
           </Left>
           
               <Right style={{marginRight:10}}>
               <View>
                <Text style={{color:Colors.LightText ,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Duration Months</Text>
                    <Text style={{marginTop:5,fontSize:22,color:Colors.HEADING,fontFamily:'Avenir-Black'}}>12</Text>
                </View>
               </Right>
                
            </View>
            <Text style={{color:Colors.LightText,marginLeft:10,marginTop:10,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Select your payment model</Text>
            <TouchableOpacity style={{flexDirection:'row',marginTop:20,borderBottomWidth:0.4,borderBottomColor:'#dedede',margin:10}} onPress={this.AgeOpen}>
                <Left style={{}}>
                <Text style={{fontFamily:'Avenir-Black',paddingBottom:10}}>Monthly</Text>
                </Left>
<Right style={{marginRight:10}}>
<Menu
          ref={this.setAgeRef}
          button={<View onPress={this.AgeOpen} style={{flexDirection:'row',paddingBottom:10}}>
          <Icon name='caretdown' style={{paddingLeft:5}} />
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
          <View>
          <CheckBox
            Left
            checkedColor='#2AD95A'
            containerStyle={{backgroundColor:'transparent',borderWidth:0,marginBottom:10,marginRight:20}}
            textStyle={{fontSize:14,color:Colors.LightText,fontFamily:'Avenir-Heavy'}}
            title='Please read Term & Condition first'
            inputStyle={{color:'red'}}
            // inputContainerStyle={{backgroundColor:"red"}}
            leftIconContainerStyle={{color:'red'}}
            checked={this.state.checked}
            onPress={this.checkboxstate}
/>
          </View>
          <TouchableOpacity style={{width:'90%',justifyContent:'center',alignItems:'center',height:45,borderRadius:5,alignSelf:'center',backgroundColor:this.state.checked?Colors.BLUE:'#E5E5E5'}}
          onPress={()=>this.props.navigation.navigate('TermsandCondition')}
          >
              <Text style={{fontSize:14,color:'white'}}>Accept</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{width:'90%',marginTop:10,justifyContent:'center',alignItems:'center',height:45,borderRadius:5,borderWidth:2,borderColor:'\  #404850',alignSelf:'center',backgroundColor:'transparent'}}
           onPress={()=>this.props.navigation.navigate('Home')}
          >
              <Text style={{fontSize:16,fontWeight:'bold',color:'#404850'}}>Reject</Text>
          </TouchableOpacity>
            </View>
        )
    }
}

export default Add
