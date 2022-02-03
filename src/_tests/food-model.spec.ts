import { Food } from '../models/food-model'

describe('Food', () => {
  it('Class foodModel', () => {
    const foodModel = new Food({
      name: 'Apple',
      description: 'sweet apple',
      price: 20,
      inventory: 80
    })

    expect(foodModel.getName()).toEqual('Apple')
    expect(foodModel.getDescription()).toEqual('sweet apple')
    expect(foodModel.getPrice()).toBe(20)
    expect(foodModel.getInventory()).toBe(80)
  })
})
