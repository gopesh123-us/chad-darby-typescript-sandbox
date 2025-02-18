export class Dealer {
  private _name: string = "";
  private _state: string = "";

  constructor() {}

  get dealerName() {
    return this._name;
  }
  set dealerName(value: string) {
    //no return type
    this._name = value;
  }
  get dealerState() {
    return this._state;
  }
  set dealerState(value: string) {
    this._state = value;
  }
}
