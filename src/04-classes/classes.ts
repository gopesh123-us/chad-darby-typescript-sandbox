export class Person {
  constructor(private firstName: string, private lastName: string) {}
  getName(): string {
    return "Dr. " + this.firstName + " " + this.lastName;
  }
}
