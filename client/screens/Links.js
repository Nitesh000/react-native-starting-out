import { View, Text } from "react-native";
import FooterTabs from "../components/nav/FooterTabs";

const Links = () => {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <Text>Link Screen</Text>
      <FooterTabs />
    </View>
  );
};

export default Links;
