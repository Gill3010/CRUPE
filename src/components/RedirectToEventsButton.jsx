import { useNavigate } from 'react-router-dom';

const RedirectToEventsButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { replace: true }); // o la ruta que uses para la página principal
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
    >
      ← Volver a la página principal
    </button>
  );
};

export default RedirectToEventsButton;