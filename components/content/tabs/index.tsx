import {
  BarChart,
  BarChart2,
  Diameter,
  Home,
  MessageCircle,
  ParkingCircle,
  Play,
  PlayCircle,
  PlaySquare,
  UserRoundCog,
} from "lucide-react-native";
import React from "react";
import { View } from "react-native";
import TabItem from "./TabItem";
import { RelativePathString, useRouter, useSegments } from "expo-router";

type TabType = {
  // title: string;
  id: number;
  icon: React.ElementType;
  route: string;
};

const TABS: TabType[] = [
  { id: 1, icon: Home, route: "/" },
  { id: 2, icon: ParkingCircle, route: "/paris" },
  { id: 3, icon: MessageCircle, route: "/chat" },
  { id: 4, icon: PlayCircle, route: "/direct" },
  { id: 5, icon: UserRoundCog, route: "/settings" },
];

export default function Tabs() {
  const router = useRouter();
  const segments = useSegments();

  const currentRoute = `/${segments.join("/")}`;

  return (
    <View className="flex absolute bottom-0 py-2 w-full items-center justify-center">
      <View className="flex flex-row gap-1 justify-between items-center bg-white shadow-lg dark:bg-[#1f2937] rounded-3xl p-2">
        {TABS.map((tab) => {
          const isActive = currentRoute === tab.route;
          return (
            <TabItem
              key={tab.id}
              active={isActive}
              icon={tab.icon}
              onPress={() => router.push(tab.route as RelativePathString)}
            />
          );
        })}
      </View>
    </View>
  );
}
