// CSS
import "./index.css";
import { useState } from 'react';

  const uppercase = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
    'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  
  const uppercaseExtended = [
    'Á', 'Ă', 'Ǎ', 'Â', 'Ä', 'Ạ', 'À', 'Ā', 'Ą', 'Å', 
    'Ã', 'Æ', 'Ǽ', 'Ḅ', 'Ɓ', 'Ć', 'Č', 'Ç', 'Ĉ', 'Ċ', 
    'Ð', 'Ď', 'Đ', 'Ḍ', 'Ɗ', 'É', 'Ĕ', 'Ě', 'Ê', 'Ë', 
    'Ė', 'Ẹ', 'È', 'Ē', 'Ę', 'Ɛ', 'Ǝ', 'Ẽ', 'Ə', 'Ğ', 
    'Ǧ', 'Ĝ', 'Ģ', 'Ġ', 'Ḡ', 'Ħ', 'Ĥ', 'Ḧ', 'Ḥ', 'Í', 
    'Ĭ', 'Ǐ', 'Î', 'Ï', 'İ', 'Ị', 'Ì', 'Ī', 'Į', 'Ɨ', 
    'Ĩ', 'Ĵ', 'Ķ', 'Ƙ', 'Ĺ', 'Ľ', 'Ļ', 'Ł', 'Ń', 'Ň', 
    'Ņ', 'Ṅ', 'Ṇ', 'Ɲ', 'Ñ', 'Ŋ', 'Ó', 'Ŏ', 'Ǒ', 'Ô', 
    'Ö', 'Ọ', 'Ò', 'Ő', 'Ō', 'Ɔ', 'Ø', 'Ǿ', 'Õ', 'Œ', 
    'Ṗ', 'Þ', 'Ŕ', 'Ř', 'Ŗ', 'Ś', 'Š', 'Ş', 'Ŝ', 'Ș', 
    'Ṣ', 'ẞ', 'Ŧ', 'Ť', 'Ţ', 'Ț', 'Ú', 'Ŭ', 'Ǔ', 'Û', 
    'Ü', 'Ụ', 'Ù', 'Ű', 'Ū', 'Ų', 'Ů', 'Ũ', 'Ʌ', 'Ẃ', 
    'Ŵ', 'Ẅ', 'Ẁ', 'Ẍ', 'Ý', 'Ŷ', 'Ÿ', 'Ỳ', 'Ƴ', 'Ȳ', 
    'Ỹ', 'Ź', 'Ž', 'Ż', 'Ẓ'
  ];
  
  const lowercase = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 'y', 'z'
  ];
  
  const lowercaseExtended = [
    'á', 'ă', 'ǎ', 'â', 'ä', 'ạ', 'à', 'ā', 'ą', 'å', 
    'ã', 'æ', 'ǽ', 'ḅ', 'ɓ', 'ć', 'č', 'ç', 'ĉ', 'ċ', 
    'ð', 'ď', 'đ', 'ḍ', 'ɗ', 'é', 'ĕ', 'ě', 'ê', 'ë', 
    'ė', 'ẹ', 'è', 'ē', 'ę', 'ɛ', 'ẽ', 'ǝ', 'ə', 'ğ', 
    'ǧ', 'ĝ', 'ģ', 'ġ', 'ḡ', 'ħ', 'ĥ', 'ḧ', 'ḥ', 'ı', 
    'í', 'ĭ', 'ǐ', 'î', 'ï', 'ị', 'ì', 'ī', 'į', 'ɨ', 
    'ĩ', 'ȷ', 'ĵ', 'ķ', 'ƙ', 'ĺ', 'ľ', 'ļ', 'ł', 'ń', 
    'ň', 'ņ', 'ṅ', 'ṇ', 'ɲ', 'ñ', 'ŋ', 'ó', 'ŏ', 'ǒ', 
    'ô', 'ö', 'ọ', 'ò', 'ő', 'ō', 'ɔ', 'ø', 'ǿ', 'õ', 
    'œ', 'ṗ', 'þ', 'ŕ', 'ř', 'ŗ', 'ś', 'š', 'ş', 'ŝ', 
    'ș', 'ṣ', 'ß', 'ŧ', 'ť', 'ţ', 'ț', 'ú', 'ŭ', 'ǔ', 
    'û', 'ü', 'ụ', 'ù', 'ű', 'ū', 'ų', 'ů', 'ũ', 'ʌ', 
    'ẃ', 'ŵ', 'ẅ', 'ẁ', 'ẍ', 'ý', 'ŷ', 'ÿ', 'ỳ', 'ƴ', 
    'ȳ', 'ỹ', 'ź', 'ž', 'ż', 'ẓ'
  ];
  
  const symbols = [
    'ª', 'º', '@', '&', '¶', '§', '©', '®', '™', '°', 
    '|', '¦', '†', '‡', '%'
  ];
  
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  const mathematics = ['⁄', '‴', '′', '″', '+', '−', '×', '÷', '=', '≠', '>', '<', '~', '^', '%'];
  
  const fractions = ['½', '⅓', '⅔', '¼', '¾', '⅛', '⅜', '⅝', '⅞'];
  
  const superscriptAndSubscript = [
    '₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉', 
    '⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'
  ];
  
  const punctuation = [
    '.', ',', ':', ';', '…', '!', '¡', '?', '¿', '·', 
    '•', '*', '#', '/', '\\', '-', '–', '—', '‐', '_', 
    '(', ')', '{', '}', '[', ']', '‚', '„', '“', '”', 
    '‘', '’', '«', '»', '‹', '›', '"', "'"
  ];
  
  const currencySymbols = [
    'ƒ', '฿', '₵', '¢', '₡', '¤', '$', '€', '₲', '₴', 
    '₺', '₼', '₦', '₽', '₹', '₪', '£', '₩', '¥'
  ];
  
  const arrows = ['↑', '↗', '→', '↘', '↓', '↙', '←', '↖', '↔', '↕'];
  
  const diacritics = ['¨', '˙', '`', '´', '˝', 'ˆ', 'ˇ', '˘', '˚', '˜', '¯', '¸', '˛', 'ʼ', 'ʻ'];
  

function AlphabetLayout(props) {
  const [selectedLetter, setSelectedLetter] = useState('A');

  // Function to handle click on list item
  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  // Function to generate list items
  const generateList = (title, items) => {
    return (
      <div>
        <h3>{title}</h3>
        <ul className="font-glyphs-list">
          {items.map((item, index) => (
            <li key={index} onClick={() => handleLetterClick(item)} className={props.fontFamily + "-class"}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', padding: "1rem" }}>
      <div style={{ flex: '30%' }}>
        <ul className="font-glyphs-list selected">
          <li className={props.fontFamily + "-class"}>{selectedLetter}</li>
        </ul>
      </div>
      <div style={{ flex: '70%' }}>
        {generateList('Uppercase', uppercase)}
        {generateList('Uppercase Extended', uppercaseExtended)}
        {generateList('Lowercase', lowercase)}
        {generateList('Lowercase Extended', lowercaseExtended)}
        {generateList('Symbols', symbols)}
        {generateList('Numbers', numbers)}
        {generateList('Mathematics', mathematics)}
        {generateList('Fractions', fractions)}
        {generateList('Superscript & Subscript', superscriptAndSubscript)}
        {generateList('Punctuation', punctuation)}
        {generateList('Currency Symbols', currencySymbols)}
        {generateList('Arrows', arrows)}
        {generateList('Diacritics', diacritics)}
      </div>
    </div>
  );
}

export default AlphabetLayout;