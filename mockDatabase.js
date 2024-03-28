const notes = [
    {   
        id: 1,
        title: "My First Note",
        timestamp: Date.now(),
        contents: "Annoy owner until he gives you food say meow repeatedly until belly rubs, feels good tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad attack feet. Chew iPad power cord. Ask for petting Gate keepers of hell, always hungry so destroy the blinds but love and cough hairball, eat toilet paper so find empty spot in cupboard and sleep all day.",
    },
    {   
        id: 2,
        title: "My Second Note",
        timestamp: Date.now(),
        contents: "Naughty running cat. All of a sudden cat goes crazy meow meow, i tell my human for pounce on unsuspecting person but i shall purr myself to sleep licks paws pee on walls it smells like breakfast. Sniff other cat's butt and hang jaw half open thereafter meow meow pee in shoe for take a deep sniff of sock then walk around with mouth half open burrow under covers that box?",
    },
    {   
        id: 3,
        title: "My Third Note",
        timestamp: Date.now(),
        contents: "Annoy owner until he gives you food say meow repeatedly until belly rubs, feels good tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad attack feet. Chew iPad power cord. Ask for petting Gate keepers of hell, always hungry so destroy the blinds but love and cough hairball, eat toilet paper so find empty spot in cupboard and sleep all day.",
    }
]

function getNotes() {
    return notes
}
exports.getNotes = getNotes

function getNote(id) {
    return notes.find(note => note.id === id);
}
exports.getNote = getNote

function addNote(note) {
    notes.push({
        ...note,
        id: notes.length + 1,
        timestamp: Date.now()
    })
}
exports.addNote = addNote

function deleteNote(id) {
    
}
exports.deleteNote = deleteNote