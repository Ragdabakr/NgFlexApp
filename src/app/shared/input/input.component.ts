import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent  {
    @Input() label ="";
    @Input() control: FormControl | any ;
    @Input() inputType="";
    @Input() placeholder="";
    @Input() disabled=false;
    errors:any;




    showErrors() {
        const { dirty, touched, errors } = this.control;
        return dirty && touched && errors;
    }

}
