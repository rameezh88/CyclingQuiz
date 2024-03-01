import {getFormattedQuizQuestion} from '.';
import {formatList, getRandomSubset} from '..';
import {GBFSFeedType} from '../../../common/types';
import {fetchStationStatusData} from './fetches';
import {QuizQuestionGenerator, QuizQuestionGeneratorFunction} from './types';

const generateNumberOfBikesQuestion: QuizQuestionGeneratorFunction = async (
  {text}: Partial<QuizQuestionGenerator>,
  gbfsServices: GBFSFeedType[],
) => {
  // Get a random subset of the services. We will
  // use this subset to get the total number of bikes for a couple of the cities
  const services = getRandomSubset(gbfsServices);
  const responses = await Promise.all(services.map(fetchStationStatusData));

  if (responses.length > 0) {
    const totalNumberOfBikes = responses.reduce(
      (accumulator, stationStatus) => {
        const numberOfBikes = stationStatus.data.stations.reduce(
          (sum: number, station: any) => sum + station['num_bikes_available'],
          0,
        );
        return accumulator + numberOfBikes;
      },
      0,
    );

    return getFormattedQuizQuestion(text, totalNumberOfBikes, {
      cities: formatList(services.map(service => service.city)),
    });
  }

  return null;
};

export default generateNumberOfBikesQuestion;
