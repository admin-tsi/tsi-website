import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Pagination from '@/components/Pagination';

interface NewsArticle {
  id: number;
  category: string;
  title: string;
  imageUrl: string;
  date: string;
}

const NewsItem: React.FC<NewsArticle> = ({
  title,
  category,
  imageUrl,
  date,
}) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <motion.div
      className="relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 rounded-b-lg">
        <h3 className="text-md font-medium text-white">{title}</h3>
        <div className="flex justify-between">
          <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
          <span className="bg- text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
            {formattedDate}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const newsData: NewsArticle[] = [
  {
    id: 1,
    category: 'health',
    title: 'The Future of Healthcare',
    imageUrl:
      'https://thetournament.com/wp-content/uploads/2023/08/DSC03768-scaled.jpg',
    date: '2024-01-01',
  },
  {
    id: 2,
    category: 'workforce',
    title: 'Remote Work Trends',
    imageUrl:
      'https://thetournament.com/wp-content/uploads/2023/08/DSC03768-scaled.jpg',
    date: '2024-01-02',
  },
  {
    id: 3,
    category: 'infrastructure',
    title: 'Infrastructure Investments Boom',
    imageUrl:
      'https://thetournament.com/wp-content/uploads/2023/08/DSC03768-scaled.jpg',
    date: '2024-01-03',
  },
  {
    id: 4,
    category: 'event',
    title: 'Global Tech Conference 2024',
    imageUrl:
      'https://thetournament.com/wp-content/uploads/2023/08/DSC03768-scaled.jpg',
    date: '2024-01-04',
  },
  {
    id: 5,
    category: 'health',
    title: 'Advances in Telemedicine',
    imageUrl:
      'https://thetournament.com/wp-content/uploads/2023/08/DSC03768-scaled.jpg',
    date: '2024-01-05',
  },
  {
    id: 6,
    category: 'workforce',
    title: 'The Gig Economy',
    imageUrl:
      'https://thetournament.com/wp-content/uploads/2023/08/DSC03768-scaled.jpg',
    date: '2024-01-06',
  },
  {
    id: 7,
    category: 'infrastructure',
    title: 'Sustainable Urban Development',
    imageUrl:
      'https://thetournament.com/wp-content/uploads/2023/08/DSC03768-scaled.jpg',
    date: '2024-01-07',
  },
  {
    id: 8,
    category: 'event',
    title: 'Annual Environmental Summit',
    imageUrl:
      'https://thetournament.com/wp-content/uploads/2023/08/DSC03768-scaled.jpg',
    date: '2024-01-08',
  },
  {
    id: 9,
    category: 'health',
    title: 'Mental Health Awareness Week',
    imageUrl:
      'https://thetournament.com/wp-content/uploads/2023/08/DSC03768-scaled.jpg',
    date: '2024-01-09',
  },
  {
    id: 10,
    category: 'workforce',
    title: 'Future of AI in the Workplace',
    imageUrl:
      'https://thetournament.com/wp-content/uploads/2023/08/DSC03768-scaled.jpg',
    date: '2024-01-10',
  },
  {
    id: 11,
    category: 'infrastructure',
    title: 'High-Speed Rail Projects',
    imageUrl:
      'https://thetournament.com/wp-content/uploads/2023/08/DSC03768-scaled.jpg',
    date: '2024-01-11',
  },
  {
    id: 12,
    category: 'event',
    title: 'International Film Festival',
    imageUrl:
      'https://thetournament.com/wp-content/uploads/2023/08/DSC03768-scaled.jpg',
    date: '2024-01-12',
  },
];

const NewsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  const categories: string[] = [
    'All',
    ...Array.from(new Set(newsData.map((item) => item.category))),
  ];

  const filteredData = newsData
    .filter(
      (item) => selectedCategory === 'All' || item.category === selectedCategory
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <select
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1); // Reset to first page on category change
          }}
          className="border p-2 rounded-lg"
          value={selectedCategory}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentItems.map((article) => (
          <NewsItem key={article.id} {...article} />
        ))}
      </div>
      <div className="flex items-center justify-center py-10">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

const NewsPage: React.FC = () => {
  return (
    <div className="font-clash">
      <section className="relative h-[45vh]">
        <div className=" h-full">
          <img
            src="https://thetournament.com/wp-content/uploads/2023/08/DSC03768-scaled.jpg"
            alt="Ian Mahinmi"
            className="w-screen h-full object-cover object-center"
          />

          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4 bg-primary opacity-80">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold">All News</h1>
            </div>
          </div>
        </div>
      </section>
      <NewsGrid />
      <Footer />
    </div>
  );
};

export default NewsPage;
