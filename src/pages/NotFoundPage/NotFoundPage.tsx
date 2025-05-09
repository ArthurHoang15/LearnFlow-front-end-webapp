import { useRouteError } from 'react-router-dom';
import NotFoundPage404 from '../../components/404';
import ForbiddenPage403 from '../../components/403';

const NotFoundPage = () => {
  const error = useRouteError() as { status?: number };
  
  if (error.status === 403) {
    return <ForbiddenPage403 />;
  }
  
  return <NotFoundPage404 />;
};

export { NotFoundPage };