export interface GalleryImage {
  id: string
  src: string
  title: string
  category: string
  uploadDate: string
  alt?: string
  description?: string
}

// Static, site-hosted gallery images — used for a fully static site.
export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/modern-library-study.png",
    title: "Library Study Session",
    category: "Campus Life",
    uploadDate: "2024-03-15",
    alt: "Students studying in the library",
    description: "Students collaborating in our state-of-the-art library facility",
  },
  {
    id: "2",
    src: "/school-graduation-ceremony-with-students-in-caps-a.jpg",
    title: "Class of 2024 Graduation",
    category: "Graduation",
    uploadDate: "2024-03-14",
    alt: "Graduation ceremony",
    description: "Celebrating our graduates' achievements and bright futures",
  },
  {
    id: "3",
    src: "/students-playing-basketball-in-school-gymnasium.jpg",
    title: "Championship Game",
    category: "Sports",
    uploadDate: "2024-03-13",
    alt: "Basketball game",
    description: "Our basketball team competing in the regional finals",
  },
  {
    id: "4",
    src: "/students-performing-in-school-theater-production.jpg",
    title: "Annual Theater Production",
    category: "Arts",
    uploadDate: "2024-03-12",
    alt: "Theater performance",
    description: "Students showcasing their talents in our spring musical",
  },
  {
    id: "5",
    src: "/science-fair-with-students-presenting-projects.jpg",
    title: "Science Fair Excellence",
    category: "Academics",
    uploadDate: "2024-03-11",
    alt: "Science fair",
    description: "Students presenting innovative research projects",
  },
  {
    id: "6",
    src: "/school-cultural-festival-with-diverse-students-cel.jpg",
    title: "International Culture Day",
    category: "Events",
    uploadDate: "2024-03-10",
    alt: "Cultural festival",
    description: "Celebrating diversity and cultural heritage",
  },
  {
    id: "7",
    src: "/students-in-chemistry-lab-conducting-experiments.jpg",
    title: "Advanced Chemistry Lab",
    category: "Academics",
    uploadDate: "2024-03-09",
    alt: "Chemistry lab",
    description: "Hands-on learning in our modern science facilities",
  },
  {
    id: "8",
    src: "/school-soccer-team-celebrating-victory-on-field.jpg",
    title: "Soccer Championship Win",
    category: "Sports",
    uploadDate: "2024-03-08",
    alt: "Soccer celebration",
    description: "Victory celebration after winning the district championship",
  },
  {
    id: "9",
    src: "/students-painting-murals-in-art-classroom.jpg",
    title: "Collaborative Art Project",
    category: "Arts",
    uploadDate: "2024-03-07",
    alt: "Art class",
    description: "Students creating a community mural in art class",
  },
  {
    id: "10",
    src: "/school-cafeteria-with-students-eating-and-socializ.jpg",
    title: "Lunch Time Community",
    category: "Campus Life",
    uploadDate: "2024-03-06",
    alt: "Cafeteria scene",
    description: "Students enjoying meals and building friendships",
  },
  {
    id: "11",
    src: "/school-band-performing-at-outdoor-concert.jpg",
    title: "Spring Concert Series",
    category: "Arts",
    uploadDate: "2024-03-05",
    alt: "Band performance",
    description: "Our talented musicians performing for the community",
  },
  {
    id: "12",
    src: "/students-volunteering-at-community-service-event.jpg",
    title: "Community Service Day",
    category: "Events",
    uploadDate: "2024-03-04",
    alt: "Community service",
    description: "Students giving back to the local community",
  },
  {
    id: "13",
    src: "/amit.png",
    title: "My name is Amit",
    category: "Amit",
    uploadDate: "2024-03-04",
    alt: "Commddunity service",
    description: "Students giving back to the local community",
  },
]

// Minimal hook matching previous usage shape but returning static data.
export function useGalleryImages() {
  return { images: galleryImages }
}
