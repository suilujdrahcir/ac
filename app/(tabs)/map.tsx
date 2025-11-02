import { ThemedView } from "@/components/themed-view";
import React from "react";
import { Button } from "react-native";
import { useSession } from "../configs/ctx";

export default function CalendarScreen() {
  const { signOut } = useSession();
  return (
    <ThemedView>
      <Button title="Logout" onPress={signOut} />
    </ThemedView>
  );
}
