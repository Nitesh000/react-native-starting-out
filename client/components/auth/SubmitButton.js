import { TouchableOpacity, Text } from "react-native";

const SubmitButon = ({ title, handleSubmit, loading }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#ff9900",
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        marginHorizontal: 24,
        borderRadius: 24,
      }}
      onPress={handleSubmit}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          alignSelf: "center",
        }}
      >
        {loading ? "Please wait..." : title}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButon;
