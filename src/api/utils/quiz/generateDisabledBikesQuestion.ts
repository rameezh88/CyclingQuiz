import {getFormattedQuizQuestion} from '.';
import {formatList, getRandomSubset} from '..';
import {GBFSFeedType} from '../../../common/types';
import {fetchFreeBikeStatusData} from './fetches';
import {QuizQuestionGenerator, QuizQuestionGeneratorFunction} from './types';

const generateDisabledBikesQuestion: QuizQuestionGeneratorFunction = async (
  {text}: Partial<QuizQuestionGenerator>,
  gbfsServices: GBFSFeedType[],
) => {
  // Get a random subset of the services. We will
  // use this subset to get the total number of bikes for a couple of the cities
  const services = getRandomSubset(gbfsServices);
  const responses = await Promise.all(services.map(fetchFreeBikeStatusData));

  if (responses.length > 0) {
    let disabledBikeCount = 0;
    responses.forEach(freeBikeStatus => {
      const numberOfBikes = freeBikeStatus.data.bikes.filter(
        (bike: any) => !bike.is_disabled,
      );
      disabledBikeCount += numberOfBikes.length;
    }, 0);

    return getFormattedQuizQuestion(text, disabledBikeCount, {
      cities: formatList(services.map(service => service.city)),
    });
  }

  return null;
};

export default generateDisabledBikesQuestion;
