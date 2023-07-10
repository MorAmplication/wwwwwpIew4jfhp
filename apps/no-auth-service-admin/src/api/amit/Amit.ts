import { JsonValue } from "type-fest";

export type Amit = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  roles: JsonValue;
};
