export class DomUtility {
    static getElement(identifier: string): HTMLElement | null {
        return document.querySelector<HTMLElement>(identifier);
    }
}
