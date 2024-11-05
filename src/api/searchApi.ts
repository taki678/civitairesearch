import axios from 'axios';
import type { SearchParams, ApiResponse } from '../types';

// In production, this should point to your deployed backend URL
const API_BASE_URL = import.meta.env.PROD 
  ? 'https://your-backend-url.com'  // This needs to be replaced with actual backend URL
  : 'http://localhost:3001';

export const searchModels = async (params: SearchParams): Promise<ApiResponse> => {
  try {
    const searchParams = new URLSearchParams();
    
    if (params.query) searchParams.append('query', params.query);
    if (params.timePeriod) searchParams.append('timePeriod', params.timePeriod);
    if (params.modelStatus?.length) searchParams.append('modelStatus', params.modelStatus.join(','));
    if (params.modelTypes?.length) searchParams.append('modelTypes', params.modelTypes.join(','));
    if (params.baseModel?.length) searchParams.append('baseModel', params.baseModel.join(','));
    if (params.permissions?.length) searchParams.append('permissions', params.permissions.join(','));
    if (params.license?.length) searchParams.append('license', params.license.join(','));

    const response = await axios.get<SearchResult[]>(`${API_BASE_URL}/search`, {
      params: searchParams
    });

    return {
      data: response.data
    };
  } catch (error) {
    console.error('Search error:', error);
    return {
      data: [],
      error: error instanceof Error ? error.message : '検索中にエラーが発生しました / Error occurred during search'
    };
  }
}