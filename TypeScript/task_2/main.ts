// String literal type
type Subjects = "Math" | "History";

// Function
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}

// Tests
console.log(teachClass("Math"));
console.log(teachClass("History"));
