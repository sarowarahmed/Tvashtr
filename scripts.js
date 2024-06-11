const hackathons = [
    {
        name: "Flipkart Grid",
        organizer: "Flipkart",
        timeline: "Annual, typically in June-August",
        registrationPeriod: "June 1 - June 30",
        hackathonPeriod: "July 1 - August 15",
        evaluationPeriod: "August 16 - August 30",
        resultsAnnouncement: "August 31",
        eligibility: "Students and Professionals",
        topics: "AI/ML, E-commerce Solutions, Data Science",
        prizes: "Total prize pool of $50,000",
        registrationLink: "https://flipkartgrid.com",
        contact: "contact@flipkartgrid.com"
    },
    {
        name: "Uber Hacktag",
        organizer: "Uber",
        timeline: "Annual, typically in September-November",
        registrationPeriod: "September 1 - September 30",
        hackathonPeriod: "October 1 - November 15",
        evaluationPeriod: "November 16 - November 29",
        resultsAnnouncement: "November 30",
        eligibility: "Open to All",
        topics: "Urban Mobility, Logistics, AI/ML",
        prizes: "Total prize pool of $100,000",
        registrationLink: "https://uberhacktag.com",
        contact: "contact@uberhacktag.com"
    },
    {
        name: "Microsoft Engage",
        organizer: "Microsoft",
        timeline: "AAnnual, typically in April-June",
        registrationPeriod: "April 1 - April 30",
        hackathonPeriod: "May 1 - June 15",
        evaluationPeriod: "June 16 - June 29",
        resultsAnnouncement: "June 30",
        eligibility: "Students",
        topics: "Cloud Computing, AI/ML, Software Development",
        prizes: "Internships, mentorship opportunities, and tech-gadgets",
        registrationLink: "https://engage.microsoft.com/",
        contact: "engage@microsoft.com"
    },
    {
        name: "Microsoft Fixathon",
        organizer: "Microsoft",
        timeline: "Annual, typically in October-December",
        registrationPeriod: "October 1 - October 31",
        hackathonPeriod: "November 1 - December 15",
        evaluationPeriod: "December 16 - December 29",
        resultsAnnouncement: "December 30",
        eligibility: "Students and Professionals",
        topics: "Bug fixing, software optimization, cybersecurity",
        prizes: "Total prize pool of $20,000",
        registrationLink: "https://fixathon.microsoft.com/",
        contact: "fixathon@microsoft.com"
    },
    {
        name: "Myntra Hacker Ramp",
        organizer: "Myntra",
        timeline: "Annual, typically in November-January",
        registrationPeriod: "November 1 - November 30",
        hackathonPeriod: "December 1 - January 15",
        evaluationPeriod: "January 16 - January 29",
        resultsAnnouncement: "January 30",
        eligibility: "Students and Professionals",
        topics: "E-commerce, AI/ML, Fashion Tech",
        prizes: "Total prize pool of $30,000",
        registrationLink: "Myntra Hacker Ramp",
        contact: "hackerramp@myntra.com"
    },
    {
        name: "American Express CodeStreet",
        organizer: "American Express",
        timeline: "Annual, typically in July-September",
        registrationPeriod: "July 1 - July 31",
        hackathonPeriod: "August 1 - September 15",
        evaluationPeriod: "September 16 - September 29",
        resultsAnnouncement: "September 30",
        eligibility: "Students and Professionals",
        topics: "FinTech, Payments, AI/ML",
        prizes: "Total prize pool of $50,000",
        registrationLink: "https://codestreet.americanexpress.com/",
        contact: "codestreet@americanexpress.com"
    },
    {
        name: "JPMorgan Chase Code for Good",
        organizer: "JPMorgan Chase",
        timeline: "Annual, typically in October-December",
        registrationPeriod: "October 1 - October 31",
        hackathonPeriod: "November 1 - December 15",
        evaluationPeriod: "December 16 - December 29",
        resultsAnnouncement: "December 30",
        eligibility: "Students",
        topics: "Social Impact, Finance, AI/ML",
        prizes: "Internships, mentorship opportunities",
        registrationLink: "https://JPMorgan Chase Code for Good.com/",
        contact: "codeforgood@jpmorganchase.com"
    },
    {
        name: "EY Techathon",
        organizer: "EY (Ernst & Young)",
        timeline: "Annual, typically in January-March",
        registrationPeriod: "January 1 - January 31",
        hackathonPeriod: "February 1 - March 15",
        evaluationPeriod: "March 16 - March 29",
        resultsAnnouncement: "March 30",
        eligibility: "Students and Professionals",
        topics: "AI/ML, Data Analytics, Cybersecurity",
        prizes: "Total prize pool of $30,000",
        registrationLink: "https://EY Techathon.com/",
        contact: "techathon@ey.com"
    },
    {
        name: "Navi Hackerverse",
        organizer: "Navi",
        timeline: "March 1 - March 31",
        registrationPeriod: "April 1 - May 15",
        hackathonPeriod: "May 16 - May 29",
        evaluationPeriod: "May 16 - May 29",
        resultsAnnouncement: "May 30",
        eligibility: "Students and Professionals",
        topics: "FinTech, AI/ML, Mobile Development",
        prizes: "Total prize pool of $25,000",
        registrationLink: "https://Navi Hackerverse/",
        contact: "hackerverse@navi.com"
    },
    {
        name: "Smart India Hackathon",
        organizer: "Government of India",
        timeline: "Annual, typically in March-April",
        registrationPeriod: "January 1 - January 31",
        hackathonPeriod: "March 1 - April 15",
        evaluationPeriod: "April 16 - April 29",
        resultsAnnouncement: "April 30",
        eligibility: "Students and Professionals",
        topics: "Social Impact, Healthcare, Education, Agriculture",
        prizes: "Total prize pool of $50,000",
        registrationLink: "https://sih.gov.in/",
        contact: "sih@gov.in"
    },
    {
        name: "TVS Credit EPIC",
        organizer: "TVS Credit",
        timeline: "Annual, typically in May-July",
        registrationPeriod: "May 1 - May 31",
        hackathonPeriod: "June 1 - July 15",
        evaluationPeriod: "July 16 - July 29",
        resultsAnnouncement: "July 30",
        eligibility: "Students and Professionals",
        topics: "FinTech, AI/ML, Data Analytics",
        prizes: "Total prize pool of $20,000",
        registrationLink: "https://TVS Credit EPIC.in/",
        contact: "epic@tvscredit.com"
    },
    {
        name: "TezAsia Hackathon",
        organizer: "Tezos India",
        timeline: "Annual, typically in August-October",
        registrationPeriod: "August 1 - August 31",
        hackathonPeriod: "September 1 - October 15",
        evaluationPeriod: "October 16 - October 29",
        resultsAnnouncement: "October 30",
        eligibility: "Open to All",
        topics: "Blockchain, DeFi, AI/ML",
        prizes: "Total prize pool of $50,000",
        registrationLink: "https://TezAsia Hackathon.in/",
        contact: "hackathon@tezosindia.com"
    },
    {
        name: "Swiss Re Realmagine Challenge",
        organizer: "Swiss Re",
        timeline: "Annual, typically in September-November",
        registrationPeriod: "September 1 - September 30",
        hackathonPeriod: "October 1 - November 15",
        evaluationPeriod: "November 16 - November 29",
        resultsAnnouncement: "November 30",
        eligibility: "Students and Professionals",
        topics: " Insurance, AI/ML, Data Analytics",
        prizes: "Total prize pool of $40,000",
        registrationLink: "https://Swiss RRC.in/",
        contact: "realmagine@swissre.com"
    },
    {
        name: "EPAM Flip Script Challenge",
        organizer: "EPAM Systems",
        timeline: "Annual, typically in January-March",
        registrationPeriod: "January 1 - January 31",
        hackathonPeriod: "February 1 - March 15",
        evaluationPeriod: "March 16 - March 29",
        resultsAnnouncement: "March 30",
        eligibility: "Students and Professionals",
        topics: "Software Development, AI/ML, Data Analytics",
        prizes: "Total prize pool of $30,000",
        registrationLink: "https://EPAM Flip Script Challenge.in/",
        contact: "flipscript@epam.com"
    },
    {
        name: "Codegoda",
        organizer: "Agoda",
        timeline: "Annual, typically in April-June",
        registrationPeriod: "April 1 - April 30",
        hackathonPeriod: "May 1 - June 15",
        evaluationPeriod: "June 16 - June 29",
        resultsAnnouncement: "June 30",
        eligibility: "Open to All",
        topics: "Travel Tech, AI/ML, Web Development",
        prizes: "Total prize pool of $50,000",
        registrationLink: "https://Codegoda.in/",
        contact: "codegoda@agoda.com"
    },
    {
        name: "NASSCOM Product Conclave Hackathon",
        organizer: "NASSCOM",
        timeline: "Annual, typically in October-November",
        registrationPeriod: "October 1 - October 31",
        hackathonPeriod: "November 1 - November 15",
        evaluationPeriod: "November 16 - November 29",
        resultsAnnouncement: "November 30",
        eligibility: "Students and Professionals",
        topics: "Product Development, AI/ML, IoT",
        prizes: "Total prize pool of $30,000",
        registrationLink: "https://NASSCOM.in/",
        contact: "npc@nasscom.in"
    },
    {
        name: "TechGig Code Gladiators",
        organizer: "TechGig",
        timeline: "Annual, typically in May-July",
        registrationPeriod: "May 1 - May 31",
        hackathonPeriod: "June 1 - July 15",
        evaluationPeriod: "July 16 - July 29",
        resultsAnnouncement: "July 30",
        eligibility: "Open to All",
        topics: "Coding, AI/ML, Data Science",
        prizes: "Total prize pool of $50,000",
        registrationLink: "https://TechGig Code Gladiators.in/",
        contact: "codegladiators@techgig.com"
    },
    {
        name: "TCS CodeVita",
        organizer: "Tata Consultancy Services (TCS)",
        timeline: "Annual, typically in July-September",
        registrationPeriod: "July 1 - July 31",
        hackathonPeriod: "August 1 - September 15",
        evaluationPeriod: "September 16 - September 29",
        resultsAnnouncement: "September 30",
        eligibility: "Students and Professionals",
        topics: "Coding, Problem Solving, Algorithmic Challenges",
        prizes: "Total prize pool of $30,000",
        registrationLink: "https://TCS CodeVita.in/",
        contact: "codevita@tcs.com"
    },
    {
        name: "InOut (India’s Largest Community Hackathon)",
        organizer: "HackerEarth",
        timeline: "Annual, typically in November",
        registrationPeriod: "October 1 - October 31",
        hackathonPeriod: "November 1 - November 30",
        evaluationPeriod: "December 1 - December 7",
        resultsAnnouncement: "December 10",
        eligibility: "Students and Professionals",
        topics: "Open Innovation, AI/ML, Blockchain",
        prizes: "Total prize pool of $40,000",
        registrationLink: "https://InOut.in/",
        contact: "inout@hackerearth.com"
    },
    {
        name: "Techstars Startup Weekend",
        organizer: "Techstars",
        timeline: "Multiple events throughout the year",
        registrationPeriod: "Varies by event",
        hackathonPeriod: "Typically a 54-hour weekend event",
        evaluationPeriod: "Last day of the event",
        resultsAnnouncement: "Last day of the event",
        eligibility: "Open to All",
        topics: "Entrepreneurship, Product Development, Business Innovation",
        prizes: "Mentorship, Networking Opportunities, Seed Funding",
        registrationLink: "https://Techstars Startup Weekend.in/",
        contact: "support@techstars.com"
    },
    // Add remaining hackathons...
];

document.addEventListener('DOMContentLoaded', () => {
    const hackathonList = document.getElementById('hackathon-list');

    hackathons.forEach(hackathon => {
        const card = document.createElement('div');
        card.className = 'hackathon-card';
        card.innerHTML = `
            <h3>${hackathon.name}</h3>
            <p><strong>Organizer:</strong> ${hackathon.organizer}</p>
            <p><strong>Timeline:</strong> ${hackathon.timeline}</p>
            <p><strong>Eligibility:</strong> ${hackathon.eligibility}</p>
            <p><strong>Topics:</strong> ${hackathon.topics}</p>
        `;
        card.addEventListener('click', () => {
            alert(`
                Name: ${hackathon.name}
                Organizer: ${hackathon.organizer}
                Timeline: ${hackathon.timeline}
                Registration Period: ${hackathon.registrationPeriod}
                Hackathon Period: ${hackathon.hackathonPeriod}
                Evaluation Period: ${hackathon.evaluationPeriod}
                Results Announcement: ${hackathon.resultsAnnouncement}
                Eligibility: ${hackathon.eligibility}
                Topics: ${hackathon.topics}
                Prizes: ${hackathon.prizes}
                Registration Link: ${hackathon.registrationLink}
                Contact: ${hackathon.contact}
            `);
        });
        hackathonList.appendChild(card);
    });
});
