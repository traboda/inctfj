import faq from '../../data/faq';

const intersection = (set1, set2) => new Set([...set1].filter(x => set2.has(x)));

export const filteredFAQ = (search, tags = new Set<any>(), totalVisible = null) => {
  let _faq = faq.filter(f => {
    return (f.question.toLowerCase().includes(search.toLowerCase()) ||
            f.keywords?.filter(keyword => keyword.includes(search))?.length) &&
            (tags.size > 0 ? intersection(f.tags, tags).size > 0 : true);
  });
  if (totalVisible) _faq = _faq.slice(0, totalVisible);
  return _faq;
};