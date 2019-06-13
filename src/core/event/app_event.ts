export class AppEvent implements IAppEvent{
  data: any;
  handler: (e: any, data: any) => void;
  topic: string;

  constructor(data: string, handler: (e: any, data: any) => void, topic: string){
    this.data = data;
    this.handler = handler;
    this.topic = topic;
  }
}
