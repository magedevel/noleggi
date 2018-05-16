// DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../security/authentication.service';

// CONFIG
import { config } from "../../config/properties";

// MODEL
import { VeicoloBaseService } from "./base/veicolo.base.service";
import { Veicolo } from '../domain/noleggi_db/veicolo';

/**
 * YOU CAN OVERRIDE HERE VeicoloBaseService
 */

@Injectable()
export class VeicoloService extends VeicoloBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}