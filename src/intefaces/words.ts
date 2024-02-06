export interface Words {
  word: string;
  phonetic: string;
  phonetics: phonetics[];
  meanings: meanings[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}

interface phonetics {
  text: string;
  audio: string;
  sourceUrl: string;
  license: {
    name: string;
    url: string;
  };
}

interface meanings {
  partOfSpeech: string;
  definitions: [
    {
      definition: string;
      synonyms: string[];
      antonyms: string[];
      example: string;
    }
  ];
  synonyms: string[];
  antonyms: string[];
}
