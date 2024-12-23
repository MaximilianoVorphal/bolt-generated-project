export interface Filters {
  categories: string[];
  priceRange: {
    min: number;
    max: number;
  };
  search: string;
}
