import { useContext } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import FooterTabs from "../components/nav/FooterTabs";
import AuthConext from "../context/auth";

const Account = () => {
  const [state, setState] = useContext(AuthContext);
  const { name, email, role } = state.user;

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "400",
          }}
        >
          {name}
        </Text>
        <Text>{email}</Text>
        <Text style={{ color: "#770000" }}>{role}</Text>
      </ScrollView>
      <FooterTabs />
    </SafeAreaView>
  );
};

export default Account;
