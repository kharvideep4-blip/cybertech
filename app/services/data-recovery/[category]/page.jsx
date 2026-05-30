// app/services/data-recovery/[category]/page.jsx
import { servicesData } from "../../../data/servicesData";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }) {
  const { category } = params;
  const data = servicesData[category];

  if (!data) notFound(); 

  return (
    <main style={{ padding: '50px', color: '#fff', background: '#000', minHeight: '100vh' }}>
      <h1>{data.title}</h1>
      <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>{data.description}</p>
    </main>
  );
}

// THIS IS THE CRITICAL PART FOR FIXING 404s
export async function generateStaticParams() {
  // This must return an array of all possible slug strings
  return Object.keys(servicesData).map((slug) => ({
    category: slug,
  }));
}