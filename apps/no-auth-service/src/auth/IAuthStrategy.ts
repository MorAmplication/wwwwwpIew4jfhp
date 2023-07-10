import { MorInfo } from "./MorInfo";

export interface IAuthStrategy {
  validate: (...any: any) => Promise<MorInfo>;
}
