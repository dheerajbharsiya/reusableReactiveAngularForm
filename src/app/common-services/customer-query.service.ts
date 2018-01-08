import { Injectable } from '@angular/core';
import { CustomerQuery } from '../models/customer-query.model';


@Injectable()
export class CustomerQueryService {

    private queries: CustomerQuery[] = [
        new CustomerQuery('dheeraj', '112', 'sokatch', 'dewas', 'mp', 'india', {year: 2018, day: 8, month: 1})
    ];

    constructor() { }

    getCustomerQueryDetails() :  CustomerQuery[] { 
        return this.queries.slice();
    }

    setCustomerQueryData (query: CustomerQuery): void {
        this.queries.push(query);
    }

}