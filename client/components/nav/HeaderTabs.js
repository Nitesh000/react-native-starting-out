import { useContext } from "react";
import AuthContext from "../../context/auth";
import { TouchableOpacity, SafeAreaView } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HeaderTabs = () => {
  const [state, setState] = useContext(AuthContext);

  const singOut = async () => {
    setState({ token: "", user: null });
    await AsyncStorage.removeItem("@auth");
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={singOut}>
        <FontAwesome5 name="sign-out-alt" size={24} color="#ff9900" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HeaderTabs;
