import { createContext, use, type PropsWithChildren } from "react";

import { useStorageState } from "./useStorageState";

const AuthContext = createContext<{
    signIn: () => void;
    signOut: () => void;
    changeUser: () => void;
    session?: string | null;
    isLoading: boolean;
    isLoadingUser: boolean;
    user: {
        name: string | null;
    } | null;
}>({
    signIn: () => null,
    signOut: () => null,
    changeUser: () => null,
    session: null,
    isLoading: false,
    isLoadingUser: false,
    user: null,
});

// Use this hook to access the user info.
export function useSession() {
    const value = use(AuthContext);
    if (!value) {
        throw new Error("useSession must be wrapped in a <SessionProvider />");
    }

    return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
    const [[isLoading, session], setSession] = useStorageState("session");
    const [[isLoadingUser, user], setUser] = useStorageState("user");

    return (
        <AuthContext.Provider
            value={{
                signIn: () => {
                    // Perform sign-in logic here
                    setSession("admin");
                    setUser("admin");
                },
                signOut: () => {
                    setSession(null);
                },
                changeUser: () => {
                    setUser(null);
                },
                session,
                isLoading,
                isLoadingUser,
                user: user 
                    ? {
                        name: user
                    }
                    : null,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
