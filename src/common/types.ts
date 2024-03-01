export enum GBFSFeedNames {
  'system_information',
  'free_bike_status',
  'station_status',
  'vehicle_types',
  'geofencing_zones',
  'system_regions',
  'station_information',
}

export interface GBFSFeedType {
  feeds: {
    name: GBFSFeedNames;
  }[];
  city: string;
}

export interface QuizQuestion {
  question: string;
  answers: Array<QuizAnswer>;
}

export interface QuizAnswer {
  answer: string | number;
  correct: boolean;
}

export interface QuizResultItem {
  question: string;
  selectedAnswer: QuizAnswer;
}

export interface QuizResults {
  id: string;
  points: number;
  won: boolean;
  answeredQuestions: QuizResultItem[];
}
