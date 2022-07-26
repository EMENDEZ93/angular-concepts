import { Component, OnInit } from '@angular/core';
import { GetserviceService } from '../getservice.service';
import { GetservicebyidService } from '../getservicebyid.service';
import { PostserviceService } from '../postservice.service';
import { PutserviceService } from '../putservice.service';
import { ProductHeroku, ProductHerokuDto, UpdateProductHeroku } from './productheroku.models';

@Component({
  selector: 'app-getservice',
  templateUrl: './getservice.component.html',
  styleUrls: ['./getservice.component.css']
})
export class GetserviceComponent implements OnInit {

  products: ProductHeroku[] = [];

  constructor(
    private getService: GetserviceService,
    private getProductById: GetservicebyidService,
    private postService: PostserviceService,
    private putService: PutserviceService
    ) { }

  ngOnInit(): void {
    
    this.getService.getAllProducts().subscribe(
      data => {
        this.products = data;
      }
    )

    this.getProductById.getProductById('1').subscribe(
      product => {
        console.log('************ getProductById **************');
        console.log(product);
      }
    )
    

    const producto : ProductHerokuDto = {
      'title': 'string',
      'price': 20,
      'description': 'string',
      'categoryId': 4,
      'images': [
        'string'
      ]
    }
    this.postService.createProduct(producto).subscribe(
      data => {
        console.log('************ createProduct **************');
        console.log(data);
      }
    );


    

    const productoUpdate : UpdateProductHeroku = {
      'title': 'string'
    }
    this.putService.updateProduct('32', productoUpdate).subscribe(
      data => {
        console.log('************ updateProduct **************');
        console.log(data);
      }
    );





  }

}
