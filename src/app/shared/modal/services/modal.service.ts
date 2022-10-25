import { ComponentType, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { DialogRef } from '../entities/dialog-ref.entity';
import { ModalStyles } from '../entities/modal-styles.entity';
import { DIALOG_DATA } from '../tokens/dialog-data.token';

@Injectable({
  providedIn: 'root',
})
export class ModalService<R, T, C> {
  constructor(
    private readonly _overlay: Overlay,
    private readonly _injector: Injector
  ) {}

  open(component: ComponentType<C>, dialogData: T): DialogRef<R> {
    const overlayRef = this._createOverlay();
    const dialogRef = this._createDialogRef(overlayRef);
    const injector = this._createInjector(dialogRef, dialogData);
    const componentPortal = new ComponentPortal(component, null, injector);
    overlayRef.attach(componentPortal);
    return dialogRef;
  }

  private _getPositionStrategy() {
    return this._overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
  }
  private _createOverlay() {
    const positionStrategy = this._getPositionStrategy();
    return this._overlay.create({
      positionStrategy,
      panelClass: [ModalStyles.modalClass, ModalStyles.openClass],
    });
  }
  private _createDialogRef(overlayRef: OverlayRef) {
    return new DialogRef<R>(overlayRef);
  }
  private _createInjector(dialogRef: DialogRef<R>, dialogData: T) {
    return Injector.create({
      parent: this._injector,
      providers: [
        { provide: DialogRef, useValue: dialogRef },
        { provide: DIALOG_DATA, useValue: dialogData },
      ],
    });
  }
}
