import { atom } from "recoil";
export interface AuthModalState {
  open: Boolean;
  view: "login" | "signup" | "resetPassword";
}

const defaultModalState: AuthModalState = {
  open: false,
  view: "login",
};

export const authModalState = atom<AuthModalState>({
  key: "authModelState",
  default: defaultModalState,
});
