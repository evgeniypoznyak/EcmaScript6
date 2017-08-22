let talk = function(sound) {
    console.log(this.sound);
}

var boromir = {
    blabber: talk,
    sound: 'I can talk'
}

/*
let talkBoundToBoromir = talk.bind(boromir)
talkBoundToBoromir();*/

//boromir.speak = talk.bind(boromir)

let gollum = {
    jabber: boromir.blabber,
    sound: 'My preciousssss...'
}

gollum.jabber();