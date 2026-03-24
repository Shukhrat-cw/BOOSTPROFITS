// Mock auth system using localStorage
export interface User {
  id: string;
  name: string;
  email: string;
  businessName: string;
  signupDate: string;
  role: "user" | "admin";
}

const USERS_KEY = "bp_users";
const CURRENT_USER_KEY = "bp_current_user";

function getUsers(): User[] {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveUsers(users: User[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function signup(name: string, email: string, businessName: string, password: string): { success: boolean; error?: string } {
  const users = getUsers();
  if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
    return { success: false, error: "An account with this email already exists." };
  }
  const newUser: User = {
    id: crypto.randomUUID(),
    name,
    email,
    businessName,
    signupDate: new Date().toISOString(),
    role: users.length === 0 ? "admin" : "user",
  };
  // Store password hash (mock - just store it)
  const passwords = JSON.parse(localStorage.getItem("bp_passwords") || "{}");
  passwords[newUser.id] = password;
  localStorage.setItem("bp_passwords", JSON.stringify(passwords));
  
  users.push(newUser);
  saveUsers(users);
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
  return { success: true };
}

export function login(email: string, password: string): { success: boolean; error?: string; user?: User } {
  const users = getUsers();
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) return { success: false, error: "No account found with this email." };
  
  const passwords = JSON.parse(localStorage.getItem("bp_passwords") || "{}");
  if (passwords[user.id] !== password) return { success: false, error: "Incorrect password." };
  
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  return { success: true, user };
}

export function logout() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

export function getCurrentUser(): User | null {
  try {
    const data = localStorage.getItem(CURRENT_USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function getAllUsers(): User[] {
  return getUsers();
}

export function isAdmin(): boolean {
  const user = getCurrentUser();
  return user?.role === "admin";
}

export function seedDemoUsers() {
  const users = getUsers();
  if (users.length > 1) return; // Already seeded
  
  const demoUsers: User[] = [
    { id: "d1", name: "Maria Garcia", email: "maria@retailshop.com", businessName: "Garcia Retail", signupDate: "2026-03-01T10:00:00Z", role: "user" },
    { id: "d2", name: "James Thompson", email: "james@consulting.com", businessName: "Thompson Consulting", signupDate: "2026-03-05T14:30:00Z", role: "user" },
    { id: "d3", name: "Sarah Lee", email: "sarah@ecomstore.com", businessName: "Lee E-Commerce", signupDate: "2026-03-10T09:15:00Z", role: "user" },
    { id: "d4", name: "David Kim", email: "david@itservices.com", businessName: "Kim IT Solutions", signupDate: "2026-03-15T11:45:00Z", role: "user" },
    { id: "d5", name: "Rachel Patel", email: "rachel@healthcare.com", businessName: "Patel Health Clinic", signupDate: "2026-03-18T16:20:00Z", role: "user" },
    { id: "d6", name: "Mike Johnson", email: "mike@constructco.com", businessName: "Johnson Construction", signupDate: "2026-03-20T08:00:00Z", role: "user" },
    { id: "d7", name: "Emily Chen", email: "emily@designstudio.com", businessName: "Chen Design Studio", signupDate: "2026-03-22T13:10:00Z", role: "user" },
  ];
  
  const existing = users.map(u => u.email);
  const toAdd = demoUsers.filter(u => !existing.includes(u.email));
  saveUsers([...users, ...toAdd]);
}
