import { router } from "expo-router";

import { ThemedInput } from "@/components/themed-input";
import { ThemedSaveView } from "@/components/themed-safe-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import { useState } from "react";
import { useSession } from "./configs/ctx";

export default function Login() {
    const { signIn, changeUser, user, isLoadingUser } = useSession();
    const colorScheme = useColorScheme() ?? "light";
    const [refreshKey, setRefreshKey] = useState(0)

    return (
        <ThemedSaveView
            key={refreshKey}
            className="flex flex-col h-full justify-center items-center"
        >
            <ThemedView className="h-[50%] flex justify-center items-center">
                {user 
                    ?
                        <ThemedText type="title" >
                            Hi, {user.name}
                        </ThemedText>
                
                    :
                        <ThemedView>
                            <ThemedText type="title" className="text-center mb-6">
                                Account
                            </ThemedText>
                            <ThemedInput
                                inputAccessoryViewID="usernameInput"
                                placeholder="Username or Email"
                            />
                            <ThemedInput 
                                inputAccessoryViewID="passwordInput"
                                placeholder="Password"
                                secureTextEntry={true}
                            />
                        </ThemedView>
                }
            </ThemedView>
            <ThemedView
                className="h-[50%] flex flex-col justify-between items-center"

                >
                <ThemedView className="flex flex-row justify-center">
                    <ThemedText
                        className="text-center text-blue-500 font-medium"
                        onPress={() => {
                            signIn();
                            router.replace("/home");
                        }}
                    >
                        Sign In
                    </ThemedText>
                    { 
                        user ?
                            <ThemedText 
                                className="text-center text-gray-500"
                                onPress={() => {
                                    changeUser();
                                    setRefreshKey(k => k + 1);
                                }}
                            >Change User</ThemedText>
                        :
                            <ThemedText 
                                onPress={() => {
                                    router.push("/(modals)/signup");
                                }}
                            >Sign Up</ThemedText>
                    }
                </ThemedView>
                <ThemedView
                    className="w-[100%] flex flex-row justify-between"
                >
                    <ThemedText>Terms & Conditions</ThemedText>
                    <ThemedText>Help</ThemedText>
                </ThemedView>
            </ThemedView>
        </ThemedSaveView>
    );
}
