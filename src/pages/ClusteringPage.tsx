import { ArrowRight, Boxes } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ClusteringPage() {
  const clusters = [
    {
      id: 1,
      label: 'Teaching Quality',
      color: 'bg-blue-500',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-50',
      feedback: [
        'The teaching quality is excellent',
        'Professors are very helpful and knowledgeable in their subjects',
        'Faculty members are experienced and supportive',
      ],
      count: 3,
    },
    {
      id: 2,
      label: 'Infrastructure',
      color: 'bg-green-500',
      borderColor: 'border-green-200',
      bgColor: 'bg-green-50',
      feedback: [
        'Infrastructure needs improvement',
        'Labs are not well maintained and equipment is outdated',
        'Building facilities require renovation',
      ],
      count: 3,
    },
    {
      id: 3,
      label: 'Exams & Administration',
      color: 'bg-orange-500',
      borderColor: 'border-orange-200',
      bgColor: 'bg-orange-50',
      feedback: [
        'Exam scheduling is poor and causes stress during peak times',
        'Administrative processes need to be streamlined',
      ],
      count: 2,
    },
    {
      id: 4,
      label: 'Library & Resources',
      color: 'bg-cyan-500',
      borderColor: 'border-cyan-200',
      bgColor: 'bg-cyan-50',
      feedback: [
        'Library facilities are good but need more study spaces',
        'Need more digital resources and online subscriptions',
      ],
      count: 2,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Feedback Clustering</h1>
        <p className="text-slate-600 mb-8">
          Similar feedback is grouped together using clustering algorithms like K-Means or HDBSCAN.
          Each cluster represents a common theme found in the feedback.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-semibold text-slate-800 mb-3 flex items-center">
              <Boxes className="h-5 w-5 mr-2 text-blue-600" />
              Algorithm: K-Means
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Groups feedback into predetermined number of clusters based on similarity of embeddings.
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs text-slate-600">
                <span className="font-semibold">Clusters Found:</span> 4 themes
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
            <h3 className="font-semibold text-slate-800 mb-3 flex items-center">
              <Boxes className="h-5 w-5 mr-2 text-green-600" />
              Validation: Silhouette Score
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Measures how well-separated the clusters are, ensuring quality grouping.
            </p>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs text-slate-600">
                <span className="font-semibold">Score:</span> 0.78 (Good clustering)
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {clusters.map((cluster) => (
            <div
              key={cluster.id}
              className={`${cluster.bgColor} rounded-xl p-6 border-2 ${cluster.borderColor}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`${cluster.color} w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                    {cluster.id}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{cluster.label}</h3>
                    <p className="text-sm text-slate-600">{cluster.count} feedback items</p>
                  </div>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg border border-slate-200">
                  <p className="text-sm font-medium text-slate-700">
                    Cluster #{cluster.id}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {cluster.feedback.map((text, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 border border-slate-200">
                    <p className="text-sm text-slate-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-slate-50 rounded-lg p-6 border border-slate-200">
          <h3 className="font-semibold text-slate-800 mb-3">Clustering Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <p className="text-2xl font-bold text-blue-600">4</p>
              <p className="text-sm text-slate-600">Clusters</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <p className="text-2xl font-bold text-green-600">10</p>
              <p className="text-sm text-slate-600">Total Feedback</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <p className="text-2xl font-bold text-orange-600">2.5</p>
              <p className="text-sm text-slate-600">Avg per Cluster</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <p className="text-2xl font-bold text-cyan-600">0.78</p>
              <p className="text-sm text-slate-600">Quality Score</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            to="/summary"
            className="flex items-center space-x-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md"
          >
            <span>Continue to AI Summary</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
