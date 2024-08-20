function shout(string) {
    // todo
}
function shout(string) {
    return string;
}
"HELLO!".toUpperCase(); // 'HELLO!'
function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    // todo
}
function whisper(string) {
    return string;
}
"hello!".toLowerCase(); // 'hello!'
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return "I can't hear you!";
    }
    if (string.toUpperCase() === string) {
        return "YES INDEED!";
    }
    if (string === "Let's have dinner together!") {
        return "I would love to!"
    }
}



