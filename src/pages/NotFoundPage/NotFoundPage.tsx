import { useRouteError } from 'react-router-dom';

export const NotFoundPage = () => {
  const error = useRouteError();
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Oops!</h1>
      <p>Trang bạn đang tìm kiếm không tồn tại.</p>
      <p>
        {error instanceof Error ? error.message : ''}
      </p>
    </div>
  );
};