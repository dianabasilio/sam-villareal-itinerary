// Definiciones de los tipos para itinerarios
export interface Event {
  time: string;
  name: string;
  person: string;
}

export interface Itinerary {
  title: string;
  events: Event[];
}

export interface ItineraryMap {
  [key: string]: Itinerary;
}
