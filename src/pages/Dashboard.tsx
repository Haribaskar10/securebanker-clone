
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CreditCard, Users, PiggyBank, Briefcase, ArrowUpRight, ArrowDownRight, BarChart4, Info, FileText, Download, Calendar, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

// Mock data for charts
const accountActivity = [
  { name: 'Jan', value: 12500 },
  { name: 'Feb', value: 15000 },
  { name: 'Mar', value: 14200 },
  { name: 'Apr', value: 16500 },
  { name: 'May', value: 19000 },
  { name: 'Jun', value: 18200 },
  { name: 'Jul', value: 24500 },
  { name: 'Aug', value: 22300 },
  { name: 'Sep', value: 25400 },
  { name: 'Oct', value: 24300 },
  { name: 'Nov', value: 27500 },
  { name: 'Dec', value: 28700 },
];

// Mock account data
const accounts = [
  {
    id: 1,
    name: 'Savings Account',
    balance: 12580.90,
    accountNumber: '••••7890',
    type: 'savings',
  },
  {
    id: 2,
    name: 'Current Account',
    balance: 5240.35,
    accountNumber: '••••4567',
    type: 'checking',
  },
  {
    id: 3,
    name: 'Fixed Deposit',
    balance: 25000.00,
    accountNumber: '••••2345',
    type: 'fd',
  }
];

// Mock transactions
const transactions = [
  {
    id: 1,
    description: 'Salary Deposit',
    amount: 3200.00,
    type: 'credit',
    category: 'income',
    date: '2023-06-15',
  },
  {
    id: 2,
    description: 'Rent Payment',
    amount: 1200.00,
    type: 'debit',
    category: 'housing',
    date: '2023-06-14',
  },
  {
    id: 3,
    description: 'Grocery Store',
    amount: 85.75,
    type: 'debit',
    category: 'groceries',
    date: '2023-06-13',
  },
  {
    id: 4,
    description: 'Electric Bill',
    amount: 95.20,
    type: 'debit',
    category: 'utilities',
    date: '2023-06-12',
  },
  {
    id: 5,
    description: 'Freelance Income',
    amount: 750.00,
    type: 'credit',
    category: 'income',
    date: '2023-06-11',
  },
  {
    id: 6,
    description: 'Restaurant',
    amount: 45.80,
    type: 'debit',
    category: 'dining',
    date: '2023-06-10',
  },
  {
    id: 7,
    description: 'Gas Station',
    amount: 38.25,
    type: 'debit',
    category: 'transportation',
    date: '2023-06-09',
  },
  {
    id: 8,
    description: 'Online Shopping',
    amount: 129.99,
    type: 'debit',
    category: 'shopping',
    date: '2023-06-08',
  },
];

// Account icon map
const accountIcons = {
  savings: <PiggyBank className="h-5 w-5" />,
  checking: <CreditCard className="h-5 w-5" />,
  fd: <Briefcase className="h-5 w-5" />,
};

const Dashboard = () => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [transactionType, setTransactionType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter transactions based on search and filters
  const filteredTransactions = transactions.filter(transaction => {
    // Search filter
    if (searchQuery && !transaction.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Transaction type filter
    if (transactionType !== 'all' && transaction.type !== transactionType) {
      return false;
    }
    
    // Date range filter
    if (dateFrom && new Date(transaction.date) < new Date(dateFrom)) {
      return false;
    }
    
    if (dateTo && new Date(transaction.date) > new Date(dateTo)) {
      return false;
    }
    
    return true;
  });

  // Calculate total balance across all accounts
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  return (
    <Layout>
      <div className="py-6 space-y-8 animate-fade-in">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back, John Doe</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              Help
            </Button>
            <Button className="bg-bank-blue hover:bg-bank-dark-blue flex items-center gap-2">
              <Users className="h-4 w-4" />
              Manage Profile
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-3 md:col-span-2 animate-scale-in">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>Account Balance</CardTitle>
                <CardDescription>Your total balance across all accounts</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="ml-auto gap-1">
                <FileText className="h-4 w-4" />
                Statements
              </Button>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="mt-2 mb-6">
                <div className="text-3xl font-bold">${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                <div className="flex items-center text-sm text-green-600 mt-1">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>4.3% from last month</span>
                </div>
              </div>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={accountActivity} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1C76E2" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#1C76E2" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#888', fontSize: 12 }} 
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#888', fontSize: 12 }} 
                      tickFormatter={(value) => `$${value.toLocaleString()}`} 
                    />
                    <Tooltip 
                      formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Balance']} 
                      labelFormatter={(label) => `${label} 2023`} 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #f0f0f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#1C76E2" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3 md:col-span-1 animate-scale-in">
            <CardHeader>
              <CardTitle>Your Accounts</CardTitle>
              <CardDescription>View and manage your accounts</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-4">
                {accounts.map((account) => (
                  <div 
                    key={account.id} 
                    className="p-4 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-bank-blue/10 flex items-center justify-center mr-3">
                          {accountIcons[account.type as keyof typeof accountIcons]}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{account.name}</h3>
                          <p className="text-sm text-gray-500">{account.accountNumber}</p>
                        </div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={cn(
                          "capitalize",
                          account.type === 'savings' && "text-green-600 bg-green-50 border-green-200",
                          account.type === 'checking' && "text-blue-600 bg-blue-50 border-blue-200",
                          account.type === 'fd' && "text-purple-600 bg-purple-50 border-purple-200"
                        )}
                      >
                        {account.type}
                      </Badge>
                    </div>
                    <div className="mt-2">
                      <p className="text-2xl font-bold text-gray-900">
                        ${account.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-2">View All Accounts</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="animate-scale-in">
          <Tabs defaultValue="transactions" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="transactions" className="gap-2">
                <BarChart4 className="h-4 w-4" />
                Transactions
              </TabsTrigger>
              <TabsTrigger value="statements" className="gap-2">
                <FileText className="h-4 w-4" />
                Statements
              </TabsTrigger>
            </TabsList>
            <TabsContent value="transactions">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle>Recent Transactions</CardTitle>
                      <CardDescription>View and filter your transaction history</CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Download className="h-4 w-4" />
                        Export
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Filter className="h-4 w-4" />
                        Advanced Filters
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <Label htmlFor="search" className="sr-only">Search</Label>
                        <Input
                          id="search"
                          placeholder="Search transactions..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:w-2/3">
                        <div>
                          <Label htmlFor="transaction-type" className="sr-only">Transaction Type</Label>
                          <Select value={transactionType} onValueChange={setTransactionType}>
                            <SelectTrigger id="transaction-type">
                              <SelectValue placeholder="All Types" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Types</SelectItem>
                              <SelectItem value="debit">Debits</SelectItem>
                              <SelectItem value="credit">Credits</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="date-from" className="sr-only">From</Label>
                          <Input
                            id="date-from"
                            type="date"
                            value={dateFrom}
                            onChange={(e) => setDateFrom(e.target.value)}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <Label htmlFor="date-to" className="sr-only">To</Label>
                          <Input
                            id="date-to"
                            type="date"
                            value={dateTo}
                            onChange={(e) => setDateTo(e.target.value)}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border">
                      <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                          <thead>
                            <tr className="border-b bg-gray-50">
                              <th className="h-12 px-4 text-left font-medium text-gray-500">Description</th>
                              <th className="h-12 px-4 text-left font-medium text-gray-500">Date</th>
                              <th className="h-12 px-4 text-left font-medium text-gray-500">Category</th>
                              <th className="h-12 px-4 text-right font-medium text-gray-500">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredTransactions.length > 0 ? (
                              filteredTransactions.map((transaction) => (
                                <tr key={transaction.id} className="border-b bg-white hover:bg-gray-50 transition-colors">
                                  <td className="p-4 align-middle font-medium">{transaction.description}</td>
                                  <td className="p-4 align-middle text-gray-600">
                                    {new Date(transaction.date).toLocaleDateString('en-US', {
                                      year: 'numeric',
                                      month: 'short',
                                      day: 'numeric',
                                    })}
                                  </td>
                                  <td className="p-4 align-middle">
                                    <Badge variant="outline" className="capitalize">
                                      {transaction.category}
                                    </Badge>
                                  </td>
                                  <td className={cn(
                                    "p-4 align-middle text-right font-medium",
                                    transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                                  )}>
                                    {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan={4} className="p-8 text-center text-gray-500">
                                  No transactions found matching your filters.
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="statements">
              <Card>
                <CardHeader>
                  <CardTitle>Account Statements</CardTitle>
                  <CardDescription>Download your monthly account statements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="statement-account">Select Account</Label>
                        <Select defaultValue="all">
                          <SelectTrigger id="statement-account" className="mt-1">
                            <SelectValue placeholder="All Accounts" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Accounts</SelectItem>
                            {accounts.map((account) => (
                              <SelectItem key={account.id} value={account.id.toString()}>
                                {account.name} ({account.accountNumber})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="statement-period">Select Period</Label>
                        <Select defaultValue="current">
                          <SelectTrigger id="statement-period" className="mt-1">
                            <SelectValue placeholder="Current Month" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="current">Current Month</SelectItem>
                            <SelectItem value="previous">Previous Month</SelectItem>
                            <SelectItem value="custom">Custom Period</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="rounded-lg border">
                      <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                          <thead>
                            <tr className="border-b bg-gray-50">
                              <th className="h-12 px-4 text-left font-medium text-gray-500">Statement Period</th>
                              <th className="h-12 px-4 text-left font-medium text-gray-500">Account</th>
                              <th className="h-12 px-4 text-left font-medium text-gray-500">Size</th>
                              <th className="h-12 px-4 text-right font-medium text-gray-500">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { period: 'May 2023', account: 'Savings Account', size: '156 KB' },
                              { period: 'April 2023', account: 'Savings Account', size: '142 KB' },
                              { period: 'March 2023', account: 'Savings Account', size: '168 KB' },
                              { period: 'May 2023', account: 'Current Account', size: '124 KB' },
                              { period: 'April 2023', account: 'Current Account', size: '137 KB' },
                              { period: 'March 2023', account: 'Current Account', size: '151 KB' },
                            ].map((statement, i) => (
                              <tr key={i} className="border-b bg-white hover:bg-gray-50 transition-colors">
                                <td className="p-4 align-middle font-medium">{statement.period}</td>
                                <td className="p-4 align-middle text-gray-600">{statement.account}</td>
                                <td className="p-4 align-middle text-gray-600">{statement.size}</td>
                                <td className="p-4 align-middle text-right">
                                  <div className="flex justify-end gap-2">
                                    <Button variant="outline" size="sm" className="gap-1">
                                      <Calendar className="h-4 w-4" />
                                      View
                                    </Button>
                                    <Button variant="outline" size="sm" className="gap-1">
                                      <Download className="h-4 w-4" />
                                      Download
                                    </Button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
