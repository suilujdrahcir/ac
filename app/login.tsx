import { router } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { Typography } from '@/constants/styles/globalStyles';
import { useColorScheme } from '@/hooks/use-color-scheme.web';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSession } from './configs/ctx';

export default function Login() {
  const { signIn, user } = useSession();
  const colorScheme = useColorScheme() ?? 'light';
  const text = Typography(colorScheme);

  return (
    <SafeAreaView
      className={`container flex flex-col h-full justify-between items-center ${colorScheme !== 'light' ? 'bg-gray-900' : 'bg-white'}`}
    >
      <ThemedText type='title' className='p-[20px]'>Hi, {user.name}</ThemedText>
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
      <View style={{display:"flex", width:"100%", marginBottom:"15px", flexDirection: "row", justifyContent: "space-around"}}>
        <ThemedText>Terms & Conditions</ThemedText>
        <ThemedText>Help</ThemedText>
      </View>
    </SafeAreaView>
  );
}