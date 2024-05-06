// pages/index.tsx
import Link from "next/link";
import React from "react";
import Button from "@/components/common/Button";

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <div className="img-container">
        <img
          src="sam-ro.jpeg"
          alt="Samantha and Rodrigo Wedding"
          className="background-image"
        />
        <h1 className="image-overlay">
          Dive into Samantha & Rodrigo's Wedding Itineraries
        </h1>
      </div>
      <Button variant="primary">
        <Link href="/itinerary/antes-boda-civil">Pre Boda Civil</Link>
      </Button>
      <Button variant="primary">
        <Link href="/itinerary/boda-civil">Boda Civil</Link>
      </Button>

      <Button variant="primary">
        <Link href="/itinerary/antes-boda-playa">Viernes 23 Agosto</Link>
      </Button>

      <Button variant="primary">
        <Link href="/itinerary/boda-playa">Boda en la Playa</Link>
      </Button>
    </div>
  );
};

export default HomePage;
