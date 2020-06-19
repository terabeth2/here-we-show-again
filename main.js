const parentElement = document.querySelector('.katas-list')

//Kata 1
const kata1Heading = document.createElement('h3')
kata1Heading.append('KATA 1')
parentElement.append(kata1Heading)

for (let counter1 = 1; counter1 <= 20; counter1 += 1) {
    const newElement = document.createElement('p')
    newElement.append(counter1)
    parentElement.append(newElement)
}

/** KATA 02 ⮕
***
*** Log the even numbers from 1 to 20. (2, 4, 6,...18,20)
***
***/const kata2Heading = document.createElement('h3')
kata2Heading.append('KATA 2')
parentElement.append(kata2Heading)

for (let counter2 = 2; counter2 <= 20; counter2 += 2) {
    const newElement = document.createElement('p')
    newElement.append(counter2)
    parentElement.append(newElement)
}

/** KATA 03 ⮕
***
*** Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
***
***/
const kata3Heading = document.createElement('h3')
kata3Heading.append('KATA 3')
parentElement.append(kata3Heading)

for (let counter3 = 1; counter3 <= 20; counter3 += 2) {
    const newElement = document.createElement('p')
    newElement.append(counter3)
    parentElement.append(newElement)
}



/** KATA 04 ⮕
***
*** Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
***
***/
const kata4Heading = document.createElement('h3')
kata4Heading.append('KATA 4')
parentElement.append(kata4Heading)

for (let counter4 = 5; counter4 <= 100; counter4 += 5) {
    const newElement = document.createElement('p')
    newElement.append(counter4)
    parentElement.append(newElement)
}

/** KATA 05 ⮕
***
*** Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
***
***/
const kata5Heading = document.createElement('h3')
kata5Heading.append('KATA 5')
parentElement.append(kata5Heading)

for (let counter5 = 1; counter5 <= 100; counter5 += 1) {
    const isSquare = Number.isInteger(Math.sqrt(counter5));
    if (isSquare) {

        const newElement = document.createElement('p')
        newElement.append(counter5)
        parentElement.append(newElement)
    }
}
/** KATA 06 ⮕
***
*** Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
***
***/
const kata6Heading = document.createElement('h3')
kata6Heading.append('KATA 6')
parentElement.append(kata6Heading)

for (let counter6 = 20; counter6 >= 1; counter6 -= 1) {

    const newElement = document.createElement('p')
    newElement.append(counter6)
    parentElement.append(newElement)
}


/* Write your KATA 06 code in place of THIS comment. */


/** KATA 07 ⮕
***
*** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
***
***/
const kata7Heading = document.createElement('h3')
kata7Heading.append('KATA 7')
parentElement.append(kata7Heading)

for (let counter7 = 20; counter7 >= 2; counter7 -= 2) {
    const newElement = document.createElement('p')
    newElement.append(counter7)
    parentElement.append(newElement)
}



/* Write your KATA 07 code in place of THIS comment. */


/** KATA 08 ⮕
***
*** Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
***
***/
const kata8Heading = document.createElement('h3')
kata8Heading.append('KATA 8')
parentElement.append(kata8Heading)

for (let counter8 = 19; counter8 >= 1; counter8 -= 2) {
    const newElement = document.createElement('p')
    newElement.append(counter8)
    parentElement.append(newElement)
}


/* Write your KATA 08 code in place of THIS comment. */


/** KATA 09 ⮕
***
*** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
***
***/
const kata9Heading = document.createElement('h3')
kata9Heading.append('KATA 9')
parentElement.append(kata9Heading)

for (let counter9 = 100; counter9 >= 5; counter9 -= 5) {
    const newElement = document.createElement('p')
    newElement.append(counter9)
    parentElement.append(newElement)
}



/* Write your KATA 09 code in place of THIS comment. */


/** KATA 10 ⮕
***
*** Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
***
***/
const kata10Heading = document.createElement('h3')
kata10Heading.append('KATA 10')
parentElement.append(kata10Heading)

for (let counter10 = 10; counter10 >= 1; counter10 -= 1) {
    const newElement = document.createElement('p')
    newElement.append(counter10 * counter10)
    parentElement.append(newElement)
}

//kata 11
const kata11Heading = document.createElement('h3')
kata11Heading.append('KATA 11')
parentElement.append(kata11Heading)

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

for (let counter11 = 0; counter11 < sampleArray.length; counter11 += 1) {
    const newElement = document.createElement('p')
    newElement.append(sampleArray[counter11])
    parentElement.append(newElement)
}

//kata12
const kata12Heading = document.createElement('h3')
kata12Heading.append('KATA 12')
parentElement.append(kata12Heading)

for (let counter12 = 0; counter12 < sampleArray.length; counter12 += 1) {
    if (sampleArray[counter12] % 2 === 0) {
        const newElement = document.createElement('p')
        newElement.append(sampleArray[counter12])
        parentElement.append(newElement)
    }
}

//kata 13

const kata13Heading = document.createElement('h3')
kata13Heading.append('KATA 13')
parentElement.append(kata13Heading)

for (let counter13 = 0; counter13 < sampleArray.length; counter13 += 1) {
    if (sampleArray[counter13] % 2 === 1) {
        const newElement = document.createElement('p')
        newElement.append(sampleArray[counter13])
        parentElement.append(newElement)
    }
}

//kata 14
const kata14Heading = document.createElement('h3')
kata14Heading.append('KATA 14')
parentElement.append(kata14Heading)


for (let counter14 = 0; counter14 < sampleArray.length; counter14 += 1) {
    const newElement = document.createElement('p')
    newElement.append(sampleArray[counter14]* sampleArray[counter14])
    parentElement.append(newElement)
}

//kata 15

const kata15Heading = document.createElement('h3')
kata15Heading.append('KATA 15')
parentElement.append(kata15Heading)
let sumTotal15 = 0

for (let counter15 = 1; counter15 <= 20; counter15 += 1) {
sumTotal15 += counter15
}
const newElement15= document.createElement('p')
newElement15.append(sumTotal15)
parentElement.append(newElement15)

//kata 16
const kata16Heading = document.createElement('h3')
kata16Heading.append('KATA 16')
parentElement.append(kata16Heading)
let sumTotal16 = 0


for (let counter16 = 0; counter16 < sampleArray.length; counter16 += 1) {
    sumTotal16 += sampleArray[counter16]

}
const newElement16 = document.createElement('p')
newElement16.append(sumTotal16)
parentElement.append(newElement16)

//kata 17
const kata17Heading = document.createElement('h3')
kata17Heading.append('KATA 17')
parentElement.append(kata17Heading)


const newElement17 = document.createElement('p')
        newElement17.append(Math.min(...sampleArray))
        parentElement.append(newElement17)

//kata18
const kata18Heading = document.createElement('h3')
kata18Heading.append('KATA 18')
parentElement.append(kata18Heading)


const newElement18 = document.createElement('p')
        newElement18.append(Math.max(...sampleArray))
        parentElement.append(newElement18)
