import { useState } from "react";
import { Text, ScrollView, View } from "react-native";
import UserInput from "../components/auth/UserInput";
import SubmitButon from "../components/auth/SubmitButton";
import axios from "axios";
import CircularLogo from "../components/auth/CircularLogo";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !passowrd) {
      alert("Please fill all the fields");
      setLoading(false);
      return;
    }
    console.log("SIGNUP REQUEST => ", email, passowrd);
    try {
      const { data } = await axios.post("http://localhost:3000/api/singin", {
        email,
        passowrd,
      });
      console.log("SIGN IN SUCCESS => ", data);
      alert("Sign in Success");
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
          Sign In
        </Text>
        <UserInput
          name="EMAIL"
          vlaue={email}
          setValue={setEmail}
          autoCapitalize="email"
          keyboardType="email-address"
        />
        <UserInput
          name="PASSWORD"
          value={passowrd}
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
            color: "#ff9900",
          }}
        >
          Forget password?
        </Text>
        <Text
          style={{
            alignSelf: "center",
          }}
        >
          Haven't Joined?{" "}
          <Text
            style={{
              color: "#ff9900",
            }}
          >
            Sign Un
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signin;
