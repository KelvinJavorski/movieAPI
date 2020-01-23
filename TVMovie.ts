import Collection from "./Collection"
import Informations from "./Informations"
import SpokenLanguages from "./SpokenLanguages"
import ProdCountries from "./ProdCountries"

class TVMovie extends Informations{
  adult: boolean;
  belongs_to_collection: Collection;
  budget: number;
  imdb_id: string;
  original_title: string
  production_countries: ProdCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguages[];
  tagline: string;
  title: string;
  video: boolean;

  constructor(){
    super();
  }
}