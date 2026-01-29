import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-single',
  imports: [CommonModule],
  templateUrl: './single.html',
  styleUrls: ['./single.css'],
})
export class Single implements OnInit {
  singleProduct:any;
  constructor(
    private route:ActivatedRoute, 
    private apiservice:Apiservice,
    private cdr:ChangeDetectorRef,
    private router:Router
  ){}
  
  ngOnInit() {
    const productid = this.route.snapshot.paramMap.get('titleid');
    if(productid) {
      this.apiservice.getSingleProduct(productid).subscribe((data:any)=>{
        this.singleProduct=data;
        this.cdr.detectChanges()
        console.log(data)
      });
    }
  }

  goToProducts() {
    this.router.navigate(['/product']);
  }
} 
  