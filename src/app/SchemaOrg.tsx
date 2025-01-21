import Script from 'next/script'

const SchemaOrg = () => {
  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Lalitha Sri Vidhara",
    "jobTitle": "Undergraduate Student",
    "url": "test",
    "sameAs": [
      "https://github.com/lalithaVidhara",
      "https://www.linkedin.com/in/lalitha-sri-vidhara/",
      "https://www.facebook.com/lalithasrividhara/",
      "https://www.instagram.com/la1itha_v/",
      "https://www.youtube.com/@lalithasrividhara6205",
      "https://medium.com/@larlithasrividhara",
      "https://dev.to/lalitha_sri",
      "https://www.hackerrank.com/profile/larlithasrividh1",
      "https://leetcode.com/u/DrtGNsxAcC/",
    ]
  };

  return (
    <Script id="schema-org" type="application/ld+json" strategy="beforeInteractive">
      {JSON.stringify(schemaOrgJSONLD)}
    </Script>
  );
};

export default SchemaOrg;