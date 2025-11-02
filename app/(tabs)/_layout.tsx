import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                headerShown: true,
                tabBarButton: HapticTab,
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme ?? "light"].background
                },
                headerTintColor: Colors[colorScheme ?? "light"].tint,
                headerStyle: {
                    backgroundColor: Colors[colorScheme ?? "light"].background
                }
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                }}
            />
            <Tabs.Screen
                name="calendar"
                options={{
                    title: "Calendar",
                }}
            />
            <Tabs.Screen
                name="map"
                options={{
                    title: "Map",
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: "History",
                }}
            />
        </Tabs>
    );
}
