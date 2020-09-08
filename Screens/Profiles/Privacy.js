import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import {Left,Right,Body} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import {Colors} from '../../Screens/Comon/colors'
import ToggleSwitch from 'toggle-switch-react-native'

export class Privacy extends Component {
    constructor(props){
        super(props);
        this.state={
            switch:true,
            switch1:false,

        }

    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                 <View style={{width:'100%',flexDirection:'row',height:'8%',backgroundColor:'white',borderBottomWidth:0.5,borderColor:'#E5E5E5'}}>
            <Left style={{flexDirection:'row',marginLeft:10}}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                <Icon name='arrowleft' size={20} style={{paddingTop:5}} />

                </TouchableOpacity>
                <Text style={{fontSize:18,marginLeft:15,color:Colors.HEADING,fontFamily:'Avenir-Black',letterSpacing:0.4}}>
                Privacy Settings
                </Text>
            </Left>
            <Right style={{marginRight:10}}>
                <Icon name={this.props.Right} size={20} color={Colors.HEADING} />
            </Right>
              </View>
<Text style={{margin:20,color:Colors.LightText,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Who can send me request?</Text>
              <View style={{width:'100%',flexDirection:'row',height:'10%',backgroundColor:'white',borderBottomWidth:0.5,borderColor:'#E5E5E5'}}>
            <Left style={{flexDirection:'row',marginLeft:10}}>
                <Text style={{fontSize:16,marginLeft:15,color:Colors.HEADING,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>
     Contact Only
                </Text>
            </Left>
            <Right style={{marginRight:10}}>
           <Icon name='down' size={16} />
           </Right>
              </View>
              
              <View style={{width:'100%',flexDirection:'row',height:'10%',backgroundColor:'white',borderBottomWidth:0.5,borderColor:'#E5E5E5'}}>
            <Left style={{flexDirection:'row',marginLeft:10}}>
                <Text style={{fontSize:16,marginLeft:15,color:Colors.HEADING,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>
              Public Profile
                </Text>
            </Left>
            <Right style={{marginRight:10}}>
            <ToggleSwitch
  isOn={this.state.switch1}
  style={{alignSelf:'flex-end'}}
  onColor={Colors.BLUE}
  offColor="#E5E5E5"
//   label={this.state.switch?'In Office':'On Site'}
//   labelStyle={{ color: "black", fontWeight: "900" }}
  size="medium"
  onToggle={()=>this.setState({switch1:!this.state.switch1})}
/>
            </Right>
              </View>
              
              <View style={{width:'100%',flexDirection:'row',height:'10%',backgroundColor:'white',borderBottomWidth:0.5,borderColor:'#E5E5E5'}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('PhoneVerification')} style={{marginTop:20}} >
            <Left style={{flexDirection:'row',marginLeft:10}}>
                <Text style={{fontSize:16,marginLeft:15,color:Colors.HEADING,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>
   Change Password
                </Text>
            </Left>
            </TouchableOpacity>
            <Right style={{marginRight:10}}>
           <Icon name='right' size={16} />
           </Right>
          
              </View>
             
            
              <TouchableOpacity style={{width:'90%',height:45,justifyContent:'center',alignSelf:'center',alignItems:'center',marginTop:30,backgroundColor:Colors.BLUE,borderRadius:5}}
              onPress={()=>this.props.navigation.goBack()}
              >
                <Text style={{fontSize:16,color:'white',fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Save</Text>
              </TouchableOpacity>
            </View>
        )
    }
}

export default Privacy
