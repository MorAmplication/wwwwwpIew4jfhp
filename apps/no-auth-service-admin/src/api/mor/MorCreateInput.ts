import { InputJsonValue } from "../../types";

export type MorCreateInput = {
  username: string;
  password: string;
  roles: InputJsonValue;
};
