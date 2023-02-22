import { useContext } from "react";
import { Text, SafeAreaView } from "react-native";
import AuthContext from "../context/auth";
import FooterTabs from "../components/nav/FooterTabs";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const [state, setState] = useContext(AuthContext);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight : 30,
      }}
    >
      <Text>{JSON.stringify(state, null, 4)}</Text>
      <FooterTabs />
    </SafeAreaView>
  );
};

export default Home;
