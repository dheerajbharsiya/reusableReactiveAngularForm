export class DropdownValue {
    label: string;
    data: [{value:string, lable: string}];
    constructor(label: string, data:[{value:string, lable: string}] ) {
        this.data = data;
        this.label = label;
    }
}