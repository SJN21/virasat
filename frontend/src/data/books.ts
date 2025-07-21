export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  publishYear: number;
  language: string;
  pages: number;
  isbn: string;
  coverImage: string;
  downloadUrl: string;
  featured: boolean;
  tags: string[];
  rating: number;
  reviews: number;
}

export const books: Book[] = [
  {
    id: '1',
    title: 'Ghalib: Selected Ghazals',
    author: 'Mirza Ghalib',
    category: 'Poetry',
    description: 'A magnificent collection of Mirza Ghalib\'s most celebrated ghazals, capturing the essence of Urdu poetry\'s golden age. This anthology presents the poet\'s profound observations on love, loss, and the human condition, translated with careful attention to preserving the original\'s lyrical beauty.',
    publishYear: 1797,
    language: 'Urdu',
    pages: 240,
    isbn: '978-0-123456-78-9',
    coverImage: 'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg',
    downloadUrl: '/downloads/ghalib-ghazals.pdf',
    featured: true,
    tags: ['Classical', 'Urdu Poetry', 'Romance', 'Philosophy'],
    rating: 4.9,
    reviews: 127
  },
  {
    id: '2',
    title: 'Heer Ranjha: The Eternal Love Story',
    author: 'Waris Shah',
    category: 'Literature',
    description: 'The timeless tale of Heer and Ranjha, one of the most beloved romantic tragedies in Punjabi literature. Waris Shah\'s masterful narrative weaves together themes of love, sacrifice, and destiny in this epic poem that has captivated readers for centuries.',
    publishYear: 1766,
    language: 'Punjabi',
    pages: 320,
    isbn: '978-0-234567-89-0',
    coverImage: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
    downloadUrl: '/downloads/heer-ranjha.pdf',
    featured: true,
    tags: ['Romance', 'Tragedy', 'Epic Poetry', 'Punjabi Literature'],
    rating: 4.8,
    reviews: 89
  },
  {
    id: '3',
    title: 'Tazkira-e-Ghausia',
    author: 'Shah Abdul Latif Bhittai',
    category: 'Philosophy',
    description: 'A profound collection of Sufi poetry and philosophical treatises by the renowned Sindhi poet-saint. This work explores themes of spiritual enlightenment, divine love, and the mystical journey of the soul towards union with the divine.',
    publishYear: 1689,
    language: 'Sindhi',
    pages: 180,
    isbn: '978-0-345678-90-1',
    coverImage: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
    downloadUrl: '/downloads/tazkira-ghausia.pdf',
    featured: false,
    tags: ['Sufism', 'Philosophy', 'Sindhi Poetry', 'Spirituality'],
    rating: 4.7,
    reviews: 56
  },
  {
    id: '4',
    title: 'Tuzk-e-Jahangiri',
    author: 'Emperor Jahangir',
    category: 'History',
    description: 'The personal memoirs of Mughal Emperor Jahangir, offering an intimate glimpse into the Mughal court, politics, and culture. This historical masterpiece provides valuable insights into 17th-century Indian subcontinent from the emperor\'s own perspective.',
    publishYear: 1605,
    language: 'Persian',
    pages: 450,
    isbn: '978-0-456789-01-2',
    coverImage: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
    downloadUrl: '/downloads/tuzk-jahangiri.pdf',
    featured: true,
    tags: ['Mughal History', 'Memoirs', 'Court Life', 'Politics'],
    rating: 4.6,
    reviews: 234
  },
  {
    id: '5',
    title: 'Kulliyat-e-Iqbal',
    author: 'Allama Iqbal',
    category: 'Poetry',
    description: 'Complete collection of Allama Iqbal\'s poetry, including both Urdu and Persian works. This comprehensive anthology showcases the philosopher-poet\'s vision for spiritual and intellectual renaissance, combining deep philosophical insights with stirring poetic expression.',
    publishYear: 1908,
    language: 'Urdu/Persian',
    pages: 680,
    isbn: '978-0-567890-12-3',
    coverImage: 'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg',
    downloadUrl: '/downloads/kulliyat-iqbal.pdf',
    featured: true,
    tags: ['Philosophy', 'Renaissance', 'Nationalism', 'Spirituality'],
    rating: 4.9,
    reviews: 312
  },
  {
    id: '6',
    title: 'Saqi Nama',
    author: 'Hakim Omar Khayyam',
    category: 'Poetry',
    description: 'A collection of quatrains by the Persian mathematician-poet Omar Khayyam, exploring themes of mortality, pleasure, and the ephemeral nature of life. These verses have influenced generations of readers with their profound yet accessible wisdom.',
    publishYear: 1048,
    language: 'Persian',
    pages: 120,
    isbn: '978-0-678901-23-4',
    coverImage: 'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg',
    downloadUrl: '/downloads/saqi-nama.pdf',
    featured: false,
    tags: ['Persian Poetry', 'Philosophy', 'Medieval Literature', 'Wisdom'],
    rating: 4.5,
    reviews: 78
  }
];

export const categories = ['All', 'Poetry', 'Literature', 'History', 'Philosophy'];
export const authors = ['All', ...Array.from(new Set(books.map(book => book.author)))];