import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  ImageBackground,
  Animated,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  View,StatusBar
} from "react-native";
import * as Animatable from "react-native-animatable";
// import {Colors} from '../common/colors'
const SCREEN_HEIGHT = Dimensions.get("window").height;
export default class Splash extends Component {
  static navigationOptions = {
    header: null
  };
  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate("onBoard");
    }, 3000);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
      <View style={{flex:1,backgroundColor:'#0047CC',justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../Images/Oval.png')} style={{position:'absolute',right:0,top:0}}/>
        
          <Animatable.View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            animation="bounceIn"
            iterationCount={2}
          >
            <View
              style={{
                height: 60,
                width: 200,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center"
              }}
            >
             <Text style={{color:'white',fontWeight:'bold',fontSize:30}}>FuboOt</Text>
            </View>
          </Animatable.View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#2980b6",
    paddingVertical: 15
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  }
});