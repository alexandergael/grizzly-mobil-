import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import Tabs from "./tabs";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <SafeAreaView className="flex-1 relative">
      <View className="flex-1 bg-secondary/30 px-4 py-1 gap-2">
        <Header />
        {children}
      </View>
      <Tabs />
    </SafeAreaView>
  );
}
