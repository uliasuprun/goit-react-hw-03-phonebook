import PropTypes from 'prop-types';
import { FindByName, FilterInput } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <FindByName>
      Find contact by name:
      <FilterInput type="text" value={filter} onChange={onChange} />
    </FindByName>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
