import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const Tabs = ({ name, title }) => {
  return (
    <TouchableOpacity>
      <>
        <FontAwesome5
          name={name}
          size={25}
          style={{ marginBottom: 3, alignSelf: "center" }}
          color="#000"
        />
        <Text>{title}</Text>
      </>
    </TouchableOpacity>
  );
};

export default FooterTabs = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 35,
        justifyContent: "space-between",
      }}
    >
      <Tabs name="home" title="Home" />
      <Tabs name="plus-square" title="Post" />
      <Tabs name="list-ol" title="Links" />
      <Tabs name="user" title="Account" />
    </View>
  );
};
