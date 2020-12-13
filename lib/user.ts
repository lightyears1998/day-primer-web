import {
  ConfigKey, getConfig, saveConfig
} from "./config";

export class User {
  userId: number
  username: string
}

export function getUser(): User {
  return getConfig(ConfigKey.User) as User;
}

export function setUser(user: User): void {
  saveConfig(ConfigKey.User, user);
}

export function logout(): void {
  saveConfig(ConfigKey.User, null);
  window.location.reload();
}
