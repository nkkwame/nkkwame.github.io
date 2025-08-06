'use client'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kwame Nkrumah",
    "alternateName": "Kwame",
    "description": "Full-Stack Developer, IT Teacher & Content Creator",
    "url": "https://nkkwame.github.io",
    "image": "https://nkkwame.github.io/profile-image.jpg",
    "sameAs": [
      "https://github.com/nkkwame",
      "https://www.linkedin.com/in/nkkwame", // Add your actual LinkedIn
      "https:/x.com/uccnewshub" // Add your actual Twitter
    ],
    "jobTitle": [
      "Full-Stack Developer",
      "IT Teacher",
      "Content Creator"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "University of Cape Coast",
      "alternateName": "UCC"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Ghana",
      "addressRegion": "Central Region"
    },
    "email": "josephkwame.nkrumah@stu.ucc.edu.gh",
    "knowsAbout": [
      "Web Development",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Programming Education",
      "IT Training",
      "Content Creation"
    ],
    "offers": [
      {
        "@type": "Service",
        "name": "Web Development",
        "description": "Full-stack web application development",
        "provider": {
          "@type": "Person",
          "name": "Kwame Nkrumah"
        }
      },
      {
        "@type": "Service", 
        "name": "IT Training",
        "description": "Programming and technology education",
        "provider": {
          "@type": "Person",
          "name": "Kwame Nkrumah"
        }
      },
      {
        "@type": "Service",
        "name": "Content Creation",
        "description": "Educational programming content and tutorials",
        "provider": {
          "@type": "Person",
          "name": "Kwame Nkrumah"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
