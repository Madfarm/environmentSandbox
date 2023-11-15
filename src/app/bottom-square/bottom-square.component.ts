import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bottom-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottom-square.component.html',
  styleUrl: './bottom-square.component.css'
})
export class BottomSquareComponent {
  content: string = 'wootdoot';
}
