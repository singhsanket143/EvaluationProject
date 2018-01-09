import {StoryProductionModel} from './story-production.model';

export class SingleCreativeBusinessModel {

  constructor(private storyAndProduction: StoryProductionModel, private isIndividual: boolean, private isMismatch: boolean) {}
}
