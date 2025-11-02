import { ThemedInput } from "@/components/themed-input";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { router } from "expo-router";
import { View } from "react-native";

export default function SignupModal() {
    return (
        <ThemedView className="flex-1 justify-center px-6">
            <ThemedText type="title" className="text-center mb-6">
                Create an Account
            </ThemedText>

            <ThemedInput placeholder="Full Name" />
            <View className="h-4" />
            <ThemedInput placeholder="Email" keyboardType="email-address" />
            <View className="h-4" />
            <ThemedInput placeholder="Password" secureTextEntry />
            <View className="h-8" />

            <ThemedView className="flex flex-row justify-center">
                <ThemedText
                    className="text-center text-blue-500 font-medium"
                    onPress={() => {
                        // handle signup logic here
                        router.back(); // closes modal
                    }}
                >
                    Sign Up
                </ThemedText>

                <ThemedText
                    className="text-center text-gray-500"
                    onPress={() => router.replace("/login")}
                >
                    Cancel
                </ThemedText>
            </ThemedView>

        </ThemedView>
    );
}
