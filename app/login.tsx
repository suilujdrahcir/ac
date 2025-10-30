import { router } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Typography } from '@/constants/styles/globalStyles';
import { useColorScheme } from '@/hooks/use-color-scheme.web';
import { useSession } from './configs/ctx';

export default function Login() {
  const { signIn, user } = useSession();
  const colorScheme = useColorScheme() ?? 'light';
  const text = Typography(colorScheme);

  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}
    >
      <ThemedText type='title' style={{marginTop:"20%"}}>Hi, {user.name}</ThemedText>
      <ThemedText
        onPress={() => {
          signIn();
          router.replace("/home");
        }}
      >
        Sign In
      </ThemedText>
      <ThemedText>
        Change User
      </ThemedText>
      <ThemedView style={{display:"flex", width:"100%", marginBottom:"15px", flexDirection: "row", justifyContent: "space-around"}}>
        <ThemedText>Terms & Condition</ThemedText>
        <ThemedText>Help</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}