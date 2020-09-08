import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Image,FlatList,Dimensions,AsyncStorage} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal';
import {Colors} from './Comon/colors'
import { TextInput,RadioButton } from 'react-native-paper';

const SocialInvite =[
    {
        image:require('../Images/fuboot.png')
    },
    {
        image:require('../Images/Social/facebook.png')
    },
    {
        image:require('../Images/Social/whatsapp.png')
    },
    {
        image:require('../Images/Social/snapchat.png')
    },
    {
        image:require('../Images/Social/messanger.png')
    },
    {
        image:require('../Images/Social/instagram.png')
    },
    {
        image:require('../Images/Social/message.png')
    },
    {
        image:require('../Images/Social/twitter.png')
    },
    {
        image:require('../Images/Social/chain.png')
    }
]


var Devicewidth =  Dimensions.get('window').width;
var Deviceheight =   Dimensions.get('window').height;
export class MakeProgram extends Component {
    constructor(props){
        super(props);
        this.state={
            invite:false,
            valueget:'true'
        }
    }

    Invite= async ()=>{
        this.setState({
            invite:false
        })
        // await AsyncStorage.setItem(
        //     'MakeState','true'
        //              );
        this.props.navigation.navigate('PaymentMethod')
    }

    toggleModal = () => {
        this.setState({invite: !this.state.invite});
      };
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <TouchableOpacity style={{margin:20}}>
                    <Icon name='arrowleft' size={24} />
                </TouchableOpacity>
       <Text style={{fontSize:32,lineHeight:38,margin:20,color:Colors.HEADING,fontStyle:'normal',fontWeight:'900',fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>New Program</Text>
       <View style={{marginLeft:10}}>
 
    <TextInput
                          theme={{ colors: { primary: "#2AD95A" }}}
                          label="Name"
                            style={{backgroundColor:'white',width:'95%',fontFamily:'Avenir-Heavy'}}
                            underlineColor='#E5E5E5'
                        // value={text}
                        // onChangeText={(text) => setText(text)}
                         />
</View>
<View style={{marginLeft:10}}>
 
    <TextInput
                          theme={{ colors: { primary: "#2AD95A" }}}
                          label="Total Amount (should be a $ amount)"
                            style={{backgroundColor:'white',width:'95%',fontFamily:'Avenir-Heavy'}}
                            underlineColor='#E5E5E5'
                        // value={text}
                        // onChangeText={(text) => setText(text)}
                         />
</View>
<View style={{marginLeft:10}}>
   
    <TextInput
                          theme={{ colors: { primary: "#2AD95A" }}}
                          label="Durations of Program"
                            style={{backgroundColor:'white',width:'95%',fontFamily:'Avenir-Heavy'}}
                            underlineColor='#E5E5E5'
                        // value={text}
                        // onChangeText={(text) => setText(text)}
                         />
</View>
<View style={{marginLeft:10}}>
   
    <TextInput
                          theme={{ colors: { primary: "#2AD95A" }}}
                          label="Description"
                          numberOfLines={3}
                            style={{backgroundColor:'white',height:90,width:'95%',fontFamily:'Avenir-Heavy'}}
                            underlineColor='#E5E5E5'
                        // value={text}
                        // onChangeText={(text) => setText(text)}
                         />
</View>

<TouchableOpacity style={{width:'90%',height:45,justifyContent:'center',alignSelf:'center',alignItems:'center',marginTop:30,backgroundColor:Colors.BLUE,borderRadius:5}}
       onPress={this.toggleModal}
       >
                <Text style={{fontSize:14,color:'white',fontFamily:'Avenir-Heavy'}}>Next - Invite Members</Text>
              </TouchableOpacity>

              <Modal isVisible={this.state.invite} animationIn={'slideInUp'} onBackdropPress={this.toggleModal}>
          <View style={{ position:'absolute',bottom:2,borderTopLeftRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopRightRadius:20,width:Devicewidth,height:Deviceheight/2.2,alignSelf:'center',backgroundColor:'white' }}>
                <View style={{width:150,height:8,borderRadius:10,marginTop:5,alignSelf:'center',backgroundColor:'#dedede'}}></View>
<View style={{width:'75%',alignSelf:"center",marginTop:0}}>
<Text style={{marginTop:15,lineHeight:25,marginBottom:10,fontFamily:'Avenir-Heavy',fontStyle:'normal',color:Colors.HEADING,fontSize:20}}>Invite via</Text>

<FlatList
        data={SocialInvite}
        // horizontal={true}
        renderItem={({ item }) => (
         <View>
              <TouchableOpacity onPress={this.Invite}>
             <Image source={item.image} style={{width:60,height:60,margin:15}}/>
             </TouchableOpacity>
             </View>
        )}
        numColumns={3}
      />

</View>
         

{/*          
         
         <TouchableOpacity onPress={this.Invite}>
         <Image source={require('../Images/temp.jpg')} style={{resizeMode:'contain',width:'100%',height:'90%'}} />
         </TouchableOpacity> */}
          </View>
        </Modal>
            </View>
        )
    }
}

export default MakeProgram
