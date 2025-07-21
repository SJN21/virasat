export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'workshop' | 'lecture' | 'exhibition' | 'book-launch';
  image: string;
  speakers: string[];
  price: number;
  maxAttendees: number;
  currentAttendees: number;
  featured: boolean;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Classical Poetry Recitation Evening',
    description: 'Join us for an enchanting evening of classical Urdu and Persian poetry recitations by renowned artists and scholars.',
    date: '2024-02-15',
    time: '7:00 PM - 9:00 PM',
    location: 'Heritage Hall, Cultural Center',
    type: 'lecture',
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
    speakers: ['Ustad Khalil Ahmed', 'Dr. Nazia Malik', 'Prof. Tariq Mehmood'],
    price: 0,
    maxAttendees: 200,
    currentAttendees: 145,
    featured: true
  },
  {
    id: '2',
    title: 'Manuscript Preservation Workshop',
    description: 'Learn the art and science of preserving ancient manuscripts from expert conservators and librarians.',
    date: '2024-02-20',
    time: '10:00 AM - 4:00 PM',
    location: 'Virasat Books Library',
    type: 'workshop',
    image: 'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg',
    speakers: ['Dr. Maria Rodriguez', 'Ali Shah', 'Prof. John Smith'],
    price: 25,
    maxAttendees: 30,
    currentAttendees: 18,
    featured: true
  },
  {
    id: '3',
    title: 'Exhibition: Mughal Court Literature',
    description: 'A comprehensive exhibition showcasing rare manuscripts and artifacts from the Mughal period.',
    date: '2024-03-01',
    time: '9:00 AM - 6:00 PM',
    location: 'National Museum of Literature',
    type: 'exhibition',
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
    speakers: ['Dr. Ayesha Khan', 'Historian Prof. Ravi Sharma'],
    price: 15,
    maxAttendees: 500,
    currentAttendees: 267,
    featured: false
  }
];