import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View className="bg-slate-400 ">
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="h-full flex justify-center items-center">
        <Text className="text-[28px] font-semibold">Page n'existe pas</Text>
      </View>
    </View>
  );
}
