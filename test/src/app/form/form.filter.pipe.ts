import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
name:'filter'  
})
export class FilterPipe implements PipeTransform{
transform(slides:any,searchterm: string){
if(!slides || !searchterm ){

return slides;
}
return slides.filter(slides =>slides.product.toLowerCase().indexOf(searchterm.toLowerCase()) !==-1);
}
}