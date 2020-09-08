import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Image,FlatList,TextInput,Dimensions ,ScrollView,TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import {Colors} from '../../Screens/Comon/colors'
import {Left,Right,Body} from 'native-base'
import Swipeable from 'react-native-swipeable'
// import { TextInput,RadioButton } from 'react-native-paper';

import Icon1 from 'react-native-vector-icons/Octicons';
import Modal from 'react-native-modal';
var Devicewidth =  Dimensions.get('window').width;
var Deviceheight =   Dimensions.get('window').height;
export class Notification extends Component {
    constructor(props){
            super(props);
            this.state={
                message:true,
                NewChat:false,
                ChatSetting:false,
                Notification:false
            }
    }
    toggleModal = () => {
        this.setState({NewChat: !this.state.NewChat});
      };
      toggleModalChat = () => {
        this.setState({ChatSetting: !this.state.ChatSetting});
      };
     Members=[
        {
            
            picture:require('../../Images/1.jpg'),
        },   {
           
            picture:require('../../Images/2.jpg'),
        },
        {
            
            picture:require('../../Images/3.jpg'),
          
        }]
    NewGroup=[
        {
            name:'Mitchell Henry',
            picture:require('../../Images/1.jpg'),
        },   {
            name:'Josia Maran',
            picture:require('../../Images/2.jpg'),
        },
        {
            name:'Ricord Jospher',
            picture:require('../../Images/3.jpg'),
            name:'check'
        },
        {
            name:'Cameron Foz',
            picture:require('../../Images/4.jpg'),
            name:'check'

            
        },
        {
            name:'Ricord Jospher',
            picture:require('../../Images/3.jpg'),
        },
        {
            name:'Cameron Foz',
            picture:require('../../Images/4.jpg'),
            
        },
        {
            name:'Cameron Foz',
            picture:require('../../Images/4.jpg'),
            name:'check'

            
        },
        {
            name:'Ricord Jospher',
            picture:require('../../Images/3.jpg'),
        },
        {
            name:'Cameron Foz',
            picture:require('../../Images/4.jpg'),
            
        }
    ]
      Data=[
        {
            name:'Mitchell Henry',
            subititle:'has withdraw',
            picture:require('../../Images/1.jpg'),
            ammount:'-$6.000'
        },   {
            name:'Josia Maran',
            subititle:'has withdraw',
            picture:require('../../Images/2.jpg'),
            ammount:'-$20.000'
        }
    ]
    DataNoti=[
        {
            name:'Mitchell Henry',
            subititle:' Invited you ',
            picture:require('../../Images/1.jpg'),
            ammount:'See Details'
        },   {
            name:'Josia Maran',
            subititle:'for james School',
            picture:require('../../Images/2.jpg'),
            ammount:'See Details'
        }
    ]
    Message=[
        {
            name:'Mitchell Henry',
            subititle:'Here I am Avialable For the help',
            picture:require('../../Images/user1.png'),
            ammount:'-$20.000',
            new:require('../../Images/red.png')
        },   {
            name:'Josia Maran',
            subititle:'Thanks For your Responce',
            picture:require('../../Images/user2.png'),
            ammount:'-$20.000'
        },
        {
            name:'Ricord Jospher',
            subititle:'Serive Provider Is the great work',
            picture:require('../../Images/user3.png'),
            new:require('../../Images/red.png'),
            ammount:'-$20.000'
        },
        {
            name:'Cameron Foz',
            subititle:'Also Here Woukd you Like To join',
            picture:require('../../Images/user4.jpg'),
            ammount:'-$20.000'
        },
    ]
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}
            onPress={()=>this.props.navigation.navigate('Homes')}
            
            >
                <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}>
                <Icon name='arrowleft' size={20} style={{margin:20}}/>

                </TouchableOpacity>
               <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'90%',alignSelf:'center',marginTop:20}}>
                   <TouchableOpacity onPress={()=>this.setState({message:true,Notification:false})}>
                       <Text style={{fontSize:20,fontFamily:'Avenir-Black',letterSpacing:0.62,color:this.state.message?Colors.HEADING:'#E5E5E5'}}>Message</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={()=>this.setState({message:false,Notification:true})}>
                       <Text style={{fontSize:20,fontFamily:'Avenir-Black',letterSpacing:0.62,color:this.state.Notification?Colors.HEADING:'#E5E5E5'}}>Notification</Text>
                   </TouchableOpacity>
               </View>
{this.state.message?
    <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:20}}>
                   <TouchableOpacity>
                       <Text style={{fontSize:13,fontWeight:'bold',color:Colors.LightText,fontFamily:'Avenir-Heavy',marginLeft:10}}>Group Chats</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={()=>this.setState({NewChat:true})}>
                       <Text style={{fontSize:13,fontFamily:'Avenir-Heavy',color:Colors.BLUE,marginRight:10}}>New Group Chat</Text>
                   </TouchableOpacity>


               </View>

:<View></View>}
               
            {this.state.Notification?
                 <View style={{flex:1}}>
                     <View>
                     <Text style={{fontSize:16,marginLeft:20,marginTop:20,fontFamily:'Avenir-Heavy',color:Colors.LightText,fontFamily:'Avenir-Heavy'}}>Today</Text>
                 <FlatList
                 data={this.Data}
                 showsVerticalScrollIndicator={false}
                 renderItem={({item}) =>
                 <View style={{flexDirection:'row',width:'90%',margin:0,marginTop:10,height:60,borderRadius:10,backgroundColor:'white',alignSelf:'center'}}>
                   <Left style={{flexDirection:'row',marginLeft:10}}>
                       <Image source={item.picture} style={{width:45,marginRight:5,height:45,borderRadius:5}} />
                       <View style={{marginLeft:5}}>
                       <Text style={{fontSize:16,fontWeight:'bold',color:Colors.HEADING}} numberOfLines={1}>{item.name}</Text>
                 <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy'}}>{item.subititle}</Text>
                       </View>
                   </Left>
                   <Body>
                 
                   </Body>
                   <Right style={{marginRight:10}}>
                       <Text style={{color:'#EE5A55',fontSize:16,fontWeight:'900'}}>{item.ammount}</Text>
                   </Right>
                 </View>
                 }
                 keyExtractor={item => item.email}
                 />
                         </View>
                 <View style={{marginTop:20}}>
                 <Text style={{fontSize:16,marginLeft:20,marginBottom:10,fontFamily:'Avenir-Heavy',color:Colors.LightText,fontFamily:'Avenir-Heavy'}}>Last Week</Text>

<FlatList
data={this.DataNoti}
showsVerticalScrollIndicator={false}
renderItem={({item}) =>
<View style={{flexDirection:'row',width:'90%',height:60,borderRadius:10,backgroundColor:'white',alignSelf:'center'}}>
  <Left style={{flexDirection:'row',marginLeft:10}}>
      <Image source={item.picture} style={{width:45,marginRight:5,height:45,borderRadius:5}} />
      <View style={{marginLeft:5}}>
      <Text style={{fontSize:16,fontWeight:'bold',width:150,color:Colors.HEADING}} numberOfLines={2}>{item.name}</Text>
<Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy'}}>{item.subititle}</Text>
      </View>
  </Left>
  <Body>

  </Body>
  <Right style={{marginRight:5,width:90,height:26,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#58CB98'}}>
      <Text style={{color:'white',fontSize:16,fontWeight:'900'}}>{item.ammount}</Text>
  </Right>

</View>
}
keyExtractor={item => item.email}
/>

<View style={{flexDirection:'row',width:'90%',height:60,borderRadius:10,backgroundColor:'white',alignSelf:'center'}}>
  <Left style={{flexDirection:'row',marginLeft:10}}>
      <View style={{width:45,justifyContent:'center',alignItems:'center',marginRight:5,height:45,borderRadius:5,backgroundColor:'rgba(41, 191, 118, 0.1)'}}>
        <Icon name='arrowup' size={24} color='#1BC773'/>
      </View>
     
      <View style={{marginLeft:5}}>
      <Text style={{fontSize:16,fontWeight:'bold',width:150,color:Colors.HEADING}} numberOfLines={2}>Add to wallet</Text>
<Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy'}}>for james School funds</Text>
      </View>
  </Left>
  <Body>

  </Body>
  <Right style={{marginRight:10}}>
                       <Text style={{color:'#58CB98',fontSize:20,fontWeight:'900'}}>+ $5,000</Text>
                   </Right>

</View>
                     </View>
                   
                 </View>
:    <View style={{flex:1}}>
<Text style={{fontSize:16,margin:20,fontFamily:'Avenir-Heavy',color:Colors.LightText,fontFamily:'Avenir-Heavy'}}>Today</Text>
<FlatList
data={this.Message}
showsVerticalScrollIndicator={false}

renderItem={({ item }) => (
    <Swipeable
    onRef = {ref => this.swipe = ref}
      rightButtons={[
        <TouchableHighlight
          style={{
            width: 50,
            height: 50,
            
            borderRadius: 5,
            marginLeft: 5,
            marginTop: 3,
            backgroundColor:'white',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Icon1 name='trashcan' size={24} color='red' style={{marginTop:5}}/>
        </TouchableHighlight>
      ]}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Chat')}>

  <View style={{flexDirection:'row',width:'90%',margin:8,height:60,borderRadius:10,backgroundColor:'white',alignSelf:'center'}}>
  <Left style={{flexDirection:'row',marginLeft:0}}>
      <Image source={item.picture} style={{width:45,marginRight:5,height:45,borderRadius:5}} />
      <View style={{marginLeft:5}}>
      <Text style={{fontSize:16,fontFamily:'Avenir-Heavy',letterSpacing:0.4,color:Colors.HEADING}} numberOfLines={1}>{item.name}</Text>
<Text style={{color:'grey',fontFamily:'Avenir-Light',fontWeight:'bold',width:200}} numberOfLines={2}>{item.subititle}</Text>
      </View>
  </Left>
  <Body>
  </Body>
  <Right style={{marginRight:10}}>
      <Image source={item.new} style={{resizeMode:'contain'}}/>
      {/* <Text style={{color:'#EE5A55',fontSize:16,fontWeight:'900'}}>{item.ammount}</Text> */}
  </Right>
</View>
</TouchableOpacity>

        </Swipeable>   
  )}
        keyExtractor={item => item.email}
        />
        </View>
    }
          <Modal isVisible={this.state.NewChat} animationIn={'slideInUp'} onBackdropPress={this.toggleModal}>
         <ScrollView style={{borderTopLeftRadius:20,borderTopRightRadius:20,width:Devicewidth,height:Deviceheight/1.2,alignSelf:'center',backgroundColor:'white' }}>

          <View style={{borderTopLeftRadius:20,borderTopRightRadius:20,width:Devicewidth,height:Deviceheight/1.2,alignSelf:'center',backgroundColor:'white' }}>
         <View style={{width:100,height:5,backgroundColor:'#E5E5E5',alignSelf:'center',marginTop:10,borderRadius:5}}></View>
         <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:30,marginBottom:20}}>
                   <TouchableOpacity>
                       <Text style={{fontSize:13,fontWeight:'bold',color:Colors.LightText,fontFamily:'Avenir-Heavy',marginLeft:10}}>Select Members</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={()=>this.setState({NewChat:false})}>
                       <Text style={{fontSize:16,fontWeight:'bold',color:Colors.BLUE,marginRight:10}}>Next</Text>
                   </TouchableOpacity>
               </View>
               <View style={{width:'90%',justifyContent:"space-between",flexDirection:'row',height:45,marginTop:10,backgroundColor:'rgba(223, 231, 245, 0.4)',borderRadius:10,alignSelf:'center'}}>
               <TouchableOpacity>
                <TextInput
                style={{marginLeft:10}}
                placeholder='Search Members'
                />
             </TouchableOpacity>

                   <TouchableOpacity onPress={()=>this.setState({NewChat:false})}>
<Icon name='search1' style={{marginTop:12,marginRight:10}} size={20} />
                   </TouchableOpacity>
               </View>
               <View style={{flex:1,marginTop:20}}>
                 <FlatList
                 data={this.NewGroup}
                 showsVerticalScrollIndicator={false}
                 renderItem={({item}) =>
                 <TouchableOpacity onPress={()=>this.setState({ChatSetting:true,NewChat:false})}>
                 <View style={{flexDirection:'row',width:'90%',margin:4,height:60,borderRadius:10,backgroundColor:'white',alignSelf:'center'}}>
                   <Left style={{flexDirection:'row',marginLeft:10}}>
                       <Image source={item.picture} style={{width:40,marginRight:5,height:40,borderRadius:5}} />
                       <View style={{marginLeft:5}}>
                       <Text style={{fontSize:16,fontFamily:'Avenir-Heavy',letterSpacing:0.4,color:Colors.HEADING,marginTop:10}} numberOfLines={1}>{item.name}</Text>
                 <Text style={{color:Colors.LightText,fontFamily:'Avenir-Heavy'}}>{item.subititle}</Text>
                       </View>
                   </Left>
                   <Body>
                 
                   </Body>
                   <Right style={{marginRight:10}}>
                       {item.name=='check'?
                      <Icon name={item.name} color='green' size={20}/>
                    :<View></View>   
                    }
                   </Right>
                 
                 </View>
                 </TouchableOpacity>
                 }
                 keyExtractor={item => item.email}
                 />
                 </View>
          </View>
          </ScrollView>
      
        </Modal>

        <Modal isVisible={this.state.ChatSetting} animationIn={'slideInUp'} onBackdropPress={this.toggleModalChat}>
         <ScrollView style={{borderTopLeftRadius:20,borderTopRightRadius:20,width:Devicewidth,height:Deviceheight/1.2,alignSelf:'center',backgroundColor:'white' }}>

          <View style={{borderTopLeftRadius:20,borderTopRightRadius:20,width:Devicewidth,height:Deviceheight/1.2,alignSelf:'center',backgroundColor:'white' }}>
         <View style={{width:100,height:5,backgroundColor:'#E5E5E5',alignSelf:'center',marginTop:10,borderRadius:5}}></View>
         <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:30,marginBottom:20}}>
                   <TouchableOpacity>
                       <Text style={{fontSize:13,color:Colors.LightText,fontFamily:'Avenir-Heavy',marginLeft:10}}>New Group</Text>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={()=>this.setState({NewChat:false,ChatSetting:false})}>
                       <Text style={{fontSize:16,fontFamily:'Avenir-Heavy',color:Colors.BLUE,marginRight:10}}>Create</Text>
                   </TouchableOpacity>
               </View>
               <TouchableOpacity style={{width:100,alignSelf:'center',marginTop:20,marginBottom:20,justifyContent:'center',alignItems:'center',height:100,borderRadius:50,backgroundColor:'#dedede'}}>
<Image source={require('../../Images/add.png')} />
</TouchableOpacity>
<TextInput placeholder='Enter Group Name' style={{marginLeft:20}} underlineColorAndroid={'#dedede'} />
<Text style={{fontSize:13,fontStyle:'normal',margin:20,fontWeight:'800',fontFamily:'Avenir-Heavy'}}>Members</Text>
<View style={{flex:1}}>
                 {/* <Text style={{fontSize:16,margin:20,color:Colors.LightText,fontFamily:'Avenir-Heavy'}}>Today</Text> */}
                 <FlatList
                 data={this.Members}
                 horizontal={true}
                 showsVerticalScrollIndicator={false}
                 renderItem={({item}) =>
                 <View style={{}}>
                   <Left style={{flexDirection:'row',marginLeft:10}}>
                     
                       <Image source={item.picture} style={{width:45,marginRight:5,height:45,borderRadius:5}} />
                       <TouchableOpacity style={{right:15,marginBottom:10,justifyContent:'center',alignItems:'center',width:20,height:20,backgroundColor:'red',borderRadius:10}}
                       onPress={()=>this.setState({NewChat:false,ChatSetting:false})}
                       >
                    <Icon name='close' color='white' />
                       </TouchableOpacity>
                   </Left>
                 
                 </View>
                 }
                 keyExtractor={item => item.email}
                 />
                 </View>
          </View>
          
          </ScrollView>
        </Modal>
            </View>
        )
    }
}

export default Notification
