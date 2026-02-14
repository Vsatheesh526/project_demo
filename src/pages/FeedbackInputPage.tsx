import { useState } from 'react';
import { Upload, FileSpreadsheet, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeedbackInputPage() {
  const [inputMethod, setInputMethod] = useState<'manual' | 'sheets'>('manual');
  const [feedback, setFeedback] = useState('');
  const [loaded, setLoaded] = useState(false);

  const sampleFeedback = [
    'The teaching quality is excellent, but the infrastructure needs improvement.',
    'Labs are not well maintained and equipment is outdated.',
    'Professors are very helpful and knowledgeable in their subjects.',
    'Exam scheduling is poor and causes stress during peak times.',
    'Library facilities are good but need more study spaces.',
  ];

  const handleLoadSample = () => {
    setFeedback(sampleFeedback.join('\n\n'));
    setLoaded(true);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Feedback Input</h1>
        <p className="text-slate-600 mb-8">
          Collect feedback either manually or directly from Google Sheets using the API. This represents
          real-time feedback collection.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => setInputMethod('manual')}
            className={`p-6 rounded-xl border-2 transition-all ${
              inputMethod === 'manual'
                ? 'border-blue-500 bg-blue-50'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <Upload className={`h-8 w-8 mb-3 ${inputMethod === 'manual' ? 'text-blue-600' : 'text-slate-400'}`} />
            <h3 className="font-semibold text-slate-800 mb-1">Manual Entry</h3>
            <p className="text-sm text-slate-600">Enter feedback text directly</p>
          </button>

          <button
            onClick={() => setInputMethod('sheets')}
            className={`p-6 rounded-xl border-2 transition-all ${
              inputMethod === 'sheets'
                ? 'border-green-500 bg-green-50'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <FileSpreadsheet className={`h-8 w-8 mb-3 ${inputMethod === 'sheets' ? 'text-green-600' : 'text-slate-400'}`} />
            <h3 className="font-semibold text-slate-800 mb-1">Google Sheets</h3>
            <p className="text-sm text-slate-600">Import from spreadsheet</p>
          </button>
        </div>

        {inputMethod === 'manual' ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Enter Feedback (one per line or paragraph)
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full h-64 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="Enter feedback here..."
              />
            </div>
            <button
              onClick={handleLoadSample}
              className="px-6 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium"
            >
              Load Sample Data
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-3">Google Sheets Integration</h3>
              <div className="space-y-3 text-sm text-green-800">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Connected to Google Sheets API</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Authentication successful</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Ready to fetch feedback data</span>
                </div>
              </div>
              <button
                onClick={handleLoadSample}
                className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium w-full"
              >
                Fetch Feedback from Google Sheets
              </button>
            </div>
          </div>
        )}

        {(feedback || loaded) && (
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">
                  Feedback Loaded Successfully
                </h3>
                <p className="text-sm text-blue-700">
                  {feedback.split('\n').filter(line => line.trim()).length} feedback entries ready for processing
                </p>
              </div>
              <Link
                to="/preprocessing"
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <span>Next Step</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
