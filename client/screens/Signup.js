import { useState, useContext } from "react";
import { Text, ScrollView, View } from "react-native";
import UserInput from "../components/auth/UserInput";
import SubmitButon from "../components/auth/SubmitButton";
import axios from "axios";
import CircularLogo from "../components/auth/CircularLogo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContext from "../context/auth";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // context
  const [state, setState] = useContext(AuthContext);

  const handleSubmit = async () => {
    setLoading(true);
    if (!name || !email || !password) {
      alert("Please fill all the fields");
      setLoading(false);
      return;
    }
    console.log("SIGNUP REQUEST => ", name, email, password);
    try {
      const { data } = await axios.post(`/signup`, {
        name,
        email,
        password,
      });
      if (data.error) {
        alert(data.error);
        setLoading(false);
      } else {
        // save in context
        setState(data);
        // save the response in async storage
        await AsyncStorage.setItem("@auth", JSON.stringify(data));
        setLoading(false);
        console.log("SIGN IN SUCCESS => ", data);
        alert("Sign Up Success");
        navigation.navigate("Home");
      }
      // redirect
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        marginVertical: 20,
      }}
    >
      <View style={{ marginVertical: 100 }}>
        <CircularLogo />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Sign Up
        </Text>
        <UserInput
          name="Name"
          value={name}
          setValue={setName}
          autoCapitalize="words"
        />
        <UserInput
          name="EMAIL"
          vlaue={email}
          setValue={setEmail}
          autoCapitalize="email"
          keyboardType="email-address"
        />
        <UserInput
          name="PASSWORD"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          autoCompleteType="password"
        />

        <SubmitButon
          title="Sign Up"
          handleSubmit={handleSubmit}
          loading={loading}
        />
        <Text
          style={{
            alignSelf: "center",
          }}
        >
          Already Joined?{" "}
          <Text
            style={{
              color: "#ff9900",
            }}
            onPress={() => navigation.navigate("Signin")}
          >
            Sign In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;
