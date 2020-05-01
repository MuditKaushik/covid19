import $ from 'jquery';
import { DomUtility } from './dom-util-action';

export class nCovidSummaryComponentAction {
    protected readonly borderBottomClass = 'remove-bottom-border';
    protected readonly containerSummaryClass = 'summary';
    protected toggleBottom(element: HTMLElement): void {
        element.classList.toggle(this.borderBottomClass);
    }
    protected toggleMoveTop(element: HTMLElement): void {
        let parentId = element.dataset.parent;
        if (parentId) {
            let element = DomUtility.getElement(parentId);
            if (element) {
                if (element.classList.contains(this.containerSummaryClass))
                    element.classList.remove(this.containerSummaryClass);
                else
                    element.classList.add(this.containerSummaryClass);
            }
        }
    }
    performOperation(element: HTMLElement): void {
        this.toggleBottom(element);
        this.toggleMoveTop(element);
    }
}
let summary = new nCovidSummaryComponentAction();

$(document).on('click', 'div.pointer', (element) => {
    summary.performOperation(element.currentTarget);
});
