"use client";

import { World } from "@/components/ui/globe";

const sampleArcs = [
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: "#5DCAA5",
  },
  {
    order: 2,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: "#5DCAA5",
  },
  {
    order: 3,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: "#5DCAA5",
  },
  {
    order: 4,
    startLat: 40.7128,
    startLng: -74.006,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.3,
    color: "#185FA5",
  },
  {
    order: 5,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: -23.5505,
    endLng: -46.6333,
    arcAlt: 0.3,
    color: "#5DCAA5",
  },
  {
    order: 6,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.3,
    color: "#185FA5",
  },
  {
    order: 7,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 48.8566,
    endLng: 2.3522,
    arcAlt: 0.3,
    color: "#5DCAA5",
  },
  {
    order: 8,
    startLat: 55.7558,
    startLng: 37.6173,
    endLat: 39.9042,
    endLng: 116.4074,
    arcAlt: 0.3,
    color: "#185FA5",
  },
];

export default function AboutGlobe() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#0D2040",
    showAtmosphere: true,
    atmosphereColor: "#5DCAA5",
    atmosphereAltitude: 0.15,
    emissive: "#000000",
    emissiveIntensity: 0.15,
    shininess: 1,
    polygonColor: "rgba(255,255,255,0.85)",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1500,
    arcLength: 0.9,
    rings: 2,
    maxRings: 4,
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (
  
  <div className="h-[260px] w-full sm:h-[350px] md:h-[450px] lg:h-[600px]">
      <World globeConfig={globeConfig} data={sampleArcs} />
    </div>

  );
}

