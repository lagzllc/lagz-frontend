export function requireAuth(role: string) {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (!token) return false;

  const payload = JSON.parse(atob(token.split(".")[1]));
  return payload.role === role;
}
export function decodeToken() {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (!token) return null;

  return JSON.parse(atob(token.split(".")[1]));
}

export function requireRole(role: string) {
  const user = decodeToken();
  if (!user) return false;

  return user.role === role;
}
