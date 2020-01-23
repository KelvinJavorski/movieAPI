import { Informations } from "./Informations"
import { CreatedBy } from "CreatedBy"
import { LastEpisodeToAir } from "./LastEpisodeToAir"
import { Networks } from "./Networks"
import { Seasons } from "./Seasons"

class TVShow extends Informations{
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string
  in_production:  boolean
  languages:  string[];
  last_air_date:  string;
  last_episode_to_air:  LastEpisodeToAir;
  name: string
  next_episode_to_air:  null
  networks: Networks[];
  number_of_episodes: number;
  number_of_seasons:  number;
  origin_country: string[];
  original_name:  string;
  seasons:  Seasons[];
  type: string

  constructor(){
    super();
  }
}