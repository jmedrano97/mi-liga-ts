import { type TODO_FILTERS } from "./consts";
export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    }

export type TodoId = Pick<Todo, "id">;
export type TodoTitle = Pick<Todo, "title">;
export type TodoCompleted = Pick<Todo, "completed">;

export type ListOfTodos = Todo[];

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS];

export interface Leagues {
    id: id;
    img: string;
    description: string;
    name: string;
    league_link: string;
  }
  
export type ListOfLeagues = Leagues[];

export interface CompetitionLeague {
  competition_id: number;
  name: string;
  league_id: number;
  typeOfCompetitions_id: number;
  typeOfCompetitions_name: string;
}

export type CompetitionsLeagueState = CompetitionLeague[];

export interface Match {
  match_id: number;
  competition_id: number;
  competition_name: string;
  home_team_id: number;
  home_team_name: string;
  away_team_id: number;
  away_team_name: string;
  home_team_score: number;
  away_team_score: number;
  match_date: string;
  created_at: string;
  finished: boolean;
  matchday: number;
}

export type ListOfMatches = Match[];

export interface Team {
  team_id: number,
  name: string,
  league_id: number,
  created_at: string,
  img: string
}

export type ListOfTeams = Team[];