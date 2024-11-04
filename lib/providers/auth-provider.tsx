import { View, Text } from "react-native";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../supabase";

type AuthData = {
  session: Session | null;
  mounting: boolean;
  user: any;
};
const AuthContext = createContext<AuthData>({
  session: null,
  mounting: true,
  user: null,
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState(null);
  const [mounting, setMounting] = useState<boolean>(true);
  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);

      if (session) {
        const { data: user, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", session.user.id)
          .single();

        if (error) console.error("ERROR", error);
        else setUser(user);
      }
    };
    fetchSession();
    supabase.auth.onAuthStateChange((e, session) => {
      setSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, mounting, session }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
