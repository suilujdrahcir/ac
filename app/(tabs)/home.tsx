import React from "react";
import { Button, Text, View } from "react-native";
import { useSession } from "../configs/ctx";

export default function HomeScreen() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome Home!</Text>
      <Button title="Logout" onPress={signOut} />
    </View>
  );
}
