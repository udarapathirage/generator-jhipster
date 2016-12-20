import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { StateService } from 'ui-router-ng2';

import { <%= entityClass %> } from './<%= entityFileName %>.model';
import { <%= entityClass %>Service } from './<%= entityFileName %>.service';
import { EventManager, AlertService, ITEMS_PER_PAGE, ParseLinks, Principal, PaginationUtil } from '../../shared';

@Component({
    selector: '<%= entityFileName %>-mgmt',
    templateUrl: './<%= entityFileName %>.component.html'
})
export class <%= entityAngularJSName %>Component implements OnInit {
<%- include('pagination-template'); -%>
