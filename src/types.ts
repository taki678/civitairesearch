export interface SearchParams {
  query?: string;
  timePeriod?: string;
  modelStatus?: string[];
  modelTypes?: string[];
  baseModel?: string[];
  permissions?: string[];
  license?: string[];
}

export interface SearchResult {
  id: string;
  name: string;
  description: string;
  modelType: string;
  imageUrl: string;
  baseModel: string;
  downloadCount: number;
  rating: number;
  creator: string;
  license: string;
}

export interface ApiResponse {
  data: SearchResult[];
  error?: string;
}