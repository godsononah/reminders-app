import PropTypes from 'prop-types';

function Reminder(props) {
    const handleChange = () => {
        props.setIsComplete(!props.isComplete, props.id);
    }

    return (
        <div className="item">
            item: {props.reminderText}
            <span className="due-date">due date: {props.dueDate}</span>
            <span className="is-complete">
                Completed?: <input type="checkbox"
                                   checked={props.isComplete}
                                   onChange={handleChange} /></span>
        </div>
    );
}

// Props Type Checking
Reminder.propTypes = {
    reminderText: PropTypes.string,
    dueDate: PropTypes.string,
    isComplete: PropTypes.bool
}

// Setting Default Props
const date = new Date();
const formattedDate = date.toISOString().substring(0, 10);

Reminder.defaultProps = {
        reminderText: "No Reminder Yet",
        dueDate: formattedDate,
        isComplete: false
}

export default Reminder;