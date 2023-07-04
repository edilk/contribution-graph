/* eslint-disable react/prop-types */
import '../index.css';

export const Cell = ({item}) => {

    const nine = item.contributions > 0 && item.contributions < 10;
    const nineteen = item.contributions >= 10 && item.contributions < 20;
    const twentyNine = item.contributions >= 20 && item.contributions < 30;
    const thirtyPlus = item.contributions >= 30;

    let title = `No contributions\n${item.tooltip}`;

    if (item.contributions > 0) {
        title = `${item.contributions} contributions\n${item.tooltip}`;
    }
    
    return (
        
        <div title={title} className={`cell ${nine ? 'nine' : ''}${nineteen ? 'nineteen' : ''}${twentyNine ? 'twentyNine' : ''}${thirtyPlus ? 'thirtyPlus' : ''}`}>
        
        </div>
    );
}