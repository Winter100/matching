import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  console.error(error);

  return <div>404...</div>;
};

export default ErrorPage;
