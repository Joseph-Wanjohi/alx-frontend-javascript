// 1. Define two branded interfaces to distinguish credit types
export interface MajorCredits {
  credits: number;
  brand: 'MajorCredits';
}

export interface MinorCredits {
  credits: number;
  brand: 'MinorCredits';
}

// 2. Function to sum two MajorCredits values
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits'
  };
}

// 3. Function to sum two MinorCredits values
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits'
  };
}