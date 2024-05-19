

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
  const inputStrings = ["Matilda", "Come", "code", "Dancing", "Eat"];
  const formattedStrings = formatArrayStrings(inputStrings, processedNumbers);
  console.log(formattedStrings); 
  
  
  
  function createUserProfiles(names, modifiedNames) {
    const userProfiles = [];
  
    for (let i = 0; i < names.length; i++) {
      const originalName = names[i];
      const modifiedName = modifiedNames[i];
      const id = i + 1; // Auto-incremented ID starting from 1
  
      userProfiles.push({ originalName, modifiedName, id });
    }
  
    return userProfiles;
  }
  
  // Example usage:
  const inputNames = ["Daniel", "cook", "code", "create", "Eat"];
  const processedNames = formattedStrings; // Assuming you have the processed names already
  const profiles = createUserProfiles(inputNames, processedNames);
  
  console.log(profiles);
  
  