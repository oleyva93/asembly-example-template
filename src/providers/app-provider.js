import { useSession } from "@/hooks/useSession";
import createInternalCtx from "@/lib/create-context";
import cookieCutter from "cookie-cutter";

const { Provider, useStore } = createInternalCtx({
  user: undefined,
  userStatus: undefined,
  isAuth: () =>
    typeof window !== "undefined"
      ? Boolean(cookieCutter.get("access_token"))
      : false,
});

export const useAppCtx = (selector) => useStore(selector || ((state) => state));

const WrapperApp = ({ children }) => {
  const [state, setState] = useAppCtx();

  useSession({
    enabled: state.isAuth(),
    onSuccess: (data) => {
      setState({ user: data?.user, userStatus: data?.status });
    },
  });

  return typeof children === "function" ? children(state, setState) : children;
};

const AppProvider = ({ children }) => {
  return (
    <Provider>
      <WrapperApp>{children}</WrapperApp>
    </Provider>
  );
};

export default AppProvider;
