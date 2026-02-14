import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FeedbackInputPage from './pages/FeedbackInputPage';
import PreprocessingPage from './pages/PreprocessingPage';
import KeywordExtractionPage from './pages/KeywordExtractionPage';
import ClusteringPage from './pages/ClusteringPage';
import AISummaryPage from './pages/AISummaryPage';
import InsightsDashboard from './pages/InsightsDashboard';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/input" element={<FeedbackInputPage />} />
          <Route path="/preprocessing" element={<PreprocessingPage />} />
          <Route path="/keywords" element={<KeywordExtractionPage />} />
          <Route path="/clustering" element={<ClusteringPage />} />
          <Route path="/summary" element={<AISummaryPage />} />
          <Route path="/insights" element={<InsightsDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
