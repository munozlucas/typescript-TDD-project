export class Food {
  private readonly name: string
  private readonly description: string
  private readonly price: number

  constructor (name: string, description: string, price: number) {
    this.name = name
    this.description = description
    this.price = price
  }

  getName (): string {
    return this.name
  }

  getDescription (): string {
    return this.description
  }

  getPrice (): number {
    return this.price
  }
}
