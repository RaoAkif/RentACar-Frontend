import { PropTypes } from 'prop-types';
import { ReactComponent as ZoomGlass } from '../assets/images/magnifying-glass.svg';

function NotFound({ msg }) {
  return (
    <div className="not-found-container">
      <ZoomGlass className="zoom-glass" />
      <h1>Not Found</h1>
      <p>{msg}</p>
      <a href="/">Go Home</a>
    </div>
  );
}

NotFound.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default NotFound;
