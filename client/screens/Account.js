import { useContext, useEffect, useState } from "react";
import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import UserInput from "../components/auth/UserInput";
import SubmitButon from "../components/auth/SubmitButton";
import axios from "axios";
import CircularLogo from "../components/auth/CircularLogo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContext from "../context/auth";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Account = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // context
  const [state, setState] = useContext(AuthContext);

  useEffect(() => {
    if (state) {
      const { name, email, image, role } = state.user;
      setName(name);
      setEmail(email);
      setImage(image);
      setRole(role);
    }
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !password) {
      alert("Please fill all the fields");
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.post(`/signin`, {
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
        console.log("SIGN IN SUCCESS => ", JSON.stringify(data));
        alert("Sign in Success");
        // navigation
        navigation.navigate("Home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpload = () => {};

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        marginVertical: 20,
      }}
    >
      <View style={{ marginVertical: 100 }}>
        <CircularLogo>
          {image && image.url ? (
            <Image
              source={{ uri: image.url }}
              style={{
                width: 200,
                height: 200,
                borderRadius: 125,
                marginVertical: 20,
              }}
            />
          ) : (
            <TouchableOpacity onPress={() => handleUpload()}>
              <FontAwesome5 name="camera" size={25} color="orange" />
            </TouchableOpacity>
          )}
        </CircularLogo>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
            marginBottom: 5,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "300",
            color: "#333",
            textAlign: "center",
            marginBottom: 5,
          }}
        >
          {email}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "300",
            color: "#333",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          {role}
        </Text>
        <UserInput
          name="Update Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          autoCompleteType="password"
        />

        <SubmitButon
          title="Change Password"
          handleSubmit={handleSubmit}
          loading={loading}
        />
        <SubmitButon
          title="Logout"
          handleSubmit={handleSubmit}
          loading={loading}
        />
      </View>
    </ScrollView>
  );
};

export default Account;
