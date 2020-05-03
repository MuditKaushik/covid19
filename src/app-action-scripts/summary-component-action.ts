import $ from 'jquery';
import { DomUtility } from './dom-util-action';

export class nCovidSummaryComponentAction {
	protected readonly borderBottomClass = 'remove-bottom-border';
	protected readonly containerSummaryClass = 'summary';

	protected toggleBottomBorder(element: HTMLElement): void {
		element.classList.toggle('this.borderBottomClass');
	}

	protected toggleMoveTop(element: HTMLElement): void {
		let parentId = element.dataset.parent;
		if (parentId) {
			let element = DomUtility.getElement(parentId);
			if (element) {
				if (element.classList.contains(this.containerSummaryClass)) {
					element.classList.remove(this.containerSummaryClass);
				}
				else {
					element.classList.add(this.containerSummaryClass);
				}
			}
		}
	}

	protected rotateIcon(element: HTMLElement): void {
		let rotateId = element.dataset.rotate;
		if (rotateId) {
			let element = DomUtility.getElement(rotateId);
			if (element) {
				this.showContentHeight(element);
			}
		}
	}

	protected showContentHeight(element: HTMLElement) {
		let contentDomId = element.dataset.content;
		if (contentDomId) {
			let element = DomUtility.getElement(contentDomId);
			if (element) {
				element.classList.toggle('full-view');
			}
		}
	}

	performOperation(element: HTMLElement): void {
		this.toggleBottomBorder(element);
		this.toggleMoveTop(element);
		this.rotateIcon(element);
	}
}
let summary = new nCovidSummaryComponentAction();

$(document).on('click', 'div.pointer', (element) => {
	summary.performOperation(element.currentTarget);
});
