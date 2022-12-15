import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(public modal: NgbActiveModal) {}

  @Input() text: any;
  @Input() pdfLink: any;
  @Input() img: any;

  @Input() text1: any;
  @Input() detail: any;
  @Input() interdit: any;
  @Input() text2: any;
  @Input() img2: any;
  @Input() titrecycle: any;
  @Input() image_cycle: any;
  @Input() cycle: any;

  ngOnInit(): void {}
}
