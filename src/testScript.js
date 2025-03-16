const { createEvent, getUpcomingEvents } = require('./events');

console.log('Running Tests...');

createEvent('Meeting', 'Software Engineering Society meeting', '2025-03-15', '14:00', 'Meetings', true);
createEvent('Birthday Party', 'Ibrahim’s Birthday', '2025-03-20', '19:00', 'Birthdays', true);
createEvent('To Do Task', 'Do Gaming', '2025-05-10', '16:00', 'Hobbies', true);
createEvent('To Do Task', 'SCD Lab Task', '2025-03-20', '08:00', 'Study', true);

const events = getUpcomingEvents();
console.log(events.length > 0 ? 'Tests Passed!' : 'Tests Failed!');
