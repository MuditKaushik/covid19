import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'binarySearch' })
export class BinarySearchPipe implements PipeTransform {
    private _searchInItemObject: boolean = false;
    constructor() { }
    transform(value: Array<any>, property: string | null, find: any) {
        if (this.validateSearch(value, property, find)) {
            let result = this.binarySearch<any>(value, property, find, this._searchInItemObject);
            if (this._searchInItemObject && property && property.trim().length > 0) {
                let propertyDescriptor = Object.getOwnPropertyDescriptor(result, property);
                return (propertyDescriptor) ? propertyDescriptor.value : '';
            } else {
                return result;
            }
        }
    }
    protected validateSearch(array: Array<any> | undefined, property: string | null, value: any): boolean {
        if (array == null || array.length === 0) {
            return false;
        }
        let testFirstObjectItem = array[0];
        return this.isValidSearch(testFirstObjectItem, property, value);
    }
    protected isValidSearch(item: any, property: string | null, value: any): boolean {
        let type = typeof item;
        if (type === 'object' && property) {
            this._searchInItemObject = true;
            let itemHasProperty = Object.getOwnPropertyDescriptor(item, property);
            return (itemHasProperty) ? this.hasSameType(itemHasProperty.value, value) : false;
        } else {
            return this.hasSameType(item, value);
        }
    }
    protected hasSameType(propValue: any, searchValue: any): boolean {
        return (typeof propValue === typeof searchValue);
    }

    protected fetchValueFromObject(object: any, property: string): any | null {
        let prop = Object.getOwnPropertyDescriptor(object, property);
        if (prop && prop.value) {
            return prop.value;
        } else {
            return null;
        }
    }

    public binarySearch<T>(array: Array<any>, property: string | null, find: any, searchInObject: boolean = false): T | null {
        let startPoint = 0;
        let endPoint = array.length;
        while (startPoint <= endPoint) {
            let midPoint = Math.floor((startPoint + endPoint) / 2);
            let middleValue: any = (searchInObject && property && property.trim().length > 0) ?
                this.fetchValueFromObject(array[midPoint], property) : array[midPoint];
            if (middleValue === null) {
                return null;
            }
            if (middleValue > find) {
                endPoint = midPoint - 1;
            } else if (middleValue < find) {
                startPoint = midPoint + 1;
            } else {
                return array[midPoint];
            }
        }
        return null;
    }
}
