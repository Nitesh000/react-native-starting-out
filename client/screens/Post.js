import { View, Text } from "react-native";
import FooterTabs from "../components/nav/FooterTabs";

const Post = () => {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <Text>Post Screen</Text>
      <FooterTabs />
    </View>
  );
};

export default Post;
