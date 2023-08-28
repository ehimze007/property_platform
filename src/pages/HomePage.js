import Header from "../components/Header";
import Link from "react-router-dom";

function HomePage() {
  const featuredProperty = {
    id: 1,
    title: "Luxurious Villa",
    image: "villa.jpg",
    price: "$1,200,000",
  };

  const recentProperties = [
    {
      id: 2,
      title: "Modern Apartment",
      image: "apartment.jpg",
      price: "$500,000",
    },
    {
      id: 3,
      title: "Cozy Cottage",
      image: "cottage.jpg",
      price: "$300,000",
    },
  ];

  return (
    <div>
      <Header />
      <header>
        <h1>Welcome to Property Platform</h1>
        <p>Your source for buying and renting properties.</p>
      </header>

      <section className="featured-property">
        <h2>Featured Property</h2>
        <div className="property-card">
          {/* <img src={featuredProperty.image} alt={featuredProperty.title} /> */}
          <h3>{featuredProperty.title}</h3>
          <p>{featuredProperty.price}</p>
          {/* <Link to={`/property/${featuredProperty.id}`}>View Details</Link> */}
        </div>
      </section>
      <section className="recent-properties">
        <h2>Recent Properties</h2>
        <div className="property-list">
          {recentProperties.map((property) => (
            <div className="property-card" key={property.id}>
              <img src={property.image} alt={property.title} />
              <h3>{property.title}</h3>
              <p>{property.price}</p>
              {/* <Link to={`/property/${property.id}`}>View Details</Link> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
