import { IContract } from '../interfaces/IContract'

export class ContractModel {
  constructor (protected readonly contract: IContract) {}

  getId (): string {
    return this.contract.id
  }

  getDateInit (): Date {
    return this.contract.date_init
  }

  getExpirationDate (): Date {
    return this.contract.expiration_date
  }

  getMonth (): number {
    return this.contract.month
  }

  getMonthlyCost (): number {
    return this.contract.monthlyCost
  }
}

export class ContractPrime extends ContractModel {
  monthlyDiscount (): number {
    return this.contract.monthlyCost * 0.10
  }
}
