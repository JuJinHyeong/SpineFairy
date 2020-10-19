export default class CommandHandler {
  name: string;

  description: string;

  execute: Function;

  constructor(name: string, description: string, execute: Function) {
    this.name = name;
    this.description = description;
    this.execute = execute;
  }
}
