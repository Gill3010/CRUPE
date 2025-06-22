
import PropTypes from 'prop-types';

const ResponsiveGrid = ({ children }) => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8 py-12">
      {children}
    </div>
  );
};

ResponsiveGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResponsiveGrid;