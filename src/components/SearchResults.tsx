import React from 'react';
import type { SearchResult } from '../types';

interface SearchResultsProps {
  results: SearchResult[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  if (results.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {results.map((result) => (
        <div key={result.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          {result.imageUrl && (
            <img
              src={result.imageUrl}
              alt={result.name}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{result.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{result.description}</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {result.modelType}
              </span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                {result.baseModel}
              </span>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <p>Creator: {result.creator}</p>
              <p>Downloads: {result.downloadCount.toLocaleString()}</p>
              <p>Rating: {result.rating.toFixed(1)}</p>
              <p>License: {result.license}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}