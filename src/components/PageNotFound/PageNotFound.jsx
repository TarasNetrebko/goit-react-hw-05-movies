import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <>
      <h1>Error:404! Page not Found!</h1>
      <Link to="/">Go Home</Link>
    </>
  );
};
export default PageNotFound;