interface MatchParticipantPerksStyleSelection {
  perk: number
  var1: number
  var2: number
  var3: number
}

interface StatPerks {
  defense: number
  flex: number
  offense: number
}

interface MatchParticipantPerksStyle {
  description: string
  selections: MatchParticipantPerksStyleSelection[]
  style: number
}

interface MatchParticipantPerks {
  statPerks: StatPerks
  styles: MatchParticipantPerksStyle[]
}

interface MatchParticipant {
  puuid: string
  score: number
  win: boolean
  championName: string
  perks: MatchParticipantPerks
}

interface BackendSummonerMatch {
  id: string
  gameVersion: string
  gameCreation: number
  gameDuration: number
  gameMode: string
  participants: MatchParticipant[]
}

export default BackendSummonerMatch
