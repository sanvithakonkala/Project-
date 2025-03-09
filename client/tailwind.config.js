import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

const FeastoryAuth = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <View className="flex-1 bg-white items-center p-6">
      <Image source={require("./login.png")} className="w-32 h-32 mt-10" />
      <Text className="text-3xl font-bold text-black mt-4">Feastory</Text>
      <View className="flex-row mt-6">
        <TouchableOpacity
          className={`mr-4 pb-2 ${!isSignup ? "border-b-2 border-yellow-500" : "text-gray-400"}`}
          onPress={() => setIsSignup(false)}
        >
          <Text className="text-lg font-semibold">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`pb-2 ${isSignup ? "border-b-2 border-yellow-500" : "text-gray-400"}`}
          onPress={() => setIsSignup(true)}
        >
          <Text className="text-lg font-semibold">Signup</Text>
        </TouchableOpacity>
      </View>
      <View className="w-full mt-6">
        {isSignup && (
          <TextInput
            className="border-b border-gray-300 py-2 text-lg"
            placeholder="Username"
          />
        )}
        <TextInput
          className="border-b border-gray-300 py-2 text-lg mt-4"
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          className="border-b border-gray-300 py-2 text-lg mt-4"
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <TouchableOpacity className="bg-yellow-500 w-full py-3 rounded-lg mt-6">
        <Text className="text-white text-center text-lg font-semibold">CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeastoryAuth;