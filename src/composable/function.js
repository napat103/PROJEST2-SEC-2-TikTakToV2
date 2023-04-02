const shuffle = () => {
    const slot1 = Math.floor(Math.random() * 9);
    const slot2 = Math.floor(Math.random() * 9);
    const slot3 = Math.floor(Math.random() * 9);
    const allSlot = [slot1, slot2, slot3];
    return allSlot;
};

function testWin(array) {
    const slot1 = array[0]
    const slot2 = array[1]
    const slot3 = array[2]

    if (((slot1 === slot2 && slot2 === slot3) ||
        (slot1 === slot2 && slot3 === 8) ||
        (slot1 === slot3 && slot2 === 8) ||
        (slot2 === slot3 && slot1 === 8) ||
        (slot1 === slot2 && slot1 === 8) ||
        (slot1 === slot3 && slot1 === 8) ||
        (slot2 === slot3 && slot2 === 8))) {
        return 'YOU WIN!'
    } else {
        return 'YOU LOSE!'
    }
}
const countScore = (array) => {
    const slot1 = array[0]
    const slot2 = array[1]
    const slot3 = array[2]

    let score = 0

    // SAME 3
    if (slot1 === slot2 && slot2 === slot3 && slot1 === 0) {
        score = 100
        return score
    }
    if (slot1 === slot2 && slot2 === slot3 && slot1 === 1) {
        score = 200
        return score
    }
    if (slot1 === slot2 && slot2 === slot3 && slot1 === 2) {
        score = 300
        return score
    }
    if (slot1 === slot2 && slot2 === slot3 && slot1 === 3) {
        score = 400
        return score
    }
    if (slot1 === slot2 && slot2 === slot3 && slot1 === 4) {
        score = 500
        return score
    }
    if (slot1 === slot2 && slot2 === slot3 && slot1 === 5) {
        score = 600
        return score
    }
    if (slot1 === slot2 && slot2 === slot3 && slot1 === 6) {
        score = 700
        return score
    }
    if (slot1 === slot2 && slot2 === slot3 && slot1 === 7) {
        score = 800
        return score
    }
    if (slot1 === slot2 && slot2 === slot3 && slot1 === 8) {
        score = 1000
        return score
    }
    // SAME 2
    if (((slot1 === slot2 && slot3 === 8) && slot1 === 0) || ((slot1 === slot3 && slot2 === 8) && slot1 === 0) || ((slot2 === slot3 && slot1 === 8) && slot2 === 0)) {
        score = 10
        return score
    }
    if (((slot1 === slot2 && slot3 === 8) && slot1 === 1) || ((slot1 === slot3 && slot2 === 8) && slot1 === 1) || ((slot2 === slot3 && slot1 === 8) && slot2 === 1)) {
        score = 20
        return score
    }
    if (((slot1 === slot2 && slot3 === 8) && slot1 === 2) || ((slot1 === slot3 && slot2 === 8) && slot1 === 2) || ((slot2 === slot3 && slot1 === 8) && slot2 === 2)) {
        score = 30
        return score
    }
    if (((slot1 === slot2 && slot3 === 8) && slot1 === 3) || ((slot1 === slot3 && slot2 === 8) && slot1 === 3) || ((slot2 === slot3 && slot1 === 8) && slot2 === 3)) {
        score = 40
        return score
    }
    if (((slot1 === slot2 && slot3 === 8) && slot1 === 4) || ((slot1 === slot3 && slot2 === 8) && slot1 === 4) || ((slot2 === slot3 && slot1 === 8) && slot2 === 4)) {
        score = 50
        return score
    }
    if (((slot1 === slot2 && slot3 === 8) && slot1 === 5) || ((slot1 === slot3 && slot2 === 8) && slot1 === 5) || ((slot2 === slot3 && slot1 === 8) && slot2 === 5)) {
        score = 60
        return score
    }
    if (((slot1 === slot2 && slot3 === 8) && slot1 === 6) || ((slot1 === slot3 && slot2 === 8) && slot1 === 6) || ((slot2 === slot3 && slot1 === 8) && slot2 === 6)) {
        score = 70
        return score
    }
    if (((slot1 === slot2 && slot3 === 8) && slot1 === 7) || ((slot1 === slot3 && slot2 === 8) && slot1 === 7) || ((slot2 === slot3 && slot1 === 8) && slot2 === 7)) {
        score = 80
        return score
    }
    // SAME 77
    if ((slot1 === slot2 && slot1 === 8) || (slot1 === slot3 && slot1 === 8) || (slot2 === slot3 && slot2 === 8)) {
        score = 500
        return score
    }
    else {
        return score
    }
}

export { shuffle, testWin, countScore };