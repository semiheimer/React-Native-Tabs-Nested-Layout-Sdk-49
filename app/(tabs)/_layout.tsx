import { Tabs } from "expo-router";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          href: "home",
          tabBarIcon: () => <Icon size={20} name={"home"} color={"blue"} />,
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: "Lists",
          href: "list",
          headerShown: false,
          tabBarIcon: () => <Icon size={20} name={"list"} color={"blue"} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
