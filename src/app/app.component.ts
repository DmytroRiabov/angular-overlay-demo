import { Component, VERSION } from '@angular/core';
import { ConfirmModalComponent } from './shared/components/confirm-modal/confirm-modal.component';
import { ModalService } from './shared/modal/services/modal.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private readonly _modalService: ModalService<
      void,
      string,
      ConfirmModalComponent
    >
  ) {}

  openModal() {
    this._modalService.open(ConfirmModalComponent, 'Angular');
  }
}
