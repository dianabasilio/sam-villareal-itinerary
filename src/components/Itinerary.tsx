import React, { useState } from "react";
import Table from "@/components/common/Table";
import { Itinerary as ItineraryType } from "@/types/types";
import styles from "./Itinerary.module.scss";

const Itinerary: React.FC<{ itinerary: ItineraryType }> = ({ itinerary }) => {
  const columns = ["Hora", "Actividad", "Responsable"];
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(itinerary.events);

  const handleSearch = (event: any) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    if (!value) {
      setFilteredData(itinerary.events);
    } else {
      const filtered = itinerary.events.filter(
        (event) =>
          event.time.toLowerCase().includes(value) ||
          event.name.toLowerCase().includes(value) ||
          event.person.toLowerCase().includes(value) ||
          event.person.toLowerCase() === "todas"
      );
      setFilteredData(filtered);
    }
  };

  const data = filteredData.map((event) => ({
    Hora: event.time,
    Actividad: event.name,
    Responsable: event.person,
  }));

  return (
    <div className={styles["itinerary-container"]}>
      <input
        type="text"
        placeholder="Buscar actividad o responsable"
        value={searchTerm}
        onChange={handleSearch}
        className={styles.searchInput}
      />
      <h1 className={styles.title}>{itinerary.title}</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Itinerary;
