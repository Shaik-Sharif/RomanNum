function romanToInt(s) {
    const romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    
    let result = 0;
    let prevValue = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        const currentChar = s.charAt(i);
        const currentValue = romanMap.get(currentChar);
        
        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
        
        prevValue = currentValue;
    }
    
    return result;
}

console.log(romanToInt("III"));      // Output: 3
console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));  // Output: 1994
