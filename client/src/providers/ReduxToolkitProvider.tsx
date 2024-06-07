import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux-toolkit/store";

const ReduxToolkitProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default ReduxToolkitProvider;
