import { ISoccerPlay, ITeam } from '../interfaces/ITeam'

export class Team implements ITeam, ISoccerPlay {
  position (name: string, tShirt: number, skills: any[]): any[] {
    console.log(name, tShirt, skills)
    return [name, tShirt, skills]
  }

  attacker (name: string): string {
    return name
  }
}
