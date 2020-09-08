import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import {Left,Right,Body} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import {Colors} from '../../Screens/Comon/colors'
export class MyPrograms extends Component {
    constructor(props){
        super(props);
        this.state={
            Ongoing:true,
            Completed:false
        }
    }
    render() {
        return (
            <View style={{flex:1 ,backgroundColor:'white'}}>
                  <View style={{width:'100%',flexDirection:'row',height:'8%',elevation:1,backgroundColor:'white'}}>
            <Left style={{flexDirection:'row',marginLeft:10}}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                <Icon name='arrowleft' size={20} style={{paddingTop:5}} />

                </TouchableOpacity>
                <Text style={{fontSize:18,marginLeft:15,color:Colors.HEADING,fontFamily:'Avenir-Black',letterSpacing:0.4}}>
                  My Programs
                </Text>
            </Left>
            <Right style={{marginRight:10}}>
                <Icon name={this.props.Right} size={20} color={Colors.HEADING} />
            </Right>
              </View>

              <View style={{width:'100%',height:50,justifyContent:'space-evenly',flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>this.setState({
                    Ongoing:true,
                    Completed:false
                })}>
                    <Text style={{fontSize:18,color: this.state.Ongoing?Colors.HEADING:'#D8D8D8',fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Ongoing</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this.setState({
                    Ongoing:false,
                    Completed:true
                })}>
                    <Text style={{fontSize:18,color:this.state.Completed?Colors.HEADING:'#D8D8D8',fontFamily:'Avenir-Heavy',letterSpacing:0.4}}>Completed</Text>
                </TouchableOpacity>

              </View>
{this.state.Ongoing?
              <View>
<TouchableOpacity  onPress={()=>this.props.navigation.navigate('Programs')}>
                  <View style={{width:'100%',height:60,flexDirection:'row',marginTop:10}}>
                      <Left style={{flexDirection:'row',marginLeft:20}}>
                      <View style={{justifyContent:'center',alignItems:'center',width:40,height:40,borderRadius:5,backgroundColor: 'rgba(41, 191, 118, 0.1)'}}>
                        <Icon name='creditcard' size={20} color='#1BC773'/>
                    </View>
                    <Text style={{fontSize:16,color:Colors.HEADING,fontFamily:'Avenir-Heavy',letterSpacing:0.4,marginLeft:10,marginTop:7,width:150}}>School Funds</Text>
                      </Left>
<Body></Body>
                      <Right style={{flexDirection:'row',marginRight:20}}>
                          <Text style={{fontSize:16,color:Colors.HEADING,fontFamily:'Avenir-Heavy',letterSpacing:0.4,marginLeft:10,paddingTop:2}}>
                              $5,000
                          </Text>
                          <Icon name='right' size={16} style={{paddingTop:2,marginLeft:20}}/>
                      </Right>
         
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Programs')}>
                  <View style={{width:'100%',height:60,flexDirection:'row',marginTop:10}}>
                      <Left style={{flexDirection:'row',marginLeft:20}}>
                      <View style={{justifyContent:'center',alignItems:'center',width:40,height:40,borderRadius:5,backgroundColor: 'rgba(41, 191, 118, 0.1)'}}>
                        <Icon name='creditcard' size={20} color='#1BC773'/>
                    </View>
                    <Text style={{fontSize:16,color:Colors.HEADING,fontFamily:'Avenir-Heavy',letterSpacing:0.4,marginLeft:10,marginTop:7}}>Car Fund</Text>
                      </Left>
<Body></Body>
                      <Right style={{flexDirection:'row',marginRight:20}}>
                          <Text style={{fontSize:16,color:Colors.HEADING,fontFamily:'Avenir-Heavy',letterSpacing:0.4,marginLeft:10,paddingTop:2}}>
                              $5,000
                          </Text>
                          <Icon name='right' size={16} style={{paddingTop:2,marginLeft:20}}/>
                      </Right>
         
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Programs')}>
                  <View style={{width:'100%',height:60,flexDirection:'row',marginTop:10}}>
                      <Left style={{flexDirection:'row',marginLeft:20}}>
                      <View style={{justifyContent:'center',alignItems:'center',width:40,height:40,borderRadius:5,backgroundColor: 'rgba(41, 191, 118, 0.1)'}}>
                      <Icon name='creditcard' size={20} color='#1BC773'/>
                    </View>
                    <Text style={{fontSize:16,color:Colors.HEADING,fontFamily:'Avenir-Heavy',letterSpacing:0.4,marginLeft:10,marginTop:7}}>House Rent</Text>
                      </Left>
<Body></Body>
                      <Right style={{flexDirection:'row',marginRight:20}}>
                          <Text style={{fontSize:16,color:Colors.HEADING,fontFamily:'Avenir-Heavy',letterSpacing:0.4,marginLeft:10,paddingTop:2}}>
                              $5,000
                          </Text>
                          <Icon name='right' size={16} style={{paddingTop:2,marginLeft:20}}/>
                      </Right>
         
                  </View>
                  </TouchableOpacity>
              </View>:this.state.Completed?
              <View>
<TouchableOpacity  onPress={()=>this.props.navigation.navigate('Programs')}>
<View style={{width:'100%',height:60,flexDirection:'row',marginTop:10}}>
                      <Left style={{flexDirection:'row',marginLeft:20}}>
                      <View style={{justifyContent:'center',alignItems:'center',width:40,height:40,borderRadius:5,backgroundColor: 'rgba(242, 71, 80, 0.1)'}}>
                        <Icon name='check' size={15} color='red'/>
                    </View>
                    <Text style={{fontSize:16,color:Colors.HEADING,fontFamily:'Avenir-Heavy',letterSpacing:0.4,marginLeft:10,marginTop:7}}>Working Tax</Text>
                      </Left>
<Body></Body>
                      <Right style={{flexDirection:'row',marginRight:20}}>
                          <Text style={{fontSize:16,color:Colors.HEADING,fontFamily:'Avenir-Heavy',letterSpacing:0.4,marginLeft:10,paddingTop:2}}>
                              $5,000
                          </Text>
                          <Icon name='right' size={14} style={{paddingTop:2,marginLeft:20}}/>
                      </Right>
         
                  </View>
</TouchableOpacity>
                 
<TouchableOpacity  onPress={()=>this.props.navigation.navigate('Programs')}>
                  <View style={{width:'100%',height:60,flexDirection:'row',marginTop:10}}>
                      <Left style={{flexDirection:'row',marginLeft:20}}>
                      <View style={{justifyContent:'center',alignItems:'center',width:40,height:40,borderRadius:5,backgroundColor: 'rgba(242, 71, 80, 0.1)'}}>
                        <Icon name='check' size={15} color='red'/>
                    </View>
                    <Text style={{fontSize:16,color:Colors.HEADING,fontFamily:'Avenir-Heavy',letterSpacing:0.4,marginLeft:10,marginTop:7}}>Car Purchase</Text>
                      </Left>
<Body></Body>
                      <Right style={{flexDirection:'row',marginRight:20}}>
                          <Text style={{fontSize:16,color:Colors.HEADING,fontFamily:'Avenir-Heavy',letterSpacing:0.4,marginLeft:10,paddingTop:2}}>
                              $5,000
                          </Text>
                          <Icon name='right' size={14} style={{paddingTop:2,marginLeft:20}}/>
                      </Right>
         
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('Programs')}>
                  <View style={{width:'100%',height:60,flexDirection:'row',marginTop:10}}>
                      <Left style={{flexDirection:'row',marginLeft:20}}>
                      <View style={{justifyContent:'center',alignItems:'center',width:40,height:40,borderRadius:5,backgroundColor: 'rgba(242, 71, 80, 0.1)'}}>
                      <Icon name='check' size={15} color='red'/>
                    </View>
                    <Text style={{fontSize:16,color:Colors.HEADING,fontFamily:'Avenir-Heavy',letterSpacing:0.4,marginLeft:10,marginTop:7}}>House Rent</Text>
                      </Left>
<Body></Body>
                      <Right style={{flexDirection:'row',marginRight:20}}>
                          <Text style={{fontSize:16,color:Colors.HEADING,fontFamily:'Avenir-Heavy',letterSpacing:0.4,marginLeft:10,paddingTop:2}}>
                              $5,000
                          </Text>
                          <Icon name='right' size={14} style={{paddingTop:2,marginLeft:20}}/>
                      </Right>
         
                  </View>

</TouchableOpacity>
              </View>:<View></View>}
            </View>
        )
    }
}

export default MyPrograms
