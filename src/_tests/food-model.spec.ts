import { Food } from '../models/food-model'

describe('Food', () => {
  it('Class foodModel', () => {
    const foodModel = new Food('Apple', 'sweet apple', 20)

    expect(foodModel.getName()).toEqual('Apple')
    expect(foodModel.getDescription()).toEqual('sweet apple')
    expect(foodModel.getPrice()).toBe(20)
  })
})
