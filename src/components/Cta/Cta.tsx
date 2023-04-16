import Link from 'next/link';

const Cta = () => {
  return (
    <div className="cta">
      <h2>¿Listo para mejorar tus habilidades de programación?</h2>
      <Link href="/aplicaciones">
        <span className="cta-btn">Explora nuestras aplicaciones</span>
      </Link>
    </div>
  );
};

export default Cta;
