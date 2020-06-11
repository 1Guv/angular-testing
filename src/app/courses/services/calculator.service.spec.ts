import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from "@angular/core/testing";

describe('calculatorService', () => {

    let calculator: CalculatorService;
    let loggerSpy: any;

    beforeEach(() => {
        console.log('beforeEach test...');
        loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);

        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                {provide: LoggerService, useValue: loggerSpy}
            ]
        })

        calculator = TestBed.get(CalculatorService);
    })

    it('should add two numbers', () => {
        console.log('add');
        const result = calculator.add(2,2);
        expect(result).toBe(4, 'unexpected addition result');
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);

    });

    it('should minus two numbers', () => {
        console.log('subtract');
        const result = calculator.subtract(3,2);
        expect(result).toBe(1, 'unexpected subtraction result');
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

});