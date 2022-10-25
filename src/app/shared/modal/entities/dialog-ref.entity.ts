import { OverlayRef } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { ModalStyles } from './modal-styles.entity';

@Injectable()
export class DialogRef<T = void> {
  private readonly _onClose$ = new Subject<T>();
  constructor(readonly overlayRef: OverlayRef) {}

  get onClose$() {
    return this._onClose$.asObservable();
  }

  close(result: T) {
    this.overlayRef.removePanelClass(ModalStyles.openClass);
    this.overlayRef.addPanelClass(ModalStyles.closeClass);
    timer(ModalStyles.closeDuration).subscribe(() => {
      this.overlayRef.dispose();
      this._onClose$.next(result);
      this._onClose$.complete();
    });
  }
}
