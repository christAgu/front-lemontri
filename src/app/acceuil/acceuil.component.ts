import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from '../service/service.service';
import { Article } from './model/article';
import { ActivatedRoute } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import {
  ModalDismissReasons,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import {
  NgbActiveModal,
  NgbModal,
  NgbModalConfig,
} from '@ng-bootstrap/ng-bootstrap';

import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
})
export class AcceuilComponent implements OnInit {
  displays: any;
  modalRef: any;
  closeResult = '';
  id: any;

  ids: any;
  idsparam!: string;

  visible: boolean = false;

  constructor(
    config: NgbModalConfig,
    private service: ServiceService,
    private modalService: NgbModal,
    private route: ActivatedRoute
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.service.getAll().subscribe((chris: any) => {
      this.displays = chris.data;
      console.log(this.displays);
    });

    // this.service.getAll('6,5,7,8').subscribe((chris: any) => {
    //   // this.loading = true;
    //   // this.incidents = data.result;
    //   // this.loading = false;
    //   this.displays = chris.data;
    //   console.log('Result - ', chris);
    //   console.log('data is received');
    // });

    // this.route.snapshot.params
    // console.log(this.route.snapshot.params['ids'])
  }

  submit() {
    //not equal to condition
    this.visible = !this.visible;
  }

  open(show: any) {
    this.modalRef = this.modalService.open(ModalComponent, {
      centered: true,
    });
    this.modalRef.componentInstance.text = show.text1;
    this.modalRef.componentInstance.img = show.image1;
    this.modalRef.componentInstance.pdfLink = show.pdf;
    this.modalRef.componentInstance.interdit = show.interdits;
  }
}
