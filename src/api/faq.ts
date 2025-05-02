import faqsData from '../mocks/data/faqs.json'; // Adjust the path as needed

export interface Faq {
  question: string;
  answer: string;
}

export const fetchAndSelectRandomFaqs = async (count: number = 3): Promise<Faq[]> => {
  try {
    const data: Faq[] = faqsData;

    // Randomly select the specified number of FAQs
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  } catch (error) {
    console.error('Error processing FAQs:', error);
    return []; // Return an empty array on error
  }
};