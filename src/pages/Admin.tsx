import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getCurrentUser, getAllUsers, seedDemoUsers, logout, isAdmin, type User } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import {
  Users, TrendingUp, Download, LogOut, Home, Eye, FileText,
} from "lucide-react";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";

const pageViews = [
  { page: "Home", views: 1245 },
  { page: "Pricing", views: 890 },
  { page: "Signup", views: 654 },
  { page: "Features", views: 543 },
  { page: "FAQ", views: 321 },
];

const trafficSources = [
  { name: "Direct", value: 40 },
  { name: "Google", value: 30 },
  { name: "Social", value: 20 },
  { name: "Referral", value: 10 },
];

const COLORS = ["hsl(213 56% 11%)", "hsl(204 44% 25%)", "hsl(0 100% 70%)", "hsl(210 25% 88%)"];

const newUsersData = [
  { day: "Mon", users: 3 },
  { day: "Tue", users: 5 },
  { day: "Wed", users: 2 },
  { day: "Thu", users: 7 },
  { day: "Fri", users: 4 },
  { day: "Sat", users: 1 },
  { day: "Sun", users: 2 },
];

const Admin = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (!user || !isAdmin()) {
      navigate("/login");
      return;
    }
    seedDemoUsers();
    setUsers(getAllUsers());
  }, [user, navigate]);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const exportCSV = () => {
    const headers = ["Name", "Email", "Business Name", "Signup Date"];
    const rows = users.map((u) => [u.name, u.email, u.businessName, new Date(u.signupDate).toLocaleDateString()]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "boostprofits_users.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-extrabold text-primary">
            Boost<span className="text-accent">Profits</span>
            <span className="ml-2 text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full font-bold">Admin</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/"><Home className="h-4 w-4" /></Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard"><Eye className="h-4 w-4 mr-1" /> Dashboard</Link>
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-primary">Admin Panel</h1>
          <p className="text-muted-foreground">Site analytics and user management</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Users", value: users.length.toString(), icon: Users },
            { label: "New This Week", value: "24", icon: TrendingUp },
            { label: "Page Views (30d)", value: "3,653", icon: Eye },
            { label: "Newsletter Subs", value: "186", icon: FileText },
          ].map((s) => (
            <div key={s.label} className="bg-card rounded-xl border border-border p-5 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <s.icon className="h-5 w-5 text-accent" />
              </div>
              <p className="text-2xl font-bold text-primary">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl border border-border p-6 space-y-4">
            <h2 className="font-bold text-primary">New Users / Day</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={newUsersData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 25% 88%)" />
                <XAxis dataKey="day" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="hsl(0 100% 70%)" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card rounded-xl border border-border p-6 space-y-4">
            <h2 className="font-bold text-primary">Top Pages</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={pageViews} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 25% 88%)" />
                <XAxis type="number" fontSize={12} />
                <YAxis type="category" dataKey="page" fontSize={12} width={60} />
                <Tooltip />
                <Bar dataKey="views" fill="hsl(204 44% 25%)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card rounded-xl border border-border p-6 space-y-4">
            <h2 className="font-bold text-primary">Traffic Sources</h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={trafficSources} cx="50%" cy="50%" outerRadius={70} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} fontSize={11}>
                  {trafficSources.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Table */}
        <div className="bg-card rounded-xl border border-border p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-primary">All Users</h2>
            <Button onClick={exportCSV} variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" /> Export CSV
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 font-semibold text-muted-foreground">Name</th>
                  <th className="text-left py-3 px-2 font-semibold text-muted-foreground">Email</th>
                  <th className="text-left py-3 px-2 font-semibold text-muted-foreground hidden md:table-cell">Business</th>
                  <th className="text-left py-3 px-2 font-semibold text-muted-foreground hidden sm:table-cell">Signup Date</th>
                  <th className="text-left py-3 px-2 font-semibold text-muted-foreground">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-2 text-primary">{u.name}</td>
                    <td className="py-3 px-2 text-muted-foreground">{u.email}</td>
                    <td className="py-3 px-2 text-muted-foreground hidden md:table-cell">{u.businessName}</td>
                    <td className="py-3 px-2 text-muted-foreground hidden sm:table-cell">
                      {new Date(u.signupDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        u.role === "admin" ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"
                      }`}>
                        {u.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
