import { View, TouchableOpacity, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-elements";

export const Tabs = ({ name, title, handlePress }) => {
  return (
    <TouchableOpacity>
      <>
        <FontAwesome5
          name={name}
          size={25}
          style={{ marginBottom: 3, alignSelf: "center" }}
          color="#000"
          onPress={handlePress}
        />
        <Text>{title}</Text>
      </>
    </TouchableOpacity>
  );
};

export default FooterTabs = () => {
  const navigation = useNavigation();
  return (
    <View>
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
        />
        <Tabs
          name="plus-square"
          title="Post"
          handlePress={() => navigation.navigate("Post")}
        />
        <Tabs
          name="list-ol"
          title="Links"
          handlePress={() => navigation.navigate("Links")}
        />
        <Tabs
          name="user"
          title="Account"
          handlePress={() => navigation.navigate("Account")}
        />
      </View>
    </View>
  );
};
