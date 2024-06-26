// pages/index.tsx
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Button from "@/components/common/Button";

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <div className="img-container">
        <Image
          src="/sam-ro.jpeg"
          alt="Samantha and Rodrigo Wedding"
          layout="fill"
          className="background-image"
        />
        <h1 className="image-overlay">
          Dive into Samantha & Rodrigo&apos;s Wedding Itineraries
        </h1>
      </div>
      <Link href="/itinerary/antes-boda-civil" passHref>
        <Button variant="primary">Pre Civil Marriage</Button>
      </Link>
      <Link href="/itinerary/boda-civil" passHref>
        <Button variant="primary">Civil Marriage</Button>
      </Link>
      <Link href="/itinerary/antes-boda-playa" passHref>
        <Button variant="primary">Friday, August 23</Button>
      </Link>
      <Link href="/itinerary/boda-playa" passHref>
        <Button variant="primary">Beach wedding</Button>
      </Link>
    </div>
  );
};

export default HomePage;
