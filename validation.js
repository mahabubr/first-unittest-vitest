export function validateEmail(email) {
  const emailRegex = /\S+@\S+\.S+/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid Email Address");
  }
}

export function validateArrayNonEmpty(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array can not be empty");
  }
}
