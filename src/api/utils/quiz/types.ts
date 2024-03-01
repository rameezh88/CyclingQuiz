import {GBFSFeedType, QuizQuestion} from '../../../common/types';

export type QuizQuestionGeneratorFunction = (
  params: Partial<QuizQuestionGenerator>,
  gbfsServices: GBFSFeedType[],
) => Promise<QuizQuestion | null>;

export type QuizQuestionGenerator = {
  text: string;
  options?: Array<'cities' | 'city' | 'batteryPercentage'>;
  quizQuestionGeneratorFunction: QuizQuestionGeneratorFunction;
};
