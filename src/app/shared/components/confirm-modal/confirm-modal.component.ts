import { Component, Inject } from '@angular/core';
import { DialogRef } from '../../modal/entities/dialog-ref.entity';
import { DIALOG_DATA } from '../../modal/tokens/dialog-data.token';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css'],
})
export class ConfirmModalComponent {
  constructor(
    @Inject(DIALOG_DATA) readonly name: string,
    private readonly _dialogRef: DialogRef
  ) {}

  close() {
    this._dialogRef.close();
  }
}
