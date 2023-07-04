import { Cell } from "./Cell";
import PropTypes from 'prop-types';

export const CellContainer = (props) => {

    const cells = props.dateArray;

    return (
        <div className="cellContainer">
            {cells.map((item, index) => {
                return <Cell key={index} item={item} />
            })}
        </div>
    );
}

CellContainer.propTypes = {
    dateArray: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        contributions: PropTypes.number.isRequired
      })
    ).isRequired
  };