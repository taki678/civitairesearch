export interface SearchParams {
  query?: string;
  timePeriod?: string;
  modelStatus?: string[];
  modelTypes?: string[];
  baseModel?: string[];
  license?: string;
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

export interface FilterOption {
  label: string;
  value: string;
  labelJa?: string;
}

export interface FilterSection {
  title: string;
  titleJa: string;
  options: FilterOption[];
}