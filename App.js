import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Screens/Splash'
import Login from './Screens/Auth/Login'
import Home from './Screens/Home'
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign'
import Profile from './Screens/Profiles/Profile'
import Wallet from './Screens/Wallet'
import Add from './Screens/Add'
import Signup from './Screens/Auth/Signup'
import OnBoard from './Screens/Auth/OnBoard'
import ResetPassword from './Screens/Auth/ResetPassword'
import Programs from './Screens/Programs'
import { NavigationContainer } from '@react-navigation/native';
import Members from './Screens/Members'
import Funds from './Screens/Funds'
import Withdraw from './Screens/Withdraw'
import EditList from './Screens/EditList'
import EditProfile from './Screens/Profiles/EditProfile'
import MyPrograms from './Screens/Profiles/MyPrograms'
import Notifications from './Screens/Profiles/Notifications'
import Privacy from './Screens/Profiles/Privacy'
import CardWithdraw from './Screens/CardWithdraw'
import Addnewcard from './Screens/Addnewcard'
import MakeProgram from './Screens/MakeProgram'
import TermsandCondition from './Screens/TermandCondition'
import EditProgram from './Screens/EditProgram'
import Home2 from './Screens/Home2'
import PhoneVerification from './Screens/Auth/PhoneVerification'
import MessageNotification from './Screens/Message/Notification'
import PaymentMethod from './Screens/PaymentMethod'
import Chat from './Screens/Message/Chat'
import { Colors } from './Screens/Comon/colors';
import OTPVerification from './Screens/Auth/OTPVerification'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="onBoard" component={OnBoard} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
      <Stack.Screen name="PhoneVerification" component={PhoneVerification} />

      <Stack.Screen name="Withdraw" component={Withdraw} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Home2" component={BottomTabNavigatorB} />
      <Stack.Screen name="Funds" component={Funds} />
      <Stack.Screen name="MessageNotification" component={MessageNotification} />
      <Stack.Screen name="MakeProgram" component={MakeProgram} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Tab.Screen name="Programs" component={ProgramsStack} />


      

      

    </Stack.Navigator>
  );
}
function HomeStackB() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Home2" component={Home2} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Funds" component={Funds} />
      <Stack.Screen name="Withdraw" component={Withdraw} />
      <Stack.Screen name="MessageNotification" component={MessageNotification} />
      {/* <Stack.Screen name="MakeProgram" component={MakeProgram} /> */}
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      {/* <Tab.Screen name="Programs" component={Programs} /> */}
    </Stack.Navigator>
  );
}
function HomeAStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Home2" component={Home2} />
      <Stack.Screen name="Funds" component={Funds} />
      <Stack.Screen name="Withdraw" component={Withdraw} />
      <Stack.Screen name="MessageNotification" component={MessageNotification} />
      {/* <Stack.Screen name="MakeProgram" component={MakeProgram} /> */}
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      {/* <Tab.Screen name="Programs" component={Programs} /> */}
    </Stack.Navigator>
  );
}
function WalletStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="CardWithdraw" component={CardWithdraw} />
      <Stack.Screen name="Addnewcard" component={Addnewcard} />
    </Stack.Navigator>
  );
}
function AddStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="." component={Add} />
      <Stack.Screen name="TermsandCondition" component={TermsandCondition} />
      <Stack.Screen name="EditProgram" component={EditProgram} />
    </Stack.Navigator>
  );
}
function ProgramsStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Programs" component={Programs} />
      <Stack.Screen name="Members" component={Members} />
      <Stack.Screen name="EditList" component={EditList} />

    </Stack.Navigator>
  );
}
function ProfileStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="MyPrograms" component={MyPrograms} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Programs" component={Programs} />
      <Stack.Screen name="Privacy" component={Privacy} />

  

    </Stack.Navigator>
  );
}
export class App extends Component {
  render() {
    return (
      <NavigationContainer>
<HomeStack />
      </NavigationContainer>
     
    )
  }
}
const BottomTabNavigator = ()=>{
  return(
  <Tab.Navigator screenOptions={({route,navigation})=>({
tabBarIcon:({color,size})=>{
  var iconName
  if(route.name=="Home"){
    iconName ='home'
  }
  else if(route.name=="Programs"){
    iconName='barchart'
  }
  else if(route.name=="."){
    return (
<View style={{width:65,height:65,justifyContent:'center',alignItems:'center',borderRadius:40,borderWidth:5,borderColor:'#FFFFFF',backgroundColor:Colors.BLUE}}>
<Icon name='plus' size={24} color='#A6E8FF' />
</View>
    )
    
  }
  else if(route.name=="Wallet"){
iconName='wallet'
  }
  else if(route.name=="Profile"){
    iconName='user'
  }
  return <Icon name={iconName} size={20} color={color} />
}
  })}>
      <Tab.Screen name="Home" component={HomeAStack} />
      <Tab.Screen name="Programs" component={ProgramsStack} />
      <Tab.Screen name="." component={AddStack} />
      <Tab.Screen name="Wallet" component={WalletStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />

 </Tab.Navigator>
  );
}
const BottomTabNavigatorB = ()=>{
  return(
  <Tab.Navigator screenOptions={({route,navigation})=>({
tabBarIcon:({color,size})=>{
  var iconName
  if(route.name=="Home"){
    iconName ='home'
  }
  else if(route.name=="Programs"){
    iconName='barchart'
  }
  else if(route.name=="."){
    return (
<View style={{width:65,height:65,justifyContent:'center',alignItems:'center',borderRadius:40,borderWidth:5,borderColor:'#FFFFFF',backgroundColor:Colors.BLUE}}>
<Icon name='plus' size={24} color='#A6E8FF' />
</View>
    )
    
  }
  else if(route.name=="Wallet"){
iconName='wallet'
  }
  else if(route.name=="Profile"){
    iconName='user'
  }
  return <Icon name={iconName} size={20} color={color} />
}
  })}>
      <Tab.Screen name="Home" component={HomeStackB} />
      <Tab.Screen name="Programs" component={ProgramsStack} />
      <Tab.Screen name="." component={AddStack} />
      <Tab.Screen name="Wallet" component={WalletStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />

 </Tab.Navigator>
  );
}

export default App
