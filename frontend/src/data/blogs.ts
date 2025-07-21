export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  image: string;
  tags: string[];
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Enduring Legacy of Classical Urdu Poetry',
    excerpt: 'Exploring how the masters of Urdu poetry continue to influence modern literature and cultural expression in the digital age.',
    content: 'Classical Urdu poetry represents one of the most sophisticated literary traditions in world literature...',
    author: 'Dr. Fatima Khan',
    publishDate: '2024-01-15',
    category: 'Literature',
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
    tags: ['Urdu Poetry', 'Classical Literature', 'Cultural Heritage'],
    readTime: 8
  },
  {
    id: '2',
    title: 'Preserving Manuscripts in the Digital Era',
    excerpt: 'How modern technology is helping us save ancient texts for future generations while making them accessible worldwide.',
    content: 'The digitization of historical manuscripts has revolutionized how we preserve and access cultural heritage...',
    author: 'Prof. Ahmed Hassan',
    publishDate: '2024-01-10',
    category: 'Preservation',
    image: 'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg',
    tags: ['Digital Preservation', 'Manuscripts', 'Technology'],
    readTime: 6
  },
  {
    id: '3',
    title: 'Understanding Sufi Literature and Its Modern Relevance',
    excerpt: 'A deep dive into the mystical poetry and prose that has guided spiritual seekers for centuries.',
    content: 'Sufi literature offers profound insights into the human spiritual journey...',
    author: 'Dr. Sarah Ahmed',
    publishDate: '2024-01-05',
    category: 'Philosophy',
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
    tags: ['Sufism', 'Mysticism', 'Spiritual Literature'],
    readTime: 10
  }
];