import {StoryProductionModel} from './story-production.model';

export class CombinationCreativeBusinessModel {
  constructor(
    private businesses: [{
      Story: StoryProductionModel,
      Production: StoryProductionModel
    }],
    isIndividual: boolean,
    isMismatch: boolean
  ) {}
}
