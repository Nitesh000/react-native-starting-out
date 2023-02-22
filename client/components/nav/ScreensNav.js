import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../../screens/Signup";
import Signin from "../../screens/Signin";
import Home from "../../screens/Home";
import AuthContext from "../../context/auth";
import { useContext } from "react";
import HeaderTabs from "./HeaderTabs";

const Stack = createNativeStackNavigator();

export default function ScreensNav() {
  const [state, setState] = useContext(AuthContext);

  const authenticated = state && state.token !== "" && state.user !== null;
  console.log("AUTHENTICATED ==>", authenticated);

  return (
    <Stack.Navigator
      initialRouteName="Signin"
      screenOptions={{ headerShown: true }}
    >
      {authenticated ? (
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Links Daily",
            headerRight: () => <HeaderTabs />,
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
