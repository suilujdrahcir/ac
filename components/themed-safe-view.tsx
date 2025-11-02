import { useColorScheme, type ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function ThemedSaveView({
    style,
    className = "",
    ...otherProps
}: ViewProps) {
    const colorScheme = useColorScheme() ?? "light";

    return <SafeAreaView className={`container ${colorScheme !== 'light' ? "bg-gray-800" : "bg-white"} ${className}`} style={[style]} {...otherProps} />;
}
