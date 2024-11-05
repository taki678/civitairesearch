import React, { useState } from 'react';
import type { SearchParams } from '../types';
import { FilterAccordion } from './FilterAccordion';
import {
  timePeriodOptions,
  modelStatusOptions,
  modelTypesOptions,
  baseModelOptions,
  permissionsOptions,
  licenseOptions
} from '../constants/filterOptions';

interface SearchFormProps {
  onSearch: (params: SearchParams) => Promise<void>;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    query: '',
    timePeriod: '',
    modelStatus: [],
    modelTypes: [],
    baseModel: [],
    permissions: [],
    license: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(prev => ({ ...prev, query: e.target.value }));
  };

  const handleFilterChange = (filterType: keyof SearchParams, values: string[]) => {
    setSearchParams(prev => ({ ...prev, [filterType]: values }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          検索キーワード / Search Keywords
        </label>
        <input
          type="text"
          value={searchParams.query || ''}
          onChange={handleQueryChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="キーワードを入力 / Enter keywords"
        />
      </div>

      <div className="space-y-4">
        <FilterAccordion
          title="期間 / Time Period"
          options={timePeriodOptions}
          selected={searchParams.timePeriod ? [searchParams.timePeriod] : []}
          onChange={values => handleFilterChange('timePeriod', values[0] ? [values[0]] : [])}
          singleSelect
        />

        <FilterAccordion
          title="モデルステータス / Model Status"
          options={modelStatusOptions}
          selected={searchParams.modelStatus || []}
          onChange={values => handleFilterChange('modelStatus', values)}
        />

        <FilterAccordion
          title="モデルタイプ / Model Types"
          options={modelTypesOptions}
          selected={searchParams.modelTypes || []}
          onChange={values => handleFilterChange('modelTypes', values)}
        />

        <FilterAccordion
          title="ベースモデル / Base Model"
          options={baseModelOptions}
          selected={searchParams.baseModel || []}
          onChange={values => handleFilterChange('baseModel', values)}
        />

        <FilterAccordion
          title="使用許可 / Permissions"
          options={permissionsOptions}
          selected={searchParams.permissions || []}
          onChange={values => handleFilterChange('permissions', values)}
        />

        <FilterAccordion
          title="ライセンス / License"
          options={licenseOptions}
          selected={searchParams.license || []}
          onChange={values => handleFilterChange('license', values)}
          singleSelect
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        検索 / Search
      </button>
    </form>
  );
};