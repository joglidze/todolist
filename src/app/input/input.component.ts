import { Component} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent  {
  input: string = '';

  lists: string[] = [];
  active:boolean=true ;
  taskError:boolean=true;
  getInput(event: any) {
    
      this.input = event.target.value;
    
    
  
  }

  sendInput() {
    if(this.input!=='' && this.lists.length<3){
      this.lists.push(this.input);
      this.active=true;
      console.log(this.lists.length);
        if(this.lists.length>=3){
        this.taskError=false; 
        
      }else{
        this.taskError=true; 
      }
      
    }else if(this.input===''){
      this.active=false;
     
       
    }
    
    
    
  }
  constructor() {}

  
}
