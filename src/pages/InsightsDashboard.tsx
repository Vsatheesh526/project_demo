import { TrendingUp, TrendingDown, Minus, Target, CheckCircle2, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

export default function InsightsDashboard() {
  const sentimentData = [
    { name: 'Teaching Quality', value: 30, sentiment: 'positive' },
    { name: 'Infrastructure', value: 30, sentiment: 'negative' },
    { name: 'Administration', value: 20, sentiment: 'negative' },
    { name: 'Library', value: 20, sentiment: 'mixed' },
  ];

  const themeFrequency = [
    { theme: 'Teaching', count: 30 },
    { theme: 'Infrastructure', count: 30 },
    { theme: 'Admin', count: 20 },
    { theme: 'Library', count: 20 },
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f97316', '#06b6d4'];

  const recommendations = [
    {
      title: 'Maintain Teaching Excellence',
      description: 'Continue supporting faculty development and teaching quality initiatives',
      priority: 'high',
      icon: CheckCircle2,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      title: 'Upgrade Infrastructure',
      description: 'Prioritize lab equipment upgrades and building renovations',
      priority: 'critical',
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
    {
      title: 'Improve Exam Scheduling',
      description: 'Implement better scheduling system to reduce student stress',
      priority: 'high',
      icon: AlertCircle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
    {
      title: 'Expand Library Resources',
      description: 'Add more study spaces and digital subscriptions',
      priority: 'medium',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Final Insights Dashboard</h1>
        <p className="text-slate-600 mb-8">
          Comprehensive overview of feedback analysis with themes, sentiment distribution, and actionable
          recommendations for improvement.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-600">Positive Sentiment</h3>
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-green-600 mb-1">30%</p>
            <p className="text-xs text-slate-600">Teaching quality highly rated</p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border-2 border-red-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-600">Negative Sentiment</h3>
              <TrendingDown className="h-5 w-5 text-red-600" />
            </div>
            <p className="text-3xl font-bold text-red-600 mb-1">50%</p>
            <p className="text-xs text-slate-600">Infrastructure & admin concerns</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-600">Mixed Sentiment</h3>
              <Minus className="h-5 w-5 text-orange-600" />
            </div>
            <p className="text-3xl font-bold text-orange-600 mb-1">20%</p>
            <p className="text-xs text-slate-600">Library resources feedback</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Theme Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={themeFrequency}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="theme" tick={{ fill: '#64748b' }} />
                <YAxis tick={{ fill: '#64748b' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Feedback by Category</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sentimentData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-8">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Overall Summary</h3>
          <p className="text-slate-700 leading-relaxed">
            The feedback analysis reveals a clear pattern: while teaching quality receives strong positive
            feedback, there are significant concerns about infrastructure and administrative processes.
            Students appreciate faculty expertise but are frustrated with outdated equipment and scheduling
            issues. Library facilities are adequate but require expansion. Immediate action is recommended
            on infrastructure upgrades and exam scheduling improvements, while maintaining the current high
            standards in teaching quality.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Actionable Recommendations</h3>
          <div className="space-y-4">
            {recommendations.map((rec, idx) => {
              const Icon = rec.icon;
              return (
                <div
                  key={idx}
                  className={`${rec.bgColor} rounded-xl p-5 border-2 ${rec.borderColor}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${rec.color} mt-1`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-slate-800">{rec.title}</h4>
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            rec.priority === 'critical'
                              ? 'bg-red-100 text-red-700'
                              : rec.priority === 'high'
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {rec.priority.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">{rec.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
