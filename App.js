import * as React from 'react';
import { Input, NativeBaseProvider, Button } from "native-base";
import { Text, ScrollView, ImageBackground, Dimensions, View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp'
// function Login({navigation}) {
//   return (
//     <NativeBaseProvider>
//     <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}
//         showsVerticalScrollIndicator={false}>
//         <ImageBackground
//             source={require('./bg.jpg')}
//             style={{ height: Dimensions.get('window').height / 3 }}>
//             <View style={styles.brandView}>
//                 <Ionicons name="fast-food-outline" size={50} color="white" />
//                 <Text style={styles.brandViewText}>Food Funday</Text>
//             </View>
//         </ImageBackground>
//         <View style={styles.bottomView}>
//             <View style={{ padding: 40 }}>
//                 <Text style={{ color: '#4632A1', fontSize: 34, textAlign: 'center' }}>Welcome</Text>
//                 <View style={{ marginTop: 10 }}>
//                     <Text style={{ color: 'black', fontWeight: 'bold' }}>Email</Text>
//                     <Input variant="rounded" placeholder="abc@gmail.com" style={{ marginBottom: 10 }} />
//                     <Text style={{ color: 'black', fontWeight: 'bold' }}>Password</Text>
//                     <Input variant="rounded" placeholder="********" />
//                 </View>
//                 <Text style={{ marginTop: 10 }}>
//                     Dont have an account?
//                     <Text style={{ color: 'red', fontStyle: 'italic' }}  onPress={() => navigation.navigate('SignUp')}>  Sign Up</Text>
//                 </Text>
//                 <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
//                     <Button
//                         size="lg"
//                         variant="outline" style={styles.shadowbtn}>
//                         Login
//                     </Button>
//                 </View>
//             </View>
//         </View>
//     </ScrollView>
// </NativeBaseProvider>
//   );
// }

// function SignUp({navigation}) {
//   return (
//     <NativeBaseProvider>
//     <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}
//         showsVerticalScrollIndicator={false}>
//         <ImageBackground
//             source={require('./bg.jpg')}
//             style={{ height: Dimensions.get('window').height / 3 }}>
//             <View style={styles.brandView}>
//                 <Ionicons name="fast-food-outline" size={50} color="white" />
//                 <Text style={styles.brandViewText}>Food Funday</Text>
//             </View>
//         </ImageBackground>
//         <View style={styles.bottomView}>
//             <View style={{ padding: 40 }}>
//                 <Text style={{ color: '#4632A1', fontSize: 34, textAlign: 'center' }}>Welcome</Text>
//                 <View style={{ marginTop: 10 }}>
//                     <Text style={{ color: 'black', fontWeight: 'bold' }}>UserName</Text>
//                     <Input variant="rounded" placeholder="abc" style={{ marginBottom: 10 }} />
//                     <Text style={{ color: 'black', fontWeight: 'bold' }}>Email</Text>
//                     <Input variant="rounded" placeholder="abc@gmail.com" style={{ marginBottom: 10 }} />
//                     <Text style={{ color: 'black', fontWeight: 'bold' }}>Password</Text>
//                     <Input variant="rounded" placeholder="********" />
//                 </View>
//                 <Text style={{ marginTop: 10 }}>
//                     Already a member?
//                     <Text style={{ color: 'red', fontStyle: 'italic' }}  onPress={() => navigation.navigate('Login')}>  Login</Text>
//                 </Text>
//                 <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
//                     <Button
//                         size="lg"
//                         variant="outline" style={styles.shadowbtn}
//                         onPress={() => navigation.navigate('Login')}>
//                         SignUp
//                     </Button>
//                 </View>
//             </View>
//         </View>
//     </ScrollView>
// </NativeBaseProvider>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}


        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerBackVisible: false,
            }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  brandView: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  brandViewText: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: '#ffffff',
    bottom: 90,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  loginBtn: {
    alignSelf: 'center',
    backgroundColor: '#4632A1',
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center'
  },
  shadowbtn: {
    shadowColor: "aqua",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    borderRadius: 50,
    width: 100
  }
});

// // In App.js in a new project

// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from './Component/Login/Login';
// import SignUp from './Component/SignUp/SignUp';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Signup" component={SignUp} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;