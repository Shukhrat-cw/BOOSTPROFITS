import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getCurrentUser, logout } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import {
  DollarSign, FileText, Clock, AlertTriangle, LogOut, TrendingUp, Home,
} from "lucide-react";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const invoiceData = [
  { month: "Oct", collected: 800, pending: 200, overdue: 120 },
  { month: "Nov", collected: 1100, pending: 180, overdue: 90 },
  { month: "Dec", collected: 1400, pending: 250, overdue: 80 },
  { month: "Jan", collected: 1650, pending: 160, overdue: 60 },
  { month: "Feb", collected: 1900, pending: 140, overdue: 50 },
  { month: "Mar", collected: 2400, pending: 120, overdue: 40 },
];

const recentActivity = [
  { id: 1, action: "Invoice #1042 paid", amount: "$2,400", time: "2 hours ago", status: "paid" },
  { id: 2, action: "Reminder sent to Acme Corp", amount: "$5,100", time: "4 hours ago", status: "reminder" },
  { id: 3, action: "Invoice #1038 partially paid", amount: "$1,200 / $3,600", time: "1 day ago", status: "partial" },
  { id: 4, action: "Invoice #1035 overdue", amount: "$4,800", time: "2 days ago", status: "overdue" },
  { id: 5, action: "Invoice #1031 paid", amount: "$1,950", time: "3 days ago", status: "paid" },
  { id: 6, action: "Reminder sent to Beta LLC", amount: "$3,200", time: "3 days ago", status: "reminder" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const stats = [
    { label: "Total Invoices", value: "12", icon: FileText, color: "text-primary" },
    { label: "Collected", value: "$2,400", icon: DollarSign, color: "text-green-600" },
    { label: "Pending", value: "$520", icon: Clock, color: "text-yellow-600" },
    { label: "Overdue", value: "$280", icon: AlertTriangle, color: "text-accent" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-extrabold text-primary">
            Boost<span className="text-accent">Profits</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user.businessName}
            </span>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/"><Home className="h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-primary">Welcome, {user.name.split(" ")[0]} 👋</h1>
          <p className="text-muted-foreground">Here's your cash flow overview</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card rounded-xl border border-border p-5 space-y-2 transition-all hover:shadow-md">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <s.icon className={`h-5 w-5 ${s.color}`} />
              </div>
              <p className="text-2xl font-bold text-primary">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl border border-border p-6 space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              <h2 className="font-bold text-primary">Collections Trend</h2>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={invoiceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 25% 88%)" />
                <XAxis dataKey="month" fontSize={12} />
                <YAxis fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                <Line type="monotone" dataKey="collected" stroke="hsl(142 71% 45%)" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="overdue" stroke="hsl(0 100% 70%)" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card rounded-xl border border-border p-6 space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-accent" />
              <h2 className="font-bold text-primary">Invoice Breakdown</h2>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={invoiceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 25% 88%)" />
                <XAxis dataKey="month" fontSize={12} />
                <YAxis fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                <Bar dataKey="collected" fill="hsl(142 71% 45%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="pending" fill="hsl(48 96% 53%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="overdue" fill="hsl(0 100% 70%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-card rounded-xl border border-border p-6 space-y-4">
          <h2 className="font-bold text-primary">Recent Activity</h2>
          <div className="divide-y divide-border">
            {recentActivity.map((a) => (
              <div key={a.id} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className={`h-2 w-2 rounded-full ${
                    a.status === "paid" ? "bg-green-500" :
                    a.status === "overdue" ? "bg-accent" :
                    a.status === "partial" ? "bg-yellow-500" : "bg-secondary"
                  }`} />
                  <span className="text-sm text-primary">{a.action}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-primary">{a.amount}</span>
                  <span className="text-xs text-muted-foreground">{a.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
