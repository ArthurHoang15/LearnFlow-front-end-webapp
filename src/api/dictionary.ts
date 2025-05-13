interface ApiResponse {
  [key: string]: any;
  word: string;
  phonetics?: { text: string }[];
  meanings?: { definitions: { definition: string }[] }[];
}

interface WordDetails {
  word: string;
  pronunciation: string;
  definition: string;
}

export const fetchWordDetails = async (word: string): Promise<WordDetails> => {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data: ApiResponse[] = await response.json();
    if (data[0]) {
      const pronunciation = data[0].phonetics?.[0]?.text || 'N/A';
      const definition = data[0].meanings?.[0]?.definitions?.[0]?.definition || 'No definition available';
      return { word, pronunciation, definition };
    }
    return { word, pronunciation: 'N/A', definition: 'No definition available' };
  } catch (error) {
    console.error(`Error fetching ${word}:`, error);
    return { word, pronunciation: 'N/A', definition: 'No definition available' };
  }
};