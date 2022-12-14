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
  cycle: any;
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
    // config.backdrop = 'static';
    config.keyboard = false;
    config.scrollable= true ;
  }

  ngOnInit(): void {
    this.service.getAll().subscribe((chris: any) => {
      this.displays = chris.data;
      // console.log(this.displays)

      // this.service.getParam().subscribe((chris1:any)=>{
      //   console.log(chris1)
      // })

      // console.log(this.displays);
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
      size: 'xl'
    });
    this.modalRef.componentInstance.text = show.text1;
    this.modalRef.componentInstance.img = show.image1;
    this.modalRef.componentInstance.pdfLink = show.pdf;
    this.modalRef.componentInstance.interdit = show.interdits;
    this.modalRef.componentInstance.img2 = show.image2;
    this.modalRef.componentInstance.text2 = show.text2;
    this.modalRef.componentInstance.image_cycle = show.cycle.image;
  }
}
