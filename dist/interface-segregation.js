// TODO: Interface Segregation Principle (ISP)
class LegacyPrinter {
    print() {
        console.log('Printing data');
    }
}
class MultipleFunctionsPrinter {
    print() {
        console.log(`Printing data`);
    }
    scan() {
        console.log('Scanning data');
    }
}
// TODO: Different classes implement only the methods they need.
