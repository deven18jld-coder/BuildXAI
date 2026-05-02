export function validateName(name: string): boolean {
  if (!name || name.trim().length < 3) return false;
  // Only alphabets and spaces allowed
  const nameRegex = /^[A-Za-z\s]+$/;
  return nameRegex.test(name.trim());
}

export function validatePhone(phone: string): boolean {
  // Exactly 10 digits and starts with 6, 7, 8, or 9
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

export function validateEmail(email: string): boolean {
  if (!email || email.trim().length === 0) return true;
  
  const lowerEmail = email.toLowerCase();
  // Reject obvious invalid domains or test emails
  if (lowerEmail.includes("gmial.com") || lowerEmail.includes("test@test")) {
    return false;
  }
  
  // Stricter email regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim());
}

export function validateMessage(message: string): boolean {
  if (!message || message.trim().length === 0) return true;
  
  const trimmed = message.trim();
  // Minimum 10 characters
  if (trimmed.length < 10) return false;
  
  // Reject meaningless inputs like 5+ repeated characters (e.g., "aaaaa")
  if (/(.)\1{4,}/.test(trimmed)) return false;
  
  return true;
}

export function validateRequired(value: string | undefined | null): boolean {
  if (value === undefined || value === null) return false;
  return value.trim().length > 0;
}
