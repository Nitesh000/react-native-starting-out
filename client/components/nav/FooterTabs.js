import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Divider } from "react-native-elements";

export const Tabs = ({ name, title, handlePress, screenName, routeName }) => {
  const activeScreenColor = screenName === routeName && "orange";

  return (
    <TouchableOpacity>
      <>
        <FontAwesome5
          name={name}
          size={25}
          style={{ marginBottom: 3, alignSelf: "center" }}
          color={activeScreenColor}
          onPress={handlePress}
        />
        <Text>{title}</Text>
      </>
    </TouchableOpacity>
  );
};

export default FooterTabs = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "flex-end" }}>
      <Divider width={1} />
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          marginHorizontal: 35,
          justifyContent: "space-between",
        }}
      >
        <Tabs
          name="home"
          title="Home"
          handlePress={() => navigation.navigate("Home")}
          screenName="Home"
          routeName={route.name}
        />
        <Tabs
          name="plus-square"
          title="Post"
          handlePress={() => navigation.navigate("Post")}
          screenName="Post"
          routeName={route.name}
        />
        <Tabs
          name="list-ol"
          title="Links"
          handlePress={() => navigation.navigate("Links")}
          screenName="Links"
          routeName={route.name}
        />
        <Tabs
          name="user"
          title="Account"
          handlePress={() => navigation.navigate("Account")}
          screenName="Account"
          routeName={route.name}
        />
      </View>
    </ScrollView>
  );
};
