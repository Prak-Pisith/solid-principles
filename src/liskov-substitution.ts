// TODO: Liskov Substitution Principle (LSP)

class Bird {
  fly(): void {
    console.log('Bird is flying');
  }
}

class Ostrich extends Bird {
  fly(): void {
    console.log('Ostrich is flying');
  }
}

// TODO: Subclasses (like Ostrich) can be used interchangeably with their base class (Bird).