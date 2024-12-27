export interface Film{
    filmId: number;
    title: string;
    description: string;
    release_year: number;
    language: string;
    original_language_id: number;
    rental_duration: number;
    rental_rate: number;
    length: number;
    replacement_cost: number;
    rating: number;
    special_features: string;
    lastUpdate: Date;
}