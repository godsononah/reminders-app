import PropTypes from 'prop-types';
import Reminder from "./Reminder";

function RemindersList(props) {
    const reminders = props.reminders.map((reminder, index) => {
        return (<Reminder reminderText={reminder.reminderText}
                          dueDate={reminder.dueDate}
                          isComplete={reminder.isComplete}
                          id={index}
                          key={index} />);
    })

    return (
        <div>
            {reminders}
        </div>
    );
}

RemindersList.propTypes = {
    reminders: PropTypes.array
}

// Props Type Checking
const date = new Date();
const formattedDate = date.toISOString().substring(0, 10);

// Setting Default Props
RemindersList.defaultProps = {
    reminders: [{
        reminderText: "No Reminders Yet",
        dueDate: formattedDate,
        isComplete: false
    }]
}

export default RemindersList;