import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {Prosperity} from "../prosperity.model";
import {ProsperityService} from "../prosperity.service";

@Component({
    selector: 'app-prosperity-rating',
    templateUrl: './prosperity-rating.component.html',
    styleUrls: ['./prosperity-rating.component.scss']
})
export class ProsperityRatingComponent implements OnInit {
    prosperityForm: FormGroup;
    isLoading$: Observable<boolean>;

    valueOption = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    constructor(private prosperityService: ProsperityService) {
    }

    ngOnInit() {

        this.prosperityForm = new FormGroup({
            mentalHealth: new FormControl('', {
                validators: [Validators.required]
            }),
            physicalHealth: new FormControl('', {
                validators: [Validators.required]
            }),

            meaning: new FormControl('', {
                validators: [Validators.required]
            }),

            love: new FormControl('', {
                validators: [Validators.required]
            }),

            relationships: new FormControl('', {
                validators: [Validators.required]
            }),
            income: new FormControl('', {
                validators: [Validators.required]
            }),
            job: new FormControl('', {
                validators: [Validators.required]
            })
        });

    }

    setColorPosperity(count) {
        if (count > 7) {
            return 'green'
        } else if (count > 4) {
            return 'yellow'
        } else {
            return 'red'
        }

    }


    onSubmit() {

        const prosperity = new Prosperity({
            ...this.prosperityForm.value
        });

        this.prosperityService.addProsperity(prosperity)

        console.log(prosperity)
    }


}
