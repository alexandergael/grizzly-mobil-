import React from "react";
import { TouchableOpacity, View } from "react-native";
import { cn } from "~/lib/utils";

type TabItemProps = {
  icon: React.ElementType;
  active?: boolean;
  onPress?: () => void;
};

export default function TabItem({ icon: Icon, active, onPress }: TabItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        "flex items-center justify-center gap-1 px-4 py-2 rounded-xl",
        active ? "bg-[#23708e]" : "bg-transparent"
      )}
    >
      {/* Icône */}
      <View className="relative">
        <Icon width={19} height={19} color={active ? "#FFFFFF" : "#A0A0A0"} />
      </View>
    </TouchableOpacity>
  );
}
