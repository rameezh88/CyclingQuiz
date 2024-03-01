import {generateAnswers} from '.';
import {formatList, formatString, getRandomSubset} from '..';
import {GBFSFeedType} from '../../../common/types';
import {fetchStationData} from './fetches';
import {QuizQuestionGenerator, QuizQuestionGeneratorFunction} from './types';

const generateNumberOfBikesQuestion: QuizQuestionGeneratorFunction = async (
  {text}: Partial<QuizQuestionGenerator>,
  gbfsServices: GBFSFeedType[],
) => {
  // Get a random subset of the services. We will
  // use this subset to get the total number of bikes for a couple of the cities
  const services = getRandomSubset(gbfsServices);
  const responses = await Promise.all(services.map(fetchStationData));

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

    // Todo: This generation can be optimized in the future
    const question = text
      ? formatString(text, {
          cities: formatList(services.map(service => service.city)),
        })
      : '';
    return {
      question,
      answers: generateAnswers(totalNumberOfBikes),
    };
  }

  return null;
};

export default generateNumberOfBikesQuestion;
