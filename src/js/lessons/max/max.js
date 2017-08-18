import '../max/max.html'
import {RandomGenerator} from "../../src/js/random-generator";

const outputParagraph = $('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.text(RandomGenerator.randomInteger());
};

const outputRandomRange = () => {
    outputParagraph.text(RandomGenerator.randomRange(1, 500));
};

const buttonRndInt = $('#randomInt');
const buttonRndRange = $('#randomRange');

buttonRndInt.on('click', outputRandomInt);
buttonRndRange.click(outputRandomRange);
