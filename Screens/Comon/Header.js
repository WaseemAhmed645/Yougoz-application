import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Colors} from './colors'
import {Left,Right} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
export class Header extends Component {
    render() {
        return (
            <View style={{width:'100%',flexDirection:'row',height:'10%',backgroundColor:Colors.BACKGROUND}}>
            <Left style={{flexDirection:'row',marginLeft:10}}>
                <Icon name={this.props.Arrow} size={20} style={{paddingTop:2}} />
                <Text style={{fontSize:16,marginLeft:15,color:Colors.HEADING,fontWeight:'bold'}}>
                    {this.props.text}
                </Text>
            </Left>
            <Right style={{marginRight:10}}>
                <Icon name={this.props.Right} size={20} color={Colors.BLUE} />
            </Right>
              </View>
        )
    }
}

export default Header
