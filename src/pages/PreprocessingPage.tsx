import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PreprocessingPage() {
  const rawFeedback = [
    'The teaching quality is excellent, but the infrastructure needs improvement!!!',
    'Labs are not well maintained and equipment is outdated...',
    'Professors are VERY helpful and knowledgeable in their subjects.',
  ];

  const cleanedFeedback = [
    'teaching quality excellent infrastructure needs improvement',
    'labs not well maintained equipment outdated',
    'professors helpful knowledgeable subjects',
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Text Preprocessing</h1>
        <p className="text-slate-600 mb-8">
          Raw feedback is cleaned by removing noise, punctuation, and unnecessary words. The text is then
          converted into embeddings so the system can understand the meaning.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                1
              </span>
              Raw Feedback
            </h3>
            <div className="space-y-3">
              {rawFeedback.map((text, idx) => (
                <div key={idx} className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-slate-700 font-mono">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-slate-50 rounded-lg p-4">
              <h4 className="font-medium text-slate-700 mb-2 text-sm">Issues Found:</h4>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>• Extra punctuation marks (!!!, ...)</li>
                <li>• Mixed case letters</li>
                <li>• Stop words (the, is, and, etc.)</li>
                <li>• Special characters</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                2
              </span>
              Cleaned Text
            </h3>
            <div className="space-y-3">
              {cleanedFeedback.map((text, idx) => (
                <div key={idx} className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-slate-700 font-mono">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-slate-50 rounded-lg p-4">
              <h4 className="font-medium text-slate-700 mb-2 text-sm">Processing Steps:</h4>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>✓ Removed punctuation</li>
                <li>✓ Converted to lowercase</li>
                <li>✓ Removed stop words</li>
                <li>✓ Tokenized text</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Sparkles className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-800 mb-2">Text Embeddings Generated</h3>
              <p className="text-sm text-slate-600 mb-3">
                The cleaned text has been converted into numerical vectors (embeddings) using advanced NLP
                models. These embeddings capture the semantic meaning of the feedback.
              </p>
              <div className="bg-white rounded p-3 border border-blue-200">
                <code className="text-xs text-slate-600">
                  [0.234, -0.891, 0.456, 0.123, -0.567, 0.789, ...]
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            to="/keywords"
            className="flex items-center space-x-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md"
          >
            <span>Continue to Keyword Extraction</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
