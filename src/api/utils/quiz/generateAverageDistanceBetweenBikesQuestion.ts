import {getFormattedQuizQuestion} from '.';
import {getRandomElement} from '..';
import {GBFSFeedType} from '../../../common/types';
import {calculateAverageDistance} from '../geolocation';
import {fetchFreeBikeStatusData} from './fetches';
import {QuizQuestionGenerator, QuizQuestionGeneratorFunction} from './types';

const generateAverageDistanceBetweenBikesQuestion: QuizQuestionGeneratorFunction =
  async (
    {text}: Partial<QuizQuestionGenerator>,
    gbfsServices: GBFSFeedType[],
  ) => {
    const service = getRandomElement(gbfsServices);
    if (service) {
      const freeBikeStatus = await fetchFreeBikeStatusData(service);
      const coordinates = freeBikeStatus.data.bikes.map((bike: any) => [
        bike.lat,
        bike.lon,
      ]);
      const averageDistance = calculateAverageDistance(coordinates);

      return getFormattedQuizQuestion(text, averageDistance, {
        city: service.city,
      });
    }

    return null;
  };

export default generateAverageDistanceBetweenBikesQuestion;
