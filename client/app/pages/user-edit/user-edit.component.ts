// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { UserService } from '../../services/user.service';

// START - USED SERVICES
/*
 *	UserService.delete
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * UserService  
 */
// END - REQUIRED RESOURCES

/**
 * UserEdit Component
 */
@Component({
    selector: 'user-edit',
    templateUrl : './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent {
    
    constructor(
        private userService: UserService,
        private location: Location) { 
        
    }
}