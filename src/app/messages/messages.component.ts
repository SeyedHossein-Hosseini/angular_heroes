import { Component } from '@angular/core';

import { MessageService } from '../services/MessageService/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  // bvThe messageService property must be public because you're going to bind to it in the template
  // ! Angular only binds to public component properties.
  constructor(public messageService: MessageService) {}
}
