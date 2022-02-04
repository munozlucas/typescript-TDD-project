export interface ITeam {
  position: (name: string, tShirt: number, skills: any[]) => any[]
}

export interface ISoccerPlay {
  attacker: (name: string) => void
}
