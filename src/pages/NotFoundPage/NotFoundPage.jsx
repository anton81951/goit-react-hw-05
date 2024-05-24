import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>
        <b>
          <Link to="/">Go back to Home</Link>
        </b>
      </p>
    </div>
  );
};

export default NotFoundPage;