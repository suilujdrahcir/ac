import { Text, useColorScheme, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
    type?: "default" | "title" | "subtitle" | "link";
};

export type TypeClassNames = {
    default: string;
    title: string;
    subtitle: string;
    link: string;
};

export function ThemedText({
    style,
    className = "",
    type = "default",
    ...rest
}: ThemedTextProps) {
    const colorScheme = useColorScheme() ?? "light";
    const typeClassNames: TypeClassNames = {
        default: "text-[16px]",
        title: "text-[32px] font-bold leading-[1.4]",
        subtitle: "text-[20px] font-semibold ",
        link: "text-[16px] text-blue-700",
    };

    return (
        <Text
            style={[style]}
            className={`p-[15px] ${colorScheme === "light" ? "text-[#11181C]" : "text-[#ECEDEE]"} ${typeClassNames[type] ?? ""} ${className}`}
            {...rest}
        />
    );
}
