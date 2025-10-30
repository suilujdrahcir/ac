import { Redirect } from 'expo-router';
import React from 'react';
import { useSession } from './configs/ctx';
export default function Index() {
  const { session } = useSession()
  // Just redirect to your main tab screen
  return <Redirect href={session ? "/home" : "/login"} />;
}
