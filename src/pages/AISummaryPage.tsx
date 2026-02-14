import { ArrowRight, Sparkles, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AISummaryPage() {
  const summaries = [
    {
      cluster: 'Teaching Quality',
      color: 'bg-blue-500',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-50',
      summary:
        'Students express high satisfaction with teaching quality. Faculty members are praised for their expertise, helpfulness, and knowledge. Professors are described as supportive and experienced, contributing positively to the learning experience.',
      sentiment: 'Positive',
      sentimentColor: 'text-green-600',
    },
    {
      cluster: 'Infrastructure',
      color: 'bg-green-500',
      borderColor: 'border-green-200',
      bgColor: 'bg-green-50',
      summary:
        'Infrastructure concerns are prominent. Lab facilities require better maintenance, equipment is outdated, and buildings need renovation. These physical resource limitations are impacting the overall learning environment and student experience.',
      sentiment: 'Negative',
      sentimentColor: 'text-red-600',
    },
    {
      cluster: 'Exams & Administration',
      color: 'bg-orange-500',
      borderColor: 'border-orange-200',
      bgColor: 'bg-orange-50',
      summary:
        'Administrative processes present challenges. Exam scheduling is problematic, causing unnecessary stress during peak academic periods. Students indicate that administrative workflows need streamlining to improve efficiency and reduce student burden.',
      sentiment: 'Negative',
      sentimentColor: 'text-red-600',
    },
    {
      cluster: 'Library & Resources',
      color: 'bg-cyan-500',
      borderColor: 'border-cyan-200',
      bgColor: 'bg-cyan-50',
      summary:
        'Library facilities receive mixed feedback. While the basic facilities are adequate, there is a clear need for additional study spaces to accommodate student demand. Digital resources and online subscriptions need expansion to support modern learning needs.',
      sentiment: 'Mixed',
      sentimentColor: 'text-orange-600',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">AI-Generated Summaries</h1>
        <p className="text-slate-600 mb-8">
          Each cluster is summarized using the Gemini AI model. This provides short and meaningful
          summaries instead of reading all feedback manually, saving time while capturing key insights.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200 mb-8">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-blue-600" />
                Powered by Gemini AI
              </h3>
              <p className="text-sm text-slate-600">
                Advanced language model analyzes clustered feedback and generates concise, contextual
                summaries that highlight key themes, sentiment, and actionable insights.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {summaries.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bgColor} rounded-xl p-6 border-2 ${item.borderColor}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`${item.color} w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold`}>
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">{item.cluster}</h3>
                  </div>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg border border-slate-200">
                  <p className={`text-sm font-semibold ${item.sentimentColor}`}>
                    {item.sentiment}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-slate-200">
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 leading-relaxed">{item.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-slate-50 rounded-lg p-6 border border-slate-200">
          <h3 className="font-semibold text-slate-800 mb-4">Summary Generation Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <p className="text-2xl font-bold text-blue-600">4</p>
              <p className="text-sm text-slate-600">Summaries Generated</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <p className="text-2xl font-bold text-green-600">95%</p>
              <p className="text-sm text-slate-600">Accuracy</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <p className="text-2xl font-bold text-orange-600">2.3s</p>
              <p className="text-sm text-slate-600">Processing Time</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <p className="text-2xl font-bold text-cyan-600">10x</p>
              <p className="text-sm text-slate-600">Time Saved</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            to="/insights"
            className="flex items-center space-x-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md"
          >
            <span>View Final Insights</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
