"use client";

const teamMembers = [
  { id: 1, name: "JATIN", image: "/images/jatin.jpg" },
  { id: 2, name: "DIMPLE SHAH", image: "/images/dimple.jpg" },
  { id: 3, name: "IMTIYAZ PEWEKAR", image: "/images/imtiyaz.jpg" }
];

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-header">
        <h2 className="team-main-title">Our Team</h2>
        <div className="team-title-line" />
      </div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="member-card">
            <div className="image-wrapper">
              <img src={member.image} alt={member.name} className="member-img" />
            </div>
            
            <div className="member-footer">
              <h3 className="member-name">{member.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .team-section {
          padding: 60px 20px;
          background: #0d47a1;
        }
        .team-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .team-main-title {
          color: #fff;
          font-size: 30px;
          font-weight: 800;
          margin-bottom: 10px;
        }
        .team-title-line {
          width: 40px;
          height: 3px;
          background: #fff;
          margin: 0 auto;
        }
        .team-grid {
          max-width: 900px; /* Reduced max-width to make them fit tighter */
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* Forces 3 columns */
          gap: 20px; /* Reduced gap */
        }
        .member-card {
          background: #fff;
          border-radius: 16px;
          padding: 25px 15px; /* Reduced padding */
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s ease;
        }
        .member-card:hover {
          transform: translateY(-8px);
        }
        .image-wrapper {
          width: 120px; /* Reduced size */
          height: 120px;
          margin-bottom: 15px;
        }
        .member-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #f0f4f8;
        }
        .member-name {
          font-size: 16px; /* Smaller font */
          font-weight: 800;
          color: #1565c0;
          margin: 0;
        }
        
        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
}