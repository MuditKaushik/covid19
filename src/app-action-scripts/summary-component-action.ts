import $ from 'jquery';

export class nCovidSummaryComponentAction { }
let summary = new nCovidSummaryComponentAction();

$(document).on('click', 'div.pointer', () => {
    console.log(summary);
});
