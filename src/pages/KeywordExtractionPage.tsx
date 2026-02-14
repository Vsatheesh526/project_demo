import { ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function KeywordExtractionPage() {
  const keywords = [
    { word: 'teaching', score: 0.89, color: 'bg-blue-500' },
    { word: 'quality', score: 0.85, color: 'bg-blue-500' },
    { word: 'infrastructure', score: 0.82, color: 'bg-green-500' },
    { word: 'labs', score: 0.79, color: 'bg-green-500' },
    { word: 'equipment', score: 0.76, color: 'bg-green-500' },
    { word: 'professors', score: 0.74, color: 'bg-blue-500' },
    { word: 'maintained', score: 0.71, color: 'bg-green-500' },
    { word: 'exam', score: 0.68, color: 'bg-orange-500' },
    { word: 'library', score: 0.65, color: 'bg-cyan-500' },
    { word: 'scheduling', score: 0.62, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Keyword Extraction</h1>
        <p className="text-slate-600 mb-8">
          Important keywords are extracted from the feedback to identify what users are mainly talking about.
          This helps in understanding the key topics and themes.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-semibold text-slate-800 mb-3 flex items-center">
              <Tag className="h-5 w-5 mr-2 text-blue-600" />
              Method: TF-IDF
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Term Frequency-Inverse Document Frequency analyzes how important a word is to a document
              in a collection of documents.
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs text-slate-600">
                <span className="font-semibold">Status:</span> Completed
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
            <h3 className="font-semibold text-slate-800 mb-3 flex items-center">
              <Tag className="h-5 w-5 mr-2 text-green-600" />
              Method: KeyBERT
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              KeyBERT uses BERT embeddings to extract keywords that are most similar to the document,
              providing contextually relevant results.
            </p>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs text-slate-600">
                <span className="font-semibold">Status:</span> Completed
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h3 className="font-semibold text-slate-800 mb-6">Extracted Keywords (Ranked by Importance)</h3>

          <div className="space-y-3">
            {keywords.map((keyword, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-slate-400 font-mono text-sm w-6">{idx + 1}.</span>
                    <span className="font-semibold text-slate-800 text-lg">{keyword.word}</span>
                  </div>
                  <span className="text-sm font-medium text-slate-600">
                    Score: {keyword.score.toFixed(2)}
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className={`${keyword.color} h-2 rounded-full transition-all`}
                    style={{ width: `${keyword.score * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-slate-800 mb-2">Key Insights</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="font-medium text-blue-600 mb-1">Teaching Quality</p>
              <p className="text-xs text-slate-600">Keywords: teaching, quality, professors</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="font-medium text-green-600 mb-1">Infrastructure</p>
              <p className="text-xs text-slate-600">Keywords: infrastructure, labs, equipment</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <p className="font-medium text-orange-600 mb-1">Administration</p>
              <p className="text-xs text-slate-600">Keywords: exam, scheduling</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            to="/clustering"
            className="flex items-center space-x-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md"
          >
            <span>Continue to Clustering</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
