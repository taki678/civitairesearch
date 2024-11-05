import React, { useState } from 'react';
import { SearchForm } from './components/SearchForm';
import { SearchResults } from './components/SearchResults';
import { searchModels } from './api/searchApi';
import type { SearchParams, SearchResult } from './types';

function App() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (params: SearchParams) => {
    try {
      setLoading(true);
      setError(null);
      const response = await searchModels(params);
      
      if (response.error) {
        setError(response.error);
        setResults([]);
      } else {
        setResults(response.data);
        if (response.data.length === 0) {
          setError('検索結果が見つかりませんでした / No results found');
        }
      }
    } catch (err) {
      setError('検索中にエラーが発生しました / An error occurred during search');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          CivitAI Model Search / CivitAIモデル検索
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <SearchForm onSearch={handleSearch} />
          </div>
          
          <div className="md:col-span-8">
            {loading && (
              <div className="text-center py-8">
                <p>検索中... / Searching...</p>
              </div>
            )}
            
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                <p className="text-red-700">{error}</p>
              </div>
            )}
            
            {!loading && !error && <SearchResults results={results} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;