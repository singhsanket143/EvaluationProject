export class BudgetModel {
  constructor(private value: number, private currency: {
    id: number,
    name: string,
    nameShort: string,
    order: string,
    internalIdentifier: string
  }) {}
}
