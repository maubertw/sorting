describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      // your code here
      var numbers = [3, 5, 67, 4, 32, 8, 9];
      var result = window.split(numbers).length;
      expect(result).toBe(2);
    });
  });