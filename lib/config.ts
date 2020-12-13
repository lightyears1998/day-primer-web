export enum ConfigKey {
  User = "user",
  ServerURl = "server-url"
}

export function getConfig(key: ConfigKey): unknown {
  return JSON.parse(window.localStorage.getItem(key));
}

export function saveConfig(key: ConfigKey, value: unknown): void {
  return window.localStorage.setItem(key, JSON.stringify(value));
}
