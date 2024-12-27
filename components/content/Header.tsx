import React from "react";
import { Text, View } from "react-native";
// import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { ThemeToggle } from "./ThemeToggle";

// const GITHUB_AVATAR_URI = "https://github.com/mrzachnugent.png";

export default function Header() {
  return (
    <View className="flex flex-row w-full items-center justify-between">
      <View className="flex flex-row">
        <Text className="font-bold text-2xl text-blue-500/100 dark:text-white">
          Grizzly
        </Text>
      </View>

      <View className="flex  flex-row items-center gap-1">
        <ThemeToggle />
        {/* <Avatar alt="Zach Nugent's Avatar">
          <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
          <AvatarFallback>
            <Text>ZN</Text>
          </AvatarFallback>
        </Avatar> */}
      </View>
    </View>
  );
}
