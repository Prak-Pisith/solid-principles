// TODO: Interface Segregation Principle (ISP)

interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

class LegacyPrinter implements Printer {

  print(): void {
    console.log('Printing data')
  }
}

class MultipleFunctionsPrinter implements Printer, Scanner {

  print(): void {
    console.log(`Printing data`);
  }

  scan(): void {
    console.log('Scanning data');
  }
}

// TODO: Different classes implement only the methods they need.