import React from "react";
import {
  Truck,
  SprayCan as Spray,
  Star,
  Package,
  Plus,
  MapPin
} from "lucide-react";
import "./pricing.css";

function PriceCard({ title, items, icon: Icon }) {
  return (
    <div className="price-card">
      <div className="card-header">
        <Icon />
        <h2>{title}</h2>
      </div>
      <ul className="price-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const sections = [
    {
      title: "Exterior Wash Services",
      icon: Truck,
      items: [
        "Small Rigid Truck: Starting from $120",
        "Large Rigid Truck: Starting from $150",
        "Prime Mover (Cabover): Starting from $180",
        "Prime Mover (Bonneted): Starting from $200",
        "Semi-Trailer (Flat Top): Starting from $250",
        "Semi-Trailer (Tautliner): Starting from $280",
        "B-Double (Flat Top): Starting from $300",
        "B-Double (Tanker): Starting from $350",
      ],
    },
    {
      title: "Interior Cleaning Services",
      icon: Spray,
      items: [
        "Standard Cab Clean: Starting from $130 (Vacuum, wipe down, windows, deodorize)",
        "Full Interior Detail: Starting from $180 (Includes deep cleaning of seats, carpets, and air vents)",
      ],
    },
    {
      title: "Premium Wash Packages",
      icon: Star,
      items: [
        "Basic Combo (Exterior + Interior Clean): Starting from $220 (Rigid Truck)",
        "Deluxe Combo (Exterior, Interior, Tyre Shine): Starting from $300 (Prime Mover)",
        "Full Fleet Package (Custom Pricing for 3+ Trucks): Contact for a custom quote",
      ],
    },
    {
      title: "Additional Services",
      icon: Plus,
      items: [
        "Tyre Shine: $5 per wheel",
        "Asphalt/Tar Removal from Wheels: Starting from $80",
        "Engine Degreasing: Starting from $100",
        "Underbody Rinse/Clean: Starting from $150",
      ],
    },
    {
      title: "Optional Add-Ons",
      icon: Package,
      items: [
        "Air Freshener Application: $15 (Premium scents available)",
        "Hand Wash Upgrade: Additional $50 (for delicate or specialty trucks)",
        "Mobile Call-Out Fee (Over 20km): $50 (covers fuel and travel time)",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-pricing" id='pricing'>
        <div className="container">
          <h1>Pricing Guide</h1>
          <div className="location">
            <MapPin />
            <p>Newcastle, NSW</p>
          </div>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="container">
        <div className="pricing-grid">
          {sections.map((section, index) => (
            <PriceCard key={index} {...section} />
          ))}
        </div>

        {/* Notes Section */}
        <div className="notes-section">
          <h2>Important Notes</h2>
          <ul className="notes-list">
            <li>
              Prices include travel within Newcastle and surrounding suburbs.
            </li>
            <li>
              Heavily soiled or off-road vehicles may incur additional cleaning
              fees.
            </li>
            <li>
              Fleet pricing and ongoing service agreements are available upon
              request.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
