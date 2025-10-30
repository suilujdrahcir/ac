import { Stack } from 'expo-router';

import { SessionProvider, useSession } from './configs/ctx';
import { SplashScreenController } from './configs/splash';

export default function Root() {
  // Set up the auth context and render your layout inside of it.
  return (
    <SessionProvider>
      <SplashScreenController />
      <RootNavigator />
    </SessionProvider>
  );
}

// Create a new component that can access the SessionProvider context later.
function RootNavigator() {
 const { session } = useSession();

  return (
    <Stack screenOptions={{ headerShown: !!session}}>
      <Stack.Protected guard={!!session}>
        <Stack.Screen name="(tabs)" />
      </Stack.Protected>

      <Stack.Protected guard={!session} >
        <Stack.Screen name="login" />
      </Stack.Protected>
    </Stack>
  );
}
