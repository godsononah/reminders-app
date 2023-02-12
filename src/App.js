import InputForm from './InputForm';
import FilterSelect from './FilterSelect';
import RemindersList from './RemindersList';
import { useState } from 'react';

function App() {
    const [reminders, setReminders] = useState();
    const [userInput, setUserInput] = useState();
    const [selectedFilter, setSelectedFilter] = useState('all');

    return (
        <div>
            <InputForm userInput={userInput} setUserInput={setUserInput} />
            <FilterSelect selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
            <RemindersList reminders={reminders} setReminders={setReminders} />
        </div>
    );
}

export default App;