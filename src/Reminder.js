import PropTypes from 'prop-types';

function Reminder(props) {
    return (
        <div>
            item: {props.reminderText}
            due date: {props.dueDate}
            Completed?: {String(props.isComplete)}
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