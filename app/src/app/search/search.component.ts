
import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from "../service/search.service";

@Component({
                selector:    'app-search',
                templateUrl: './search.component.html',
                standalone:  false,
})
export class SearchComponent {
    searchTerm: string = '';

    @Output() search = new EventEmitter<string>();
    @Output() searchResults = new EventEmitter<any>();

    onSearchTermChange(value: string) {
        this.search.emit(value);
    }
}