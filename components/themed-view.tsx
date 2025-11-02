import { useColorScheme, View, type ViewProps } from "react-native";

export function ThemedView({
    style,
    className = "",
    ...otherProps
}: ViewProps) {
    const colorScheme = useColorScheme() ?? "light";

    return <View className={`container p-2 ${colorScheme !== 'light' ? "bg-gray-900" : "bg-gray-50"} ${className}`} style={[style]} {...otherProps} />;
}
