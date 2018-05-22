import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Prosperity} from "./prosperity.model";
import * as fromProsperity from "./prosperity.reducer"
import * as UI from '../shared/ui.actions';
import * as ProsperityActions from './prosperity.action';
import {SetProsperity} from "./prosperity.action";
import {UIService} from "../shared/ui.service";
import {AngularFirestore} from "angularfire2/firestore";


@Injectable()
export class ProsperityService {

    constructor( private db: AngularFirestore,
                 private uiService: UIService,
                 private store: Store<fromProsperity.State>) {
    }


    // getProsperity() {
    //     this.store.dispatch(new UI.StartLoading());
    //     this.db
    //         .collection('prosperity')
    //         .snapshotChanges()
    //         .map(docArray => {
    //             return docArray.map(doc => {
    //                 return {
    //                     id: doc.payload.doc.id,
    //                     mentalHealth: doc.payload.doc.data().mentalHealth,
    //                     physicalHealth: doc.payload.doc.data().physicalHealth,
    //                     meaning: doc.payload.doc.data().meaning,
    //                     mentalHealth: doc.payload.doc.data().mentalHealth,
    //                     physicalHealth: doc.payload.doc.data().physicalHealth,
    //                     meaning: doc.payload.doc.data().meaning
    //                 };
    //             });
    //         })
    //         .subscribe(
    //             (prosperity: Prosperity) => {
    //                 this.store.dispatch(new UI.StopLoading());
    //                 this.store.dispatch(new ProsperityActions.SetProsperity(prosperity));
    //             },
    //             error => {
    //                 this.store.dispatch(new UI.StopLoading());
    //                 this.uiService.showSnackbar(
    //                     'Fetching Exercises failed, please try again later',
    //                     null,
    //                     3000
    //                 );
    //             }
    //         );
    // }

    addProsperity(prosperity: Prosperity) {
        this.db.collection('prosperity').add(prosperity);
    }
}
