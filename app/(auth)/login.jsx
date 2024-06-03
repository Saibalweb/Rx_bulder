import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomInput from '../../components/CustomInput'
import MIdBtn from '../../components/Prescription/MIdBtn'
import { Link } from 'expo-router'

const Login = () => {
  return (
    <SafeAreaView>
      <View className="felx-1  justify-center h-screen">
        <View>

        <Text className="text-3xl text-accent font-bold my-5 text-center">Login to DocRx</Text>
        <View className="mb-10">
          <CustomInput title={"Email"}/>
          <CustomInput title={"Password"}/>
        </View>
        <MIdBtn title={"Log In"}/>

        <Link href={"/signup"} asChild>
        <TouchableOpacity href={"/signup"}>
          <Text className="text-center text-accent text-lg">Don't have any account? Sign Up</Text>
        </TouchableOpacity>
        </Link>
        </View>
      </View>
    </SafeAreaView>

  )
}

export default Login;
