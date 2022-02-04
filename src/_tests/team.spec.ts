import { Team } from '../models/team-model'

describe('Team Class', () => {
  it('Position', () => {
    const team = new Team()
    const position = {
      name: 'goalkeeper',
      tShirt: 1,
      skills: ['Kick hard', 'Run fast', 'Jump high']
    }

    expect(
      team.position(position.name, position.tShirt, position.skills)
    ).toEqual(['goalkeeper', 1, ['Kick hard', 'Run fast', 'Jump high']])
  })

  it('Soccer Player', () => {
    const soccerPlay = new Team()

    expect(soccerPlay.attacker('attacker')).toBe('attacker')
  })
})
