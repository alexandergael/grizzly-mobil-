import { Text, View } from "react-native";
import Container from "~/components/content/Container";

export default function HomePage() {
  return (
    <Container>
      <View className="flex justify-center items-center flex-1 bg-slate-400">
        <Text className="text-[28px]">page d'acceuill</Text>
      </View>
    </Container>
  );
}
