export const diplomas = [
  {
    id: 'dit',
    name: 'Diploma in Information Technology',
    description: 'Equips students with programming, networking, and system administration skills.',
    duration: '3 years',
    courses: [
      {
        id: 'dit101',
        code: 'DIT101',
        name: 'Programming Fundamentals',
        description: 'Introduction to programming concepts using Python',
        credits: 4,
        duration: '15 weeks',
        prerequisites: 'None',
        faculty: 'School of Infocomm'
      },
      {
        id: 'dit102',
        code: 'DIT102',
        name: 'Web Development',
        description: 'Learn HTML, CSS, and JavaScript for web development',
        credits: 4,
        duration: '15 weeks',
        prerequisites: 'DIT101',
        faculty: 'School of Infocomm'
      },
      {
        id: 'dit103',
        code: 'DIT103',
        name: 'Database Systems',
        description: 'Introduction to database design and SQL',
        credits: 4,
        duration: '15 weeks',
        prerequisites: 'DIT101',
        faculty: 'School of Infocomm'
      }
    ]
  },
  {
    id: 'dism',
    name: 'Diploma in Infocomm Security Management',
    description: 'Focuses on cybersecurity, network security, and digital forensics.',
    duration: '3 years',
    courses: [
      {
        id: 'dism101',
        code: 'DISM101',
        name: 'Cybersecurity Fundamentals',
        description: 'Introduction to cybersecurity concepts and threats',
        credits: 4,
        duration: '15 weeks',
        prerequisites: 'None',
        faculty: 'School of Infocomm'
      },
      {
        id: 'dism102',
        code: 'DISM102',
        name: 'Network Security',
        description: 'Learn about network protocols and security measures',
        credits: 4,
        duration: '15 weeks',
        prerequisites: 'DISM101',
        faculty: 'School of Infocomm'
      }
    ]
  },
  {
    id: 'dase',
    name: 'Diploma in Applied AI and Analytics',
    description: 'Covers artificial intelligence, machine learning, and data analytics.',
    duration: '3 years',
    courses: [
      {
        id: 'dase101',
        code: 'DASE101',
        name: 'Introduction to AI',
        description: 'Basic concepts of artificial intelligence',
        credits: 4,
        duration: '15 weeks',
        prerequisites: 'None',
        faculty: 'School of Infocomm'
      },
      {
        id: 'dase102',
        code: 'DASE102',
        name: 'Data Analytics',
        description: 'Learn data analysis techniques and tools',
        credits: 4,
        duration: '15 weeks',
        prerequisites: 'DASE101',
        faculty: 'School of Infocomm'
      }
    ]
  }
];

export const faqData = [
  {
    id: 1,
    question: 'How do I apply for a course?',
    answer: 'You can apply through our online portal by filling out the registration form for your desired course.'
  },
  {
    id: 2,
    question: 'What are the entry requirements?',
    answer: 'Entry requirements vary by diploma. Please check individual diploma pages for specific requirements.'
  },
  {
    id: 3,
    question: 'Can I apply for multiple courses?',
    answer: 'Yes, you can apply for multiple courses, but each application must be submitted separately.'
  }
];