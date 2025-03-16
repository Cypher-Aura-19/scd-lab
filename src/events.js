const fs = require('fs');
const path = require('path');

const eventsFile = path.join(__dirname, '../data/events.json');

function loadEvents() {
    if (!fs.existsSync(eventsFile)) return [];
    return JSON.parse(fs.readFileSync(eventsFile, 'utf-8'));
}

function saveEvents(events) {
    fs.writeFileSync(eventsFile, JSON.stringify(events, null, 2));
}

function createEvent(name, description, date, time, category, reminder) {
    const events = loadEvents();
    const newEvent = { id: events.length + 1, name, description, date, time, category, reminder };
    events.push(newEvent);
    saveEvents(events);
    return newEvent;
}

function getUpcomingEvents(filter = null) {
    const events = loadEvents();
    return events.filter(event => {
        if (!filter) return true;
        if (filter.category && event.category !== filter.category) return false;
        if (filter.reminder && !event.reminder) return false;
        return true;
    }).sort((a, b) => new Date(a.date) - new Date(b.date));
}

module.exports = { createEvent, getUpcomingEvents };
