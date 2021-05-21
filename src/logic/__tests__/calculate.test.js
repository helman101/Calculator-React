import calculate from '../calculate';

describe('calculate', () => {
  describe('Total is\'nt null and next is\'nt null', () => {
    describe('ButtonName is equal to +/-', () => {
      const result = calculate({ total: '2', next: '5', operation: null }, '+/-');
      it('Return a new object with total convert to negative', () => {
        expect(result.total).toBe('-2');
      });
      it('Return a new object with next convert to negative', () => {
        expect(result.next).toBe('-5');
      });
    });
    describe('ButtonName is equal to AC', () => {
      it('Return a new object with total equal to zero', () => {
        const result = calculate({ total: '2', next: '5', operation: null }, 'AC');
        expect(result.total).toBe('0');
      });
      it('Return a new object with next equal to an empty string', () => {
        const result = calculate({ total: '2', next: '5', operation: null }, 'AC');
        expect(result.next).toBe('');
      });
    });
    describe('ButtonName is equal to .', () => {
      it('Add a dot to total if next is an empty string', () => {
        const result = calculate({ total: '2', next: '', operation: null }, '.');
        expect(result.total).toBe('2.');
      });
      it('Add a dot to next if this is not an empty string', () => {
        const result = calculate({ total: '2', next: '5', operation: null }, '.');
        expect(result.next).toBe('5.');
      });
    });
    describe('ButtonName is equal to a math operation', () => {
      describe('Operation is null', () => {
        it('Return a new object with ButtonName assigned to operation', () => {
          const result = calculate({ total: '2', next: '', operation: null }, '+');
          expect(result.operation).toBe('+');
        });
      });
      describe('Operation is\'nt null', () => {
        describe('Operation is equal to +', () => {
          it('return an object with total being the result of add total and next', () => {
            const result = calculate({ total: '2', next: '5', operation: '+' }, '+');
            expect(result.total).toBe('7');
          });
        });
        describe('Operation is equal to -', () => {
          it('return an object with total being the result of subtract total and next', () => {
            const result = calculate({ total: '10', next: '8', operation: '-' }, '-');
            expect(result.total).toBe('2');
          });
        });
        describe('Operation is equal to X', () => {
          it('return an object with total being the result of multiply total and next', () => {
            const result = calculate({ total: '10', next: '8', operation: 'X' }, 'X');
            expect(result.total).toBe('80');
          });
        });
        describe('Operation is equal to ÷', () => {
          it('return an object with total being the result of subtract total and next', () => {
            const result = calculate({ total: '10', next: '5', operation: '÷' }, '÷');
            expect(result.total).toBe('2');
          });
        });
        describe('Operation is equal to %', () => {
          it('return an object with total being the result of subtract total and next', () => {
            const result = calculate({ total: '20', next: '300', operation: '%' }, '%');
            expect(result.total).toBe('60');
          });
        });
        it('return an object with next equal to an empty string', () => {
          const result = calculate({ total: '2', next: '5', operation: '+' }, '+');
          expect(result.next).toBe('');
        });
        it('return an object with operation equal to the new buttonName', () => {
          const result = calculate({ total: '2', next: '5', operation: '+' }, '%');
          expect(result.operation).toBe('%');
        });
      });
    });
    describe('ButtonName is equal to =', () => {
      describe('Operation is\'nt null', () => {
        it('Return an object with total being the result of the respective operation', () => {
          const result = calculate({ total: '2', next: '5', operation: '+' }, '=');
          expect(result.total).toBe('7');
        });
      });
      describe('Operation is null', () => {
        it('Return an object with the same total', () => {
          const result = calculate({ total: '2', next: '', operation: null }, '=');
          expect(result.total).toBe('2');
        });
      });
    });
  });
});
