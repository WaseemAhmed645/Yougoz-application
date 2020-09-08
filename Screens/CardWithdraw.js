import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,Image,ScrollView,FlatList,StatusBar,TextInput} from 'react-native'
import {Left,Right,Body} from 'native-base'
import {Colors} from '../Screens/Comon/colors'
import Icon from 'react-native-vector-icons/AntDesign'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';


export class CardWithdraw extends Component {
    constructor(props){
        super(props);
        this.state={
            card: ' Card Number 1'
        }
    }
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
            name:'With draw from wallet',
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
              card:value
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
               
               <Icon name='arrowleft' size={24} style={{paddingTop:2}} />
   
                  </TouchableOpacity>
                  
                <Text style={{fontSize:18,marginLeft:15,color:Colors.HEADING,fontWeight:'bold'}}>
                Wallet
                </Text>
                <Text style={{fontSize:16,marginTop:3,marginLeft:5,color:Colors.LightText}}>
                for
                </Text>
                <Text style={{fontSize:14,marginLeft:5,color:Colors.HEADING,marginTop:5,fontWeight:'bold'}}>
                Home Fund
                </Text>
            </Left>
            <Right style={{marginRight:10}}>
                {/* <TouchableOpacity>
                <Icon name='creditcard' size={20} color={Colors.BLUE} />
                </TouchableOpacity> */}
            </Right>
              </View>
              <View style={{flexDirection:'row',width:'100%',margin:15,height:160}}>

<ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Image source={require('../Images/card3.png')} style={{width:220,margin:5,height:160,resizeMode:"contain"}} />
                  <Image source={require('../Images/card2.jpg')} style={{marginTop:5,width:220,height:160,resizeMode:"contain"}} />
                  <Image source={require('../Images/card1.jpg')} style={{width:220,marginTop:5,marginRight:20,height:160,resizeMode:"contain"}} /> 
            
</ScrollView>
</View>
<View style={{marginLeft:20}}>
    <Text style={{color:Colors.LightText,fontSize:13,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Amount</Text>
    <TextInput 
    placeholder='$100.00'
    style={{width:'90%',fontFamily:'Avenir-Heavy'}}
    placeholderTextColor={Colors.BLUE}
    underlineColorAndroid='#E5E5E5'
    />
</View>
<Text style={{color:Colors.LightText,marginLeft:20,fontSize:13,fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>To</Text>

<TouchableOpacity style={{flexDirection:'row',borderBottomColor:'#dedede',borderBottomWidth:0.4,marginLeft:20,top:5}} onPress={this.AgeOpen}>
                <Left style={{}}>
                <Text style={{fontFamily:'Avenir-Heavy',color:Colors.BLUE}}>{this.state.card}</Text>
                </Left>
<Right style={{marginRight:10}}>
<Menu
          ref={this.setAgeRef}
          button={<View onPress={this.AgeOpen} style={{flexDirection:'row'}}>
          <Icon name='caretdown' style={{paddingLeft:5}} />
          </View>}
        >
          <MenuItem onPress={()=>this.Age('Card Number 1')}>Card Number 1</MenuItem>
          <MenuDivider />
          <MenuItem onPress={()=>this.Age('Card Number 2')}>Card Number 2</MenuItem>
          <MenuDivider />

          <MenuItem onPress={()=>this.Age('Card Number 3')}>Card Number 3</MenuItem>
          {/* <MenuItem onPress={()=>this.Age('30-40')}>30 - 40</MenuItem> */}
        </Menu>
</Right>
           
            </TouchableOpacity>
<TouchableOpacity style={{width:'90%',height:45,justifyContent:'center',alignSelf:'center',alignItems:'center',marginTop:30,backgroundColor:Colors.BLUE,borderRadius:5}}

onPress={()=>this.props.navigation.goBack()}
>
                <Text style={{fontSize:14,color:'white',fontFamily:'Avenir-Heavy'}}>Withdraw</Text>
              </TouchableOpacity>
      
            </View>
        )
    }
}

export default CardWithdraw
