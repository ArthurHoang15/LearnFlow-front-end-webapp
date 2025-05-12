import React, { useState, useMemo } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { FilterBar } from '../../components/FilterBar';
import { MistakeList } from '../../components/MistakeList';
import { Pagination } from '../../components/Pagination';
import { FeatureHeader } from '../../components/FeatureHeader';
import './MistakeTrackerPage.css';

interface Mistake {
  id: number;
  question: string;
  chapter: string;
  lesson: string;
  yourAnswer: string;
  correctAnswer: string;
  dateTaken: string;
  status: string;
}

export const MistakeTrackerPage: React.FC = () => {
  const initialMistakes = useMemo<Mistake[]>(() => [
    { 
      id: 1, 
      question: 'What is the past tense of "go"?', 
      chapter: 'Basic Grammar', 
      lesson: 'Past Tense', 
      yourAnswer: 'goed', 
      correctAnswer: 'went', 
      dateTaken: '2023-05-10', 
      status: 'Not Reviewed' 
    },
    { 
      id: 2, 
      question: 'How do you spell "accommodate"?', 
      chapter: 'Spelling', 
      lesson: 'Double Letters', 
      yourAnswer: 'acommodate', 
      correctAnswer: 'accommodate', 
      dateTaken: '2023-05-12', 
      status: 'Reviewed' 
    },
    { 
      id: 3, 
      question: 'Choose the correct preposition: "I am interested ___ history"', 
      chapter: 'Prepositions', 
      lesson: 'Interest Prepositions', 
      yourAnswer: 'about', 
      correctAnswer: 'in', 
      dateTaken: '2023-05-15', 
      status: 'Not Reviewed' 
    },
    { 
      id: 4, 
      question: 'Select the correct article: "___ apple a day keeps the doctor away"', 
      chapter: 'Articles', 
      lesson: 'A vs An', 
      yourAnswer: 'A', 
      correctAnswer: 'An', 
      dateTaken: '2023-05-18', 
      status: 'Reviewed' 
    },
    { 
      id: 5, 
      question: 'Where should the comma go in "However she didn\'t agree"?', 
      chapter: 'Punctuation', 
      lesson: 'Commas', 
      yourAnswer: 'However she didn\'t, agree', 
      correctAnswer: 'However, she didn\'t agree', 
      dateTaken: '2023-05-20', 
      status: 'Not Reviewed' 
    },
  ], []);
  
  const [filters, setFilters] = useState({
    chapter: 'All',
    lesson: 'All',
    status: 'All'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  
  const filteredMistakes = useMemo(() => {
    let results = [...initialMistakes];
    
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      results = results.filter(mistake => 
        mistake.question.toLowerCase().includes(lowerCaseQuery) ||
        mistake.chapter.toLowerCase().includes(lowerCaseQuery) ||
        mistake.lesson.toLowerCase().includes(lowerCaseQuery) ||
        mistake.yourAnswer.toLowerCase().includes(lowerCaseQuery) ||
        mistake.correctAnswer.toLowerCase().includes(lowerCaseQuery)
      );
    }
    
    if (filters.chapter !== 'All') {
      results = results.filter(mistake => 
        mistake.chapter === filters.chapter
      );
    }
    
    if (filters.lesson !== 'All') {
      results = results.filter(mistake => 
        mistake.lesson === filters.lesson
      );
    }
    
    if (filters.status !== 'All') {
      results = results.filter(mistake => 
        mistake.status === filters.status
      );
    }
    
    return results;
  }, [initialMistakes, searchQuery, filters]);
  
  const totalPages = Math.ceil(filteredMistakes.length / itemsPerPage);
  
  const currentMistakes = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredMistakes.slice(startIndex, endIndex);
  }, [filteredMistakes, currentPage, itemsPerPage]);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };
  
  const handleFilterBarChange = (newFilters: { chapter: string; lesson: string; status: string }) => {
    setFilters(prev => {
      if (
        prev.chapter !== newFilters.chapter ||
        prev.lesson !== newFilters.lesson ||
        prev.status !== newFilters.status
      ) {
        setCurrentPage(1);
        return newFilters;
      }
      return prev;
    });
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  return (
    <div>
      <FeatureHeader headerName="Mistake Tracker" />  
      <div className="mistake-list-container">  
        <div className="mistake-header">           
            <h2 className="mistake-header-title">List of Mistakes</h2>                                                                                                                                             
            <SearchBar onSearch={handleSearch} />
            <FilterBar onFilterBarChange={handleFilterBarChange} />
        </div>  
        <MistakeList mistakes={currentMistakes} />
        <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
        />
      </div>  
    </div>
  );
};