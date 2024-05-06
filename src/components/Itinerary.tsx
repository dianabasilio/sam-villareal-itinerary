import React from "react";
import Table from "@/components/common/Table";
import { Itinerary as ItineraryType } from "@/types/types";
import styles from "./Itinerary.module.scss";

const Itinerary: React.FC<{ itinerary: ItineraryType }> = ({ itinerary }) => {
  const columns = ["Hora", "Actividad", "Responsable"];

  const data = itinerary.events.map((event) => ({
    Hora: event.time,
    Actividad: event.name,
    Responsable: event.person,
  }));

  return (
    <div>
      <h1 className={styles.title}>{itinerary.title}</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Itinerary;
