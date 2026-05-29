export default function ServicePage({ title, description, content }) {
  return (
    <div style={{ padding: '60px 40px', maxWidth: '1000px', margin: '0 auto', color: '#fff', background: '#000' }}>
      <h1 style={{ color: '#2196f3', fontSize: '48px', marginBottom: '20px' }}>data center consulting</h1>
      <p style={{ fontSize: '20px', color: '#ccc', marginBottom: '40px' }}>{description}</p>
      <div style={{ lineHeight: '1.8' }}>
        {content}
      </div>
    </div>
  );
}