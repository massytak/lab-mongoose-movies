const mongoose = require('mongoose')
const Celibrity = require('../models/celebrity')

mongoose.connect('mongodb://localhost/starter-code', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const celibritysChoice = [
    {
        name: 'arnold schwarzenegger',
        occupation: 'is an Austrian-American actor, director, film producer, bodybuilder and politician',
        catchPhrase: '“I’ll be back!” [The Terminator, Terminator 2: Judgment Day, Commando, The Running Man, Twins, Total Recall, Last Action Hero]'
    }, {
        name: 'Steven Seagal',
        occupation: 'is an American-Serbian-Russian actor, director, film producer, screenwriter, singer and musician. Originally known as an aikidoka, Steven Seagal was the first foreigner to run a dojo in Japan.',
        catchPhrase: 'One Thought He Was Invincible, The Other Thought He Could Fly. They Were Both Wrong." (Marked For Death)'
    }, {
        name: 'Sylvester Stallone',
        occupation: 'is an American actor, director, screenwriter and film producer of French and Italian descent.',
        catchPhrase: 'Once in one s life, for one mortal moment, one must make a grab for immortality; if not, one has not lived'
    }
];

Celibrity.insertMany(celibritysChoice)
    .then(function (celebrityFromDb) {
    console.log(celebrityFromDb);
    })
    .catch(err => console.log(err));
