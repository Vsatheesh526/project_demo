import { ArrowRight, Brain, Zap, Target, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl p-12 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">Smart Feedback AI</h1>
          <p className="text-xl text-blue-50 mb-8 leading-relaxed">
            An AI-powered system to analyze open-ended feedback automatically, extract insights,
            and generate actionable summaries using advanced natural language processing.
          </p>
          <Link
            to="/input"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
          <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Brain className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">AI-Powered Analysis</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Leverages advanced NLP and machine learning to understand feedback context and sentiment.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
          <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Automated Processing</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Automatically clean, process, and categorize thousands of feedback entries in seconds.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
          <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Target className="h-6 w-6 text-orange-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Actionable Insights</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Extract key themes and generate summaries that drive informed decision-making.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
          <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-cyan-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Real-Time Integration</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Connect directly to Google Sheets or other data sources for seamless feedback collection.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
              1
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Collect Feedback</h3>
            <p className="text-slate-600 text-sm">
              Import feedback from various sources or enter manually
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-green-600">
              2
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">AI Analysis</h3>
            <p className="text-slate-600 text-sm">
              Process, extract keywords, and group similar feedback
            </p>
          </div>
          <div className="text-center">
            <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-orange-600">
              3
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Get Insights</h3>
            <p className="text-slate-600 text-sm">
              Review summaries and actionable insights instantly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
