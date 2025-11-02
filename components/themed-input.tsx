import { useColorScheme } from "@/hooks/use-color-scheme";
import { TextInput, TextInputProps, View } from "react-native";

export function ThemedInput({ style, ...otherProps }: TextInputProps) {
  const colorScheme = useColorScheme() ?? "light";

  const isDark = colorScheme === "dark";

  return (
    <View className="w-full p-2">
      <TextInput
        className={`
          w-full
          px-4 py-3
          rounded-2xl
          text-base
          border
          ${isDark ? "bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400" 
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"}
          focus:border-blue-500
        `}
        placeholderTextColor={isDark ? "#9CA3AF" : "#6B7280"}
        style={style}
        {...otherProps}
      />
    </View>
  );
}
