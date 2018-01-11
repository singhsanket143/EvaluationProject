import {BudgetModel} from './budget.model';

export class StoryProductionModel {
  constructor(
    private id: number,
    private name: string,
    private profilePhoto: any,
    private profileURL: string,
    private location: {
      cities: [{
        name: string
      }]
    },
    private startingBudget: BudgetModel,
    private startingTime: any,
    private isShortListed: boolean,
    private proposalDeposit: number,
    private firstProposalFree: boolean
  ) {}
}
