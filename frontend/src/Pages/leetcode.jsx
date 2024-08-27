import React from 'react';
import '../CSS/leetcode.css';

const questions = [
  {
    id: 1,
    title: 'Two Sum',
    url: 'https://leetcode.com/problems/two-sum/',
  },
  {
    id: 2,
    title: 'Add Two Numbers',
    url: 'https://leetcode.com/problems/add-two-numbers/',
  },
  {
    id: 3,
    title: 'Longest Substring Without Repeating Characters',
    url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
  },
  {
    id: 4,
    title: 'Median of Two Sorted Arrays',
    url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
  },
  {
    id: 5,
    title: 'Longest Palindromic Substring',
    url: 'https://leetcode.com/problems/longest-palindromic-substring/',
  },
  {
    id: 6,
    title: 'Zigzag Conversion',
    url: 'https://leetcode.com/problems/zigzag-conversion/',
  },
  {
    id: 7,
    title: 'Reverse Integer',
    url: 'https://leetcode.com/problems/reverse-integer/',
  },
  {
    id: 8,
    title: 'String to Integer (atoi)',
    url: 'https://leetcode.com/problems/string-to-integer-atoi/',
  },
  {
    id: 9,
    title: 'Palindrome Number',
    url: 'https://leetcode.com/problems/palindrome-number/',
  },
  {
    id: 10,
    title: 'Regular Expression Matching',
    url: 'https://leetcode.com/problems/regular-expression-matching/',
  },
  {
    id: 11,
    title: 'Container With Most Water',
    url: 'https://leetcode.com/problems/container-with-most-water/',
  },
  {
    id: 12,
    title: 'Integer to Roman',
    url: 'https://leetcode.com/problems/integer-to-roman/',
  },
];

const Questions = () => {
  return (
    <div className="questions-container">
      <h1>DSA Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <a href={question.url} target="_blank" rel="noopener noreferrer">
              {question.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
