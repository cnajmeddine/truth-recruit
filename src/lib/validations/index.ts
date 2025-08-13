export const validateLinkedInUrl = (url: string): { isValid: boolean; error?: string } => {
  if (!url.trim()) {
    return { isValid: false, error: 'URL is required' };
  }

  try {
    const urlObj = new URL(url);
    
    if (urlObj.hostname !== 'www.linkedin.com' && urlObj.hostname !== 'linkedin.com') {
      return { isValid: false, error: 'Please enter a valid LinkedIn URL' };
    }

    if (!urlObj.pathname.includes('/company/')) {
      return { isValid: false, error: 'Please enter a LinkedIn company page URL' };
    }

    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Please enter a valid URL' };
  }
};


export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};