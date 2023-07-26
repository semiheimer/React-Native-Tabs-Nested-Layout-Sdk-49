import { Stack, Link } from "expo-router";
import { Image } from "react-native";

function LogoTitle() {
  return (
    <Image
      style={{ width: 30, height: 30 }}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      resizeMode="contain"
    />
  );
}
const ListLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitle: "List Page",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    />
  );
};

export default ListLayout;
