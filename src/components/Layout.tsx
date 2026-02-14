import { Link, useLocation } from 'react-router-dom';
import { Brain, Home, Upload, Filter, Key, Boxes, Sparkles, BarChart3 } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const steps = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/input', label: 'Input', icon: Upload },
    { path: '/preprocessing', label: 'Preprocess', icon: Filter },
    { path: '/keywords', label: 'Keywords', icon: Key },
    { path: '/clustering', label: 'Clustering', icon: Boxes },
    { path: '/summary', label: 'AI Summary', icon: Sparkles },
    { path: '/insights', label: 'Insights', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">Smart Feedback AI</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6">
          <div className="flex items-center justify-between space-x-2 overflow-x-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = location.pathname === step.path;
              const isPassed = steps.findIndex(s => s.path === location.pathname) > index;

              return (
                <div key={step.path} className="flex items-center">
                  <Link
                    to={step.path}
                    className={`flex flex-col items-center min-w-[80px] group ${
                      isActive ? 'opacity-100' : isPassed ? 'opacity-70' : 'opacity-50'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30 scale-110'
                          : isPassed
                          ? 'bg-green-500'
                          : 'bg-slate-200 group-hover:bg-slate-300'
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          isActive || isPassed ? 'text-white' : 'text-slate-600'
                        }`}
                      />
                    </div>
                    <span
                      className={`text-xs mt-2 font-medium ${
                        isActive ? 'text-blue-600' : 'text-slate-600'
                      }`}
                    >
                      {step.label}
                    </span>
                  </Link>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-8 h-0.5 mb-6 mx-1 ${
                        isPassed ? 'bg-green-500' : 'bg-slate-200'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <main>{children}</main>
      </div>
    </div>
  );
}
