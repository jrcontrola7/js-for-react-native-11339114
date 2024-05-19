
function processArray(numbers) {
    const result = numbers.map((num) => {
      if (num % 2 === 0) {
        // Even number: square it
        return num * num;
      } else {
        // Odd number: triple it
        return num * 3;
      }
    });
  
    return result;
  }
  
  // Example usage:
  const inputNumbers = [2, 4, 6, 7, 8];
  const processedNumbers = processArray(inputNumbers);
  console.log(processedNumbers); 
  
  
  
  function formatArrayStrings(strings, processedNumbers) {
    const result = strings.map((str, index) => {
      const num = processedNumbers[index];
      if (num % 2 === 0) {
        // Even number: capitalize the string
        return str.toUpperCase();
      } else {
        // Odd number: convert the string to lowercase
        return str.toLowerCase();
      }
    });
  
    return result;
  }
  
  // Example usage:
  const inputStrings = ["Daniel", "cook", "code", "create", "Eat"];
  const formattedStrings = formatArrayStrings(inputStrings, processedNumbers);
  console.log(formattedStrings); 
  