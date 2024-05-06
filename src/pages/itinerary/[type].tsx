"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Itinerary from "@/components/Itinerary";
import itineraries from "@/data/itineraries";
import { Itinerary as ItineraryType } from "@/types/types";

const ItineraryPage: React.FC = () => {
  const router = useRouter();
  const { type } = router.query;
  const [itinerary, setItinerary] = useState<ItineraryType | null>(null);

  useEffect(() => {
    if (typeof type === "string") {
      setItinerary(itineraries[type]);
    }
  }, [type]);

  if (!itinerary) {
    return <p>No se encontró el itinerario para {type}.</p>;
  }

  return <Itinerary itinerary={itinerary} />;
};

export default ItineraryPage;
