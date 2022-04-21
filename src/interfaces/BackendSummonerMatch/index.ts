import { BackendSummonerMatchInfoParticipant } from 'interfaces'

interface MatchInfoTeamObjectiveElement {
  first: boolean
  kills: number
}

interface MatchInfoTeamObjective {
  baron: MatchInfoTeamObjectiveElement
  champion: MatchInfoTeamObjectiveElement
  dragon: MatchInfoTeamObjectiveElement
  inhibitor: MatchInfoTeamObjectiveElement
  riftHerald: MatchInfoTeamObjectiveElement
  tower: MatchInfoTeamObjectiveElement
}

interface MatchInfoTeam {
  bans: string[]
  objectives: MatchInfoTeamObjective
  teamId: number
  win: boolean
}

interface MatchMetadata {
  dataVersion: string
  matchId: string
  participants: string[]
}

interface MatchInfo {
  gameCreation: number
  gameDuration: number
  gameEndTimestamp: number
  gameId: number
  gameMode: string
  gameName: string
  gameStartTimestamp: number
  gameType: string
  gameVersion: string
  mapId: number
  participants: BackendSummonerMatchInfoParticipant[]
  platformId: string
  queueId: number
  teams: MatchInfoTeam[]
  tournamentCode: string
}

interface BackendSummonerMatch {
  metadata: MatchMetadata
  info: MatchInfo
}

export default BackendSummonerMatch
