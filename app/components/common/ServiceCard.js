export default function ServiceCard({ title, description, link }) {
    return (
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        {link && (
          <a href={link} className="text-secondary font-bold hover:underline">
            Learn More
          </a>
        )}
      </div>
    );
  }
  