/// <reference types="react" />
declare module "ShellApp/Layout" {
  const Layout: React.FunctionComponent;
  export default Layout;
}

declare module "ShellApp/useStore" {
  import { UseBoundStore, StoreApi } from "zustand";
  import { Account } from "types-shared";
  const useStore: UseBoundStore<StoreApi<Account>>;
  export default useStore;
}
