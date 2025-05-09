import { useRouteError } from 'react-router-dom';
import NotFoundPage404 from '../../components/404';
import ForbiddenPage403 from '../../components/403';
import AuthorizationRequiredPage401 from '../../components/401';

const NotFoundPage = () => {
  const error = useRouteError() as { status?: number };
  
  if (error.status === 403) {
    return <ForbiddenPage403 />;
  }

  if (error.status === 401) {
    return <AuthorizationRequiredPage401 />;
  }
  
  return <NotFoundPage404 />;
};

export { NotFoundPage };