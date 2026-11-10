const { useEffect, useState } = React;


const SAFE_IMAGE_FALLBACK = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80";
function SafeImage({src,alt="",className="",...props}) {
 const [failed,setFailed]=useState(false);
 return <img src={failed?SAFE_IMAGE_FALLBACK:src} alt={alt} className={className} onError={()=>setFailed(true)} {...props}/>;
}

const NAV = [
  { label: "Home", href: "#/" },
  { label: "About Us", href: "#/about", children: [
    ["Company", "#/about"], ["Team", "#/about/team"]
  ]},
  { label: "Services", href: "#/services", children: [
    ["Software Development", "#/services/software-development"], ["Product Development", "#/services/product-development"],
    ["Cloud Computing", "#/services/cloud-computing"], ["Mobile App Development", "#/services/mobile-app-development"],
    ["IT Consulting", "#/services/it-consulting"], ["Staff Augmentation", "#/services/staff-augmentation"]
  ]},
  { label: "Gallery", href: "#/gallery" },
  { label: "Our Products", href: "#/products", children: [
    ["Potla CRM", "#/products/potla-crm"], ["HRMS", "#/products/hrms"],
    ["School Management System", "#/products/school-management-system"],
    ["Hospitality Management System", "#/products/hospitality-management-system"],
    ["Bulk WhatsApp", "#/products/bulk-whatsapp"], ["Live Event App", "#/products/live-event-app"]
  ]},
  { label: "Locations", href: "#/locations", children: [
    ["Hyderabad", "#/locations"], ["Bangalore", "#/locations"], ["Malaysia", "#/locations"]
  ]},
  { label: "Careers", href: "#/careers", children: [
    ["Life at Potla Tech", "#/careers"], ["Current Openings", "#/jobs"], ["Submit Resume", "#/careers/apply"]
  ]},
  { label: "Contact", href: "#/contact" }
];


const navImages = {
 "Hyderabad":"assets/images/locations/off1.jpeg",
 "Bangalore":"assets/images/locations/off2.jpeg",
 "Malaysia":"assets/images/locations/off3.jpeg",
 "Potla CRM":"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=160&q=80",
 "HRMS":"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=160&q=80",
 "School Management System":"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=160&q=80",
 "Hospitality Management System":"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=160&q=80",
 "Bulk WhatsApp":"https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=160&q=80",
 "Live Event App":"https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=160&q=80",
 "Frameworks":"assets/images/tech/34.png",
 "Design Tools":"assets/images/tech/24.png",
 "Building Information Tools":"assets/images/tech/BIMnew.jpg",
 "Other Technologies":"assets/images/tech/AI.png",
 "Company":"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=160&q=80",
 "Team":"assets/images/team/team-potla-office.jpg",
 "Company Overview":"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=160&q=80",
 "Mission & Vision":"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=160&q=80",
 "Our Approach":"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=160&q=80",
 "Product Development":"https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=160&q=80",
 "Software Development":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=160&q=80",
 "Cloud Computing":"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=160&q=80",
 "Staff Augmentation":"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=160&q=80",
 "IT Consulting":"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=160&q=80",
 "Quality Engineering":"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=160&q=80",
 "Web Technologies":"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=160&q=80",
 "Mobile Development":"https://images.unsplash.com/photo-1511709268805-4e9042af9f23?auto=format&fit=crop&w=160&q=80",
 "Cloud & DevOps":"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=160&q=80",
 "Databases":"https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=160&q=80",
 "Testing & QA":"https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=160&q=80",
 "Healthcare":"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=160&q=80",
 "Finance":"https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=160&q=80",
 "Retail & E-commerce":"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=160&q=80",
 "Manufacturing":"https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=160&q=80",
 "Logistics":"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=160&q=80",
 "Education":"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=160&q=80",
 "Construction":"https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=160&q=80",
 "Professional Services":"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=160&q=80",
 "Life at Potla Tech":"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=160&q=80",
 "Current Openings":"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=160&q=80",
 "Submit Resume":"https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=160&q=80",
 "Blog":"https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=160&q=80",
 "Case Studies":"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=160&q=80"
};

const services = [
  { icon:"⌘", title:"Product Development", slug:"product-development", desc:"Shape an idea into a useful, scalable digital product — from discovery and experience design to engineering and launch.", points:["Product discovery & strategy","UX/UI design and prototyping","Agile product engineering","Launch and continuous improvement"] },
  { icon:"⌨", title:"Software Development", slug:"software-development", desc:"Build secure, reliable software tailored to your workflows, customers and business goals.", points:["Custom enterprise applications","Web application development","API and system integration","Application modernization"] },
  { icon:"☁", title:"Cloud Computing", slug:"cloud-computing", desc:"Modernize infrastructure and build cloud foundations that are secure, resilient and ready to scale.", points:["Cloud readiness and migration","Cloud-native architecture","DevOps and automation","Monitoring and optimization"] },
  { icon:"▣", title:"Mobile App Development", slug:"mobile-app-development", desc:"Create intuitive Android and iOS applications that keep your customers and teams connected.", points:["Android and iOS application development","Cross-platform apps with React Native and Flutter","Mobile UI/UX and prototyping","App testing, release and maintenance"] },
  { icon:"◎", title:"Staff Augmentation", slug:"staff-augmentation", desc:"Extend your team with technology professionals who can contribute to your delivery goals.", points:["Dedicated technology talent","Contract and contract-to-hire","Flexible team extensions","Recruitment coordination"] },
  { icon:"✦", title:"IT Consulting", slug:"it-consulting", desc:"Make confident technology decisions with practical guidance aligned to your business priorities.", points:["Technology strategy","Architecture assessment","Digital transformation","Process and platform advisory"] },
  { icon:"✓", title:"Quality Engineering", slug:"quality-engineering", desc:"Improve product quality and release confidence with thoughtful testing and quality practices.", points:["Functional and regression testing","Automation testing","Performance testing","Quality process improvement"] }
];

const techGroups = [
  ["Frontend & Web", "web", ["HTML5","CSS3","JavaScript","React","Angular","Bootstrap","TypeScript"]],
  ["Backend & APIs", "backend", ["Java","Spring Boot","Node.js",".NET","Python","REST APIs"]],
  ["Mobile", "mobile", ["Android","iOS","React Native","Flutter"]],
  ["Cloud & DevOps", "cloud", ["AWS","Microsoft Azure","Google Cloud","Docker","Kubernetes","CI/CD"]],
  ["Data & Databases", "databases", ["MySQL","PostgreSQL","Oracle","MongoDB","SQL Server","Redis"]],
  ["Quality & Design", "testing", ["Selenium","Cypress","JUnit","Postman","Figma","Adobe XD"]]
];

// Original Potla Tech technology logo assets bundled locally with this website.
const techLogos = {
 "HTML5":"1.png", "CSS3":"2.png", "JavaScript":"12.png", "React":"37.png", "Angular":"34.png", "Bootstrap":"MSimg15.png", "TypeScript":"18.png",
 "Java":"5.png", "Spring Boot":"MSimg6.jpg", "Node.js":"11.png", ".NET":"10.png", "Python":"9.png",
 "Android":"6.png", "iOS":"17.png", "React Native":"37.png", "Flutter":"38.png",
 "AWS":"19.png", "Microsoft Azure":"21.png", "Google Cloud":"MSimg9.png", "Docker":"MSimg1.jpg", "Kubernetes":"MSimg3.jpg",
 "MySQL":"14.png", "PostgreSQL":"4.png", "Oracle":"13.png", "MongoDB":"13.png", "SQL Server":"16.png", "Redis":"MSimg10.png",
 "Selenium":"32.png", "Cypress":"39.png", "JUnit":"18.png", "Postman":"MSimg1.jpg", "Figma":"MSimg12.png", "Adobe XD":"25.png"
};
function TechLogo({name}) {
 const logo=techLogos[name];
 return <span className="tech-logo-wrap">{logo?<img className="tech-logo" src={`assets/images/tech/${logo}`} alt={`${name} logo`} loading="lazy"/>:<span className="tech-logo-word">{name}</span>}</span>;
}

const industries = [
  ["✚","Healthcare","Digital experiences and software that help healthcare teams coordinate services and information.","assets/images/industries/industry-healthcare.jpg"],
  ["◇","Finance","Secure, dependable digital platforms and integrations for financial services.","assets/images/industries/industry-finance.jpg"],
  ["▦","Retail & E-commerce","Customer-focused commerce, inventory and operational solutions.","assets/images/industries/industry-retail.jpg"],
  ["⚙","Manufacturing","Connected systems and process improvements for modern manufacturing.","assets/images/industries/industry-manufacturing.jpg"],
  ["⇄","Logistics","Tools that improve visibility, coordination and operational efficiency.","assets/images/industries/logistics.png"],
  ["▤","Education","Accessible digital platforms that support learning and administration.","assets/images/industries/education.png"],
  ["⌂","Construction","Technology that supports project coordination and business operations.","assets/images/industries/construction.png"],
  ["✧","Professional Services","Purpose-built systems that help service teams work smarter.","assets/images/industries/professional-services.jpeg"]
];

const jobs = [
  { title:"Java Full Stack Developer", type:"Full-time", location:"Hyderabad / Hybrid", exp:"3–5 years", tag:"Engineering" },
  { title:"React Developer", type:"Full-time", location:"Hyderabad / Hybrid", exp:"2–4 years", tag:"Engineering" },
  { title:"QA Automation Engineer", type:"Full-time", location:"Hyderabad", exp:"2–5 years", tag:"Quality" },
  { title:"Cloud / DevOps Engineer", type:"Full-time", location:"Hyderabad / Hybrid", exp:"3–6 years", tag:"Cloud" }
];

const posts = [
  ["Engineering","Building software that can grow with your business","A practical look at maintainable architecture, thoughtful delivery and designing for change."],
  ["Cloud","A clearer path to cloud modernization","How to approach cloud readiness, migration priorities and long-term operations."],
  ["People","Making technology teams more adaptable","Ways to align skills, delivery needs and flexible team models."]
];

function go(to) { window.location.hash = to.replace(/^#/, ""); window.scrollTo(0,0); }
function Link({to, children, className=""}) { return <a className={className} href={to} onClick={()=>window.scrollTo(0,0)}>{children}</a>; }
function Eyebrow({children}) { return <div className="eyebrow">{children}</div>; }
function PageHero({eyebrow,title,desc}) {
 return <section className="page-hero"><div className="container position-relative"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{desc}</p><div className="breadcrumbs"><Link to="#/">Home</Link><span>/</span><span>{title.split("—")[0]}</span></div></div></section>;
}
function SectionHeading({eyebrow,title,desc}) {
 return <div className="section-heading"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{desc&&<p>{desc}</p>}</div>;
}
const serviceImages = {
 "product-development":"https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85",
 "software-development":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
 "cloud-computing":"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85",
 "mobile-app-development":"https://images.unsplash.com/photo-1511709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85",
 "staff-augmentation":"assets/images/industries/professional-services.jpeg",
 "it-consulting":"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
 "quality-engineering":"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85"
};
function ServiceCard({item}) {
 return <article className="service-card"><SafeImage className="service-card-image" src={serviceImages[item.slug]} alt={`${item.title} service`} loading="lazy"/><div className="service-card-content"><div className="service-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.desc}</p><Link to={`#/services/${item.slug}`} className="text-link">Explore service <span>↗</span></Link></div></article>;
}
function Footer() {
 return <footer className="footer reference-footer"><div className="container"><div className="row g-5 align-items-start">
  <div className="col-lg-4"><a className="brand brand-light" href="#/"><img className="brand-logo" src="assets/images/potla-tech-solutions.png" alt="Potla Tech Solutions"/></a><p className="footer-about">Empowering businesses through technology, innovation and collaborative services.</p></div>
  <div className="col-6 col-lg-2"><h5>Explore</h5><Link to="#/">Home</Link><Link to="#/about">About</Link><Link to="#/services">Services</Link><Link to="#/gallery">Gallery</Link><Link to="#/contact">Contact Us</Link></div>
  <div className="col-lg-3"><h5>Head Office Address</h5><p className="footer-address">#815, 8th floor Manjeera Majestic Commercial, JNTU, Hitech City Road KPHB, Kukatpally, Hyderabad, Telangana - 500085</p><div className="footer-locations"><span>⌖ Hyderabad</span><span>⌖ Bangalore</span><span>⌖ Malaysia</span><span>⌖ Guntur</span></div></div>
  <div className="col-lg-3"><h5>Contact</h5><a href="mailto:info@potlatechsolutions.com">Guntur · info@potlatechsolutions.com</a><a href="tel:04048569689">☎ 040-48569689</a><a href="#/locations">View our locations ↗</a></div>
 </div><div className="footer-bottom"><span>© {new Date().getFullYear()} Potla Tech Solutions. All rights reserved.</span><span>Empowering Global Services!!!</span></div></div></footer>;
}
function ContactForm() {
 const [data,setData]=useState({name:"",email:"",company:"",service:"",message:""});
 const [sent,setSent]=useState(false);
 const change=e=>setData({...data,[e.target.name]:e.target.value});
 const submit=e=>{e.preventDefault();setSent(true);};
 return <form className="form-panel" onSubmit={submit}><h3>Tell us about your requirement</h3><p className="muted">Complete the form and our team can follow up. This frontend demo does not yet save submissions.</p><div className="row g-3">
  <div className="col-md-6"><label className="form-label">Name *</label><input className="form-control" name="name" value={data.name} onChange={change} required placeholder="Your name"/></div>
  <div className="col-md-6"><label className="form-label">Email *</label><input className="form-control" type="email" name="email" value={data.email} onChange={change} required placeholder="you@company.com"/></div>
  <div className="col-md-6"><label className="form-label">Company</label><input className="form-control" name="company" value={data.company} onChange={change} placeholder="Company name"/></div>
  <div className="col-md-6"><label className="form-label">Interested in</label><select className="form-select" name="service" value={data.service} onChange={change}><option value="">Select a service</option>{services.map(s=><option key={s.slug}>{s.title}</option>)}</select></div>
  <div className="col-12"><label className="form-label">How can we help? *</label><textarea className="form-control" rows="4" name="message" value={data.message} onChange={change} required placeholder="Share a few details about your project..."/></div>
  <div className="col-12"><button className="btn-main" type="submit">Submit enquiry ↗</button>{sent&&<div className="success-note">Demo submission captured in this page state. Backend saving will be added in Phase 2.</div>}</div>
 </div></form>;
}

const referenceTechGroups = [
 ["Frameworks", [["Angular","34.png"],[".NET","10.png"],["AutoCAD","auto.png"]]],
 ["Design", [["Sketch","24.png"],["Illustrator","illustrator.svg"],["Canva","28.png"],["Adobe XD","25.png"],["After Effects","26.png"],["InVision","27.png"]]],
 ["Building Information Tool", [["AutoCAD","auto.png"],["AutoCAD Architecture","2AutoArc.png"],["AutoCAD Plant 3D","3AutoPlant.png"],["Revit","4AutoRevit.jpg"],["Recap Pro","5AutoRecap.jpg"],["BIM 360","6Auto360.jpg"],["Inventor","7AutoInve.png"],["Navisworks Manage","8AutoNavi.jpg"]]],
 ["Other Technologies", [["Photoshop","22.png"],["Blockchain","blockchain.png"],["Machine Learning","ML.png"],["Mainframe","mainframe.png"],["SAP","sap.png"],["Artificial Intelligence","AI.png"],["Dynamics 365","42.png"],["BIM","BIMnew.jpg"]]]
];

const referenceTestimonials = [
 ["Wonderful service in our website creation and digital marketing also. Mr. Srinivas Potla & team comes up with new innovations to match the client's exact requirements and gives tailor made solutions.", "Phani"],
 ["I was thoroughly impressed with Potla Group's IT services, delivering efficient, secure, and cutting-edge solutions that exceeded our business needs.", "Ravi"],
 ["I have contracted my movie promotions with Potla Tech twice (so far) and have found them to be extremely competent, dedicated, hard-working and professional.", "Veeru Potla"],
 ["Potla Tech Solutions has revolutionized our online presence with innovative digital marketing strategies, resulting in a remarkable increase in website traffic and conversions.", "K. SrinivasRao"],
 ["The team at Potla Tech Solutions is highly skilled and professional. They are up-to-date with the latest trends and technologies in the digital marketing landscape.", "Naveen Killa"],
 ["It really marks a major milestone in evolution of project, as there have been numerous key developments since the inception to finale.", "Mahathi"]
];
const partnerNames = [
 ["ATRIYA'S SANSAAR","1617863406885.jpg"],["AV Infra","309972951_141263461952997_7254441226571902452_n.jpg"],["SRI GROUP","71885_broker-sri-group-co-in-noida_300.jpg"],["DUDE","image (1).png"],["ARYAAN","image-removebg-preview (14).png"],["Sushma Dental","image.png"],["Fortune Infra","logo (2).png"],["Kondaveeti Developers","1703502453310.jpg"],["Renoves","31.01.2024_17.25.46_REC-removebg-preview.png"],["Butterfly City Vijaya","Butterfly_city_vijaya-removebg-preview.png"],["Marolix","logo (1).png"],["Sukhibhava Properties","logo-new-1024x634.png"],["Charm Remedies","logo2 (1).png"],["MotherIndia","png (3).png"],["Damari Estates","png (4).png"],["KOPS","png (5).png"],["Sharabhdi Townships","png (6).png"],["Vedanta Hospital","png (7).png"],["Smile Dental","png (8).png"],["Krishna Nursing Home","png (9).png"],["PVR Technologies","png-active.png"],["SAHA INFRA","pvrtech_dark (1).png"],["SREEMAN INFRA DEVELOPERS","Saha Infra logo (1).png"],["Stellar Consultancy","sreemanlogo.png"],["Maalavika Developers","Sri Trinethra Infra Developers Logo.png"],["Hello World Tours","stellar09.png"],["Infinity Engineers Choice","SUN-180x129.png"],["Tejwin Software","Twinix-copy.jpg"],["SL Business Solutions","webslogo-120w.webp"],["Raam Honda","WhatsApp Image 2023-12-25 at 1.08.19 PM.jpg"]
];

const galleryEvents = [
  ["14-July-2024","Proud Sponsor of TITA Bonalu Jathara 2024: Potla Group of Companies","At T-Hub, Potla Group of Companies was honored to support and celebrate the vibrant cultural heritage of Bonalu and honor Goddess Mahakali with reverence and devotion alongside our community.","assets/images/gallery/val1.jpeg"],
  ["27-June-2024","Proudly Celebrated 7 Years of Success and Growth!","A significant milestone in our journey as we proudly celebrated our 7th anniversary on 27/06/2024. It was a remarkable journey made possible by the dedication of our team, clients and community.","assets/images/gallery/val2.jpeg"],
  ["27-April-2023","Srinu Potla, CEO & Founder, was honored with the Young Entrepreneur Award in 2023.","Srinu Potla was honored with the prestigious Young Entrepreneur Award during the Vande Bharat event held on 27 April 2023, recognizing his achievements and contributions.","assets/images/gallery/val3.jpeg"],
  ["19-Sep-2022","We Sponsored the Pride of Hyderabad Business Awards 2022","We were proud to sponsor the Pride of Hyderabad Business Awards, celebrating the outstanding achievements of Hyderabad's business community.","assets/images/gallery/val4.jpeg"],
  ["23-July-2024","Mr. and Mrs. Fashion Gala, associate sponsored by Potla Group of Companies, was a resounding success!","A celebration of creativity and community, bringing together talented participants and partners. Potla Group of Companies was pleased to support the event.","assets/images/gallery/val5.jpeg"],
  ["25-Oct-2024","Srinu Potla, CEO and Founder, graced the opening ceremony of the Oorvasivo movie","Srinu Potla, CEO and Founder of Potla Group of Companies, joined the opening ceremony and celebrated the occasion with the event team.","assets/images/gallery/val6.jpeg"]
];

function ReferenceSections(){
 const [testimonialIndex,setTestimonialIndex]=useState(0);
 const visibleTestimonials=[referenceTestimonials[testimonialIndex%referenceTestimonials.length],referenceTestimonials[(testimonialIndex+1)%referenceTestimonials.length]];
 const insightCards=galleryEvents;
 return <>
  <section className="reference-tech section"><div className="container">{referenceTechGroups.map((group,idx)=><div className="reference-tech-group" key={group[0]}><SectionHeading eyebrow={`Our expertise · 0${idx+1}`} title={group[0]}/><div className="reference-tech-grid">{group[1].map(([name,logo],i)=><div className="reference-tech-card" key={`${name}-${i}`}><div className="reference-tech-image"><img src={`assets/images/tech/${logo}`} alt={`${name} logo`} loading="lazy"/></div><strong>{name}</strong></div>)}</div></div>)}</div></section>
  <section className="reference-testimonials section"><div className="container"><div className="text-center"><Eyebrow>Testimonials</Eyebrow><h2 className="section-title">What Our Clients are Saying?</h2><p className="section-copy mx-auto">At Potla Tech Solutions, we take pride in delivering outstanding service and results that consistently exceed client expectations. Explore what our clients say about working with us.</p></div><div className="testimonial-controls"><button type="button" aria-label="Previous testimonials" onClick={()=>setTestimonialIndex((testimonialIndex+referenceTestimonials.length-1)%referenceTestimonials.length)}>‹</button><button type="button" aria-label="Next testimonials" onClick={()=>setTestimonialIndex((testimonialIndex+1)%referenceTestimonials.length)}>›</button></div><div className="row g-4">{visibleTestimonials.map((t,i)=><div className="col-lg-6" key={`${t[1]}-${testimonialIndex}`}><article className="testimonial-card"><div className="quote-mark">“</div><p>{t[0]}</p><div className="testimonial-person"><span>{t[1].slice(0,1)}</span><strong>{t[1]}</strong></div></article></div>)}</div><div className="testimonial-dots">{referenceTestimonials.map((t,i)=><button key={t[1]} aria-label={`Show testimonial ${i+1}`} className={i===testimonialIndex?"active":""} onClick={()=>setTestimonialIndex(i)} />)}</div></div></section>
  <section className="reference-partners section"><div className="container"><SectionHeading eyebrow="Our partners" title="Trusted relationships. Shared success." desc="We are proud to work alongside businesses and organizations across industries."/><div className="partner-grid">{partnerNames.map(([name,logo])=><div className="partner-card" key={name}><div className="partner-logo-frame"><img src={`assets/images/partners/${logo}`} alt={`${name} logo`} loading="lazy"/></div><strong>{name}</strong></div>)}</div></div></section>
  <section className="reference-connect section"><div className="container"><div className="connect-panel"><div className="collaboration-art"><div className="collab-center">COLLABORATION</div>{["Teamwork","Trust","Inspiration","Exchange","Assist","Support","Success","Share"].map((x,i)=><span className={`collab-word collab-${i}`} key={x}>{x}</span>)}</div><div className="connect-copy"><Eyebrow>Let's connect</Eyebrow><h2>Would you like to connect with us?</h2><p>Let's discuss your goals and explore how we can work together.</p><Link to="#/contact" className="btn-main">▣ Let's Connect</Link></div></div></div></section>
  <section className="reference-insights section"><div className="container"><SectionHeading eyebrow="Latest updates" title="Latest Valuable Insights" desc="News, milestones and moments from the Potla Group of Companies."/><div className="row g-4">{insightCards.map((card,i)=><div className="col-md-6 col-lg-4" key={card[1]}><article className="reference-insight-card"><SafeImage src={card[3]} alt={card[1]} loading="lazy"/><div className="reference-insight-body"><small>▢ {card[0]}</small><h3>{card[1]}</h3><p>{card[2]}</p></div></article></div>)}</div><div className="text-center mt-5"><Link to="#/insights" className="btn-outline">Explore more insights ↗</Link></div></div></section>
 </>;
}


function GalleryPage(){
 return <>
  <PageHero eyebrow="Moments at Potla" title="Our Gallery" desc="A look back at the people, milestones and celebrations that are part of the Potla journey."/>
  <section className="section gallery-page-section">
   <div className="container">
    <SectionHeading eyebrow="Events & milestones" title="Celebrating our journey together" desc="Real moments from our events, achievements and community celebrations."/>
    <div className="row g-4">
     {galleryEvents.map((event,i)=><div className="col-md-6 col-lg-4" key={event[1]}>
      <article className="reference-insight-card gallery-event-card">
       <SafeImage src={event[3]} alt={event[1]} loading="lazy"/>
       <div className="reference-insight-body">
        <small>▢ {event[0]}</small>
        <h3>{event[1]}</h3>
        <p>{event[2]}</p>
       </div>
      </article>
     </div>)}
    </div>
   </div>
  </section>
 </>;
}

const potlaProducts = [
 {slug:"potla-crm",name:"Potla CRM",icon:"◈",desc:"Organize customer relationships, sales activities and follow-ups in one connected workspace.",detail:"A customer relationship platform designed to help teams manage leads, customer conversations, sales pipelines and follow-up activities."},
 {slug:"hrms",name:"HRMS",icon:"♙",desc:"Bring employee information, attendance and HR workflows together.",detail:"A human resource management solution for maintaining employee records and supporting everyday HR operations, attendance and leave workflows."},
 {slug:"school-management-system",name:"School Management System",icon:"▤",desc:"Simplify day-to-day school administration, academic records and communication.",detail:"A school administration platform that helps coordinate student information, academic activities, staff workflows and parent communication."},
 {slug:"hospitality-management-system",name:"Hospitality Management System",icon:"⌂",desc:"Coordinate hospitality operations, guest information and service workflows.",detail:"A hospitality operations solution to support guest handling, reservations and the daily workflows of hospitality teams."},
 {slug:"bulk-whatsapp",name:"Bulk WhatsApp",icon:"◉",desc:"Manage business messaging and customer updates through WhatsApp workflows.",detail:"A business messaging solution for organizing customer notifications, campaign communication and follow-up workflows through WhatsApp."},
 {slug:"live-event-app",name:"Live Event App",icon:"▣",desc:"Support event registrations, attendee engagement and live event information.",detail:"An event companion platform for registrations, schedules, attendee information and event-day updates."}
];
function ProductCatalog({category}) {
 const selected=potlaProducts.find(p=>p.slug===category);
 return <><PageHero eyebrow="Our products & solutions" title={selected?selected.name:"Our Products"} desc={selected?selected.detail:"Explore the software products built to simplify operations, improve efficiency and support better experiences."}/>
 <section className="section"><div className="container">
 {selected ? <div className="product-detail-panel"><div className="product-detail-icon">{selected.icon}</div><div><Eyebrow>Potla Tech product</Eyebrow><h2 className="section-title">{selected.name}</h2><p className="section-copy">{selected.detail}</p><p className="section-copy">Contact our team to learn more about features, implementation and a solution aligned with your organization.</p><Link to="#/contact" className="btn-main">Enquire about {selected.name} ↗</Link></div></div>
 : <><SectionHeading eyebrow="Potla Tech product portfolio" title="Solutions for everyday business needs" desc="Choose a product to explore. Our team can help you understand the right fit for your organization."/><div className="row g-4">{potlaProducts.map((p,i)=><div className="col-md-6 col-lg-4" key={p.slug}><article className="potla-product-card"><div className="potla-product-icon">{p.icon}</div><span className="product-number">0{i+1}</span><h3>{p.name}</h3><p>{p.desc}</p><Link to={`#/products/${p.slug}`} className="text-link">Explore product ↗</Link></article></div>)}</div></>}
 <div className="text-center mt-5"><Link to="#/contact" className="btn-main">Talk to our team ↗</Link></div>
 </div></section></>;
}
function LocationsPage(){
 const locations=[["Hyderabad","#815, 8th floor Manjeera Majestic Commercial, JNTU, Hitech City Road KPHB, Kukatpally, Hyderabad, Telangana - 500085"],["Bangalore","Connect with our team for Bangalore enquiries."],["Malaysia","Connect with our team for Malaysia enquiries."]];
 return <><PageHero eyebrow="Our locations" title="Connect with Potla Tech Solutions" desc="Our teams and business relationships connect customers across locations."/><section className="section"><div className="container"><div className="row g-4">{locations.map((item,i)=><div className="col-md-6 col-lg-3" key={item[0]}><article className="location-card"><span>⌖</span><h3>{item[0]}</h3><p>{item[1]}</p><Link to="#/contact" className="text-link">Contact us ↗</Link></article></div>)}</div></div></section></>;
}

function Home() {
 return <>
  <header className="hero"><div className="container"><div className="row align-items-center"><div className="col-lg-7 hero-copy"><div className="hero-kicker">Technology that moves business forward</div><h1>Build smarter.<br/><span>Move faster.</span><br/>Grow further.</h1><p>We help ambitious businesses turn complex challenges into practical digital solutions — through software engineering, cloud services and technology talent.</p><div className="d-flex flex-wrap gap-3"><Link to="#/contact" className="btn-main">Start a conversation ↗</Link><Link to="#/services" className="btn-ghost">Explore our services</Link></div><div className="hero-points"><span>✓ Business-first thinking</span><span>✓ Engineering excellence</span><span>✓ Long-term partnership</span></div></div><div className="col-lg-5"><div className="hero-art"><div className="orbit orbit-a"></div><div className="orbit orbit-b"></div><div className="core-glow"></div><div className="hero-float float-top"><b>Ideas → Impact</b><small>From concept to scale</small></div><div className="hero-float float-bottom"><b>Digital, reimagined</b><small>Technology with purpose</small></div></div></div></div></div></header>
  <section className="trust-row"><div className="container d-flex flex-wrap justify-content-between align-items-center gap-3"><span>Technology for every ambition</span><b>STARTUPS</b><b>SMBs</b><b>ENTERPRISE</b><b>GLOBAL TEAMS</b></div></section>
  <section className="section"><div className="container"><div className="row align-items-center g-5"><div className="col-lg-6"><div className="about-visual"><div className="about-stamp"><strong>People</strong><span>·</span><strong>Process</strong><span>·</span><strong>Technology</strong></div></div></div><div className="col-lg-6"><Eyebrow>Who we are</Eyebrow><h2 className="section-title">A technology partner focused on what comes next.</h2><p className="section-copy">We bring together business understanding, engineering capability and collaborative delivery to help organizations build, modernize and support digital solutions.</p><p className="section-copy">Our approach is grounded in clear communication, thoughtful execution and a commitment to long-term value.</p><Link to="#/about" className="text-link">Discover Potla Tech <span>↗</span></Link></div></div></div></section>
  <section className="section section-soft"><div className="container"><SectionHeading eyebrow="What we do" title="Capabilities for your next opportunity" desc="From early-stage product thinking to enterprise delivery and talent needs, bring the right expertise together."/><div className="row g-4">{services.slice(0,3).map(s=><div className="col-md-6 col-lg-4" key={s.slug}><ServiceCard item={s}/></div>)}</div><div className="text-center mt-4"><Link to="#/services" className="btn-outline">View all services ↗</Link></div></div></section>
  <section className="section"><div className="container"><div className="row align-items-end mb-4"><div className="col-lg-7"><Eyebrow>Technology expertise</Eyebrow><h2 className="section-title">A modern toolkit. Applied thoughtfully.</h2></div><div className="col-lg-5"><p className="section-copy">We choose technologies to fit the challenge, your environment and your long-term roadmap.</p></div></div><div className="tech-cloud">{techGroups.flatMap(g=>g[1]).slice(0,18).map(t=><span className="tech-chip" key={t}>{t}</span>)}</div><div className="home-tech-showcase">{["Java","Spring Boot","React","Python","Node.js","MySQL","PostgreSQL","AWS","Docker","Kubernetes","Flutter","Angular"].map(t=><div className="home-tech-logo-card" key={t}><TechLogo name={t}/><span>{t}</span></div>)}</div><div className="mt-4"><Link to="#/technologies" className="text-link">Explore technologies <span>↗</span></Link></div></div></section>
  <section className="section section-dark"><div className="container"><SectionHeading eyebrow="Industries we support" title="Solutions shaped around your world" desc="We take time to understand the context, customers and operational needs behind every project."/><div className="row g-3">{industries.slice(0,4).map(i=><div className="col-6 col-lg-3" key={i[1]}><div className="industry-tile" style={{"--industry-image":`url(${i[3]})`}}><span>{i[0]}</span><b>{i[1]}</b></div></div>)}</div><div className="mt-4"><Link to="#/industries" className="link-light fw-bold">Explore industries ↗</Link></div></div></section>
  <section className="section"><div className="container"><div className="cta-panel"><div><Eyebrow>Let's work together</Eyebrow><h2>Have a challenge worth solving?</h2><p>Let's talk about the outcome you're aiming for and how technology can help.</p></div><Link to="#/contact" className="btn-main">Talk to our team ↗</Link></div></div></section>
  <ReferenceSections/>
 </>;
}


function TeamPage(){
 const [tab,setTab]=useState("management");
 const teamPhotos=[
  {src:"assets/images/team/team-potla-celebration.jpg",alt:"Potla team celebrating together",caption:"Celebrating together"},
  {src:"assets/images/team/team-potla-office.jpg",alt:"Potla team at the office",caption:"Our people, our strength"}
 ];
 return <>
  <PageHero eyebrow="People behind Potla" title="Meet the Potla Team" desc="The people, leadership and shared commitment behind Potla Tech Solutions."/>
  <section className="section team-page-section">
   <div className="container">
    <div className="team-tabs" role="tablist" aria-label="Team sections">
     <button type="button" role="tab" aria-selected={tab==="management"} className={tab==="management"?"active":""} onClick={()=>setTab("management")}>Management</button>
     <button type="button" role="tab" aria-selected={tab==="team"} className={tab==="team"?"active":""} onClick={()=>setTab("team")}>Team Potla</button>
    </div>
    {tab==="management"?<>
     <SectionHeading eyebrow="Leadership" title="About Chairman & CEO" desc="Meet the leadership guiding Potla Group of Companies and Potla Tech Solutions."/>
     <div className="leadership-grid">
      <article className="leader-card">
       <div className="leader-photo"><SafeImage src="assets/images/team/rajeshwari-potla-chairperson.jpg" alt="Rajeshwari Potla"/></div>
       <div className="leader-copy"><span className="leader-role">Chairperson</span><h3>Rajeshwari Potla</h3>
        <p>Founder of Potla Group of Companies, known for her commitment to quality, trust and values towards clients. Her vision emphasizes creating employment opportunities for young people and encouraging creative thinking.</p>
       </div>
      </article>
      <article className="leader-card leader-card-reverse">
       <div className="leader-photo"><SafeImage src="assets/images/team/srinu-potla-founder-ceo.jpg" alt="Srinu Potla, Founder and CEO"/></div>
       <div className="leader-copy"><span className="leader-role">Founder & CEO</span><h3>Srinu Potla, M.Pharm (PhD)</h3>
        <p>A dynamic, self-motivated professional with experience across IT/ITES, digital marketing, recruitment and staffing, corporate training and telecom services. He leads teams across IT and non-IT divisions and works to support clients' technology requirements.</p>
       </div>
      </article>
     </div>
    </>:<>
     <SectionHeading eyebrow="Team Potla" title="People make the difference" desc="A look at the people and moments that make up the Potla team."/>
     <div className="team-photo-grid">{teamPhotos.map((photo,i)=><figure className="team-photo-card" key={photo.src}><SafeImage src={photo.src} alt={photo.alt} loading="lazy"/><figcaption>{photo.caption}</figcaption></figure>)}</div>
    </>}
   </div>
  </section>
 </>;
}

function About({sub}) {
 const title = sub==="mission"?"Mission & Vision":sub==="approach"?"Our Approach":"About Potla Tech Solutions";
 const milestones = [
  {year:"2017 – Present",name:"Potla Telecom",copy:"Potla Telecom was established in 2017, building relationships and supporting connectivity and customer-focused services.",image:"assets/images/gallery/val1.jpeg"},
  {year:"2018 – Present",name:"Potla Tech Solutions",copy:"Potla Tech Solutions brings together IT, telecom and consulting capabilities to deliver practical technology solutions for client needs.",image:"assets/images/team/team-potla-office.jpg"},
  {year:"2018 – Present",name:"Potla Consulting",copy:"Potla Consulting supports organizations with staffing, recruitment and professional talent solutions across Telangana and Andhra Pradesh.",image:"assets/images/gallery/val5.jpeg"},
  {year:"2019 – Present",name:"Telugu Web Media",copy:"Telugu Web Media began as a Hyderabad-based web news portal and expanded its coverage across film, local and general news.",image:"assets/images/gallery/val4.jpeg"},
  {year:"2022 – Present",name:"Potla Developers",copy:"Potla Developers works to guide customers through real-estate opportunities and help turn property aspirations into reality.",image:"assets/images/gallery/val6.jpeg"}
 ];
 return <>
  <PageHero eyebrow="Get to know us" title={title} desc="A collaborative technology partner helping businesses turn ideas and challenges into meaningful outcomes."/>
  <section className="section company-overview-section">
   <div className="container">
    <div className="row align-items-center g-5 company-intro">
     <div className="col-lg-6">
      <Eyebrow>Company overview</Eyebrow>
      <h2 className="section-title">Growth through technology. Empowering your business with innovative solutions.</h2>
      <p className="section-copy">Potla Tech Solutions is a technology services company focused on software development, cloud computing, consulting and technology talent. With an experienced team and an emphasis on innovation, we work to understand each client's needs and deliver solutions that create lasting value.</p>
      <p className="section-copy">From software development to cloud services, our goal is to help organizations move forward with dependable service, quality and practical technology.</p>
     </div>
     <div className="col-lg-6">
      <div className="company-visual-card">
       <SafeImage src="assets/images/about-team.jpg" alt="Technology and business workspace" />
       <div className="company-visual-caption"><span>Potla Tech Solutions</span><strong>Ideas into impact</strong></div>
      </div>
     </div>
    </div>
    <div className="company-stats-grid">
     {[["8+","Years of experience"],["150+","Finished projects"],["150+","Customers"],["30+","Technologies"]].map(([number,label])=><div className="company-stat" key={label}><strong>{number}</strong><span>{label}</span></div>)}
    </div>
    <div className="row align-items-center g-5 company-certification">
     <div className="col-lg-6">
      <Eyebrow>Quality & excellence</Eyebrow>
      <h2 className="section-title">A commitment to quality and information security.</h2>
      <p className="section-copy">Potla Tech Solutions is proud to share its ISO certification milestone, reflecting a continued commitment to quality, consistency and responsible information security practices.</p>
     </div>
     <div className="col-lg-6"><div className="company-certification-image"><SafeImage src="assets/images/about-team.jpeg" alt="Potla Tech Solutions ISO certification announcement"/></div></div>
    </div>
   </div>
  </section>
  <section className="section section-soft company-pillars-section">
   <div className="container">
    <div className="company-pillars-grid">
     <article><Eyebrow>Our history</Eyebrow><h2>Built through a journey of growth</h2><p>Potla Group of Companies has grown through multiple service areas, with a focus on creating opportunities, building relationships and supporting customers.</p><ul className="company-check-list"><li>Established Potla Telecom in 2017</li><li>Established Potla Tech Solutions in 2018</li><li>Established Potla Consulting in 2018</li><li>Established Telugu Web Media in 2019</li><li>Established Potla Developers in 2022</li></ul></article>
     <article><Eyebrow>Our mission</Eyebrow><h2>Deliver meaningful value</h2><p>Our goal is to bring clients outstanding value through creative solutions that go beyond expectations. We use relevant technologies, sound practices and continuous improvement to support their goals.</p><div className="company-keywords"><span>Collaboration</span><span>Innovation</span><span>Excellence</span><span>Partnership</span></div></article>
     <article><Eyebrow>Who we are</Eyebrow><h2>A people-first technology team</h2><p>We are a Hyderabad-based technology services team committed to supporting organizations with practical, modern solutions. We focus on understanding client needs, delivering quality and helping businesses stay ready for what comes next.</p><div className="company-keywords"><span>Customer focus</span><span>Technology</span><span>Quality</span><span>Continuous learning</span></div></article>
    </div>
   </div>
  </section>
  <section className="section company-history-section">
   <div className="container">
    <SectionHeading eyebrow="Our history" title="A journey shaped by people and ideas" desc="Explore the milestones and businesses that have contributed to the Potla Group journey."/>
    <div className="company-timeline">
     {milestones.map((item,i)=><article className={`company-timeline-item ${i%2?"reverse":""}`} key={item.name}>
      <div className="company-timeline-year">{item.year}</div>
      <div className="company-timeline-card">
       <div className="company-timeline-copy"><span>0{i+1} / Milestone</span><h3>{item.name}</h3><p>{item.copy}</p></div>
       <SafeImage src={item.image} alt={`${item.name} milestone`} loading="lazy"/>
      </div>
     </article>)}
    </div>
   </div>
  </section>
 </>;
}
function Services({slug}) {
 const item=services.find(s=>s.slug===slug);
 if(item) return <><PageHero eyebrow="Our services" title={item.title} desc={item.desc}/><section className="section"><div className="container"><div className="row g-5"><div className="col-lg-7"><Eyebrow>How we can help</Eyebrow><h2 className="section-title">Expertise aligned to your goals.</h2><p className="section-copy">{item.desc} We work with your stakeholders to define scope, agree delivery priorities and create a practical path forward.</p><h3 className="mt-5 mb-3">Service capabilities</h3><ul className="check-list">{item.points.map(p=><li key={p}>✓ <span>{p}</span></li>)}</ul></div><div className="col-lg-5"><div className="side-panel"><h3>Let's discuss your requirement</h3><p>Tell us what you are trying to achieve. We can explore the right engagement model together.</p><Link to="#/contact" className="btn-main">Contact our team ↗</Link></div></div></div></div></section><section className="section section-soft"><div className="container"><SectionHeading eyebrow="More capabilities" title="Explore our other services"/><div className="row g-4">{services.filter(s=>s.slug!==slug).slice(0,3).map(s=><div className="col-md-4" key={s.slug}><ServiceCard item={s}/></div>)}</div></div></section></>;
 return <><PageHero eyebrow="What we do" title="Services" desc="Flexible technology services that help you plan, build, modernize and scale."/><section className="section"><div className="container"><div className="row g-4">{services.map(s=><div className="col-md-6 col-lg-4" key={s.slug}><ServiceCard item={s}/></div>)}</div></div></section></>;
}
function Technologies({slug}) {
 const categoryMap = {
  web: ["web"], mobile: ["mobile"], cloud: ["cloud"], databases: ["databases"],
  testing: ["testing"], backend: ["backend"]
 };
 const selected = categoryMap[slug] ? techGroups.filter(g=>categoryMap[slug].includes(g[1])) : techGroups;
 const titles = {web:"Web Technologies",mobile:"Mobile Development",cloud:"Cloud & DevOps",databases:"Databases",testing:"Testing & QA",backend:"Backend Technologies"};
 const pageTitle = titles[slug] || "Technologies";
 return <><PageHero eyebrow="Technology expertise" title={pageTitle} desc="Explore the platforms, languages and tools we work with to design, build, integrate and support digital solutions."/>
 <section className="section"><div className="container">
  <div className="tech-intro"><div><Eyebrow>Our technology toolkit</Eyebrow><h2 className="section-title">The right tools for the right challenge.</h2><p className="section-copy">Technology choices are guided by your product goals, existing systems, team capabilities and long-term roadmap.</p></div><div className="tech-intro-mark">{"</>"}</div></div>
  {selected.map(g=><div className="tech-group" key={g[1]}><div><SafeImage className="tech-group-image" src={({web:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=82",backend:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=82",mobile:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9?auto=format&fit=crop&w=700&q=82",cloud:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=82",databases:"https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=700&q=82",testing:"https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=700&q=82"})[g[1]]} alt={`${g[0]} technology`} loading="lazy"/><h2>{g[0]}</h2><p>Tools and platforms selected to fit the needs of each engagement.</p></div><div className="tech-logo-grid">{g[2].map(t=><div className="tech-logo-card" key={t}><TechLogo name={t}/><span>{t}</span></div>)}</div></div>)}
  {slug && <div className="text-center mt-5"><a className="btn-outline" href="#/technologies">View all technologies ↗</a></div>}
 </div></section></>;
}
function Industries({slug}){
 const slugs={"healthcare":"Healthcare","finance":"Finance","retail":"Retail & E-commerce","manufacturing":"Manufacturing","logistics":"Logistics","education":"Education","construction":"Construction","professional-services":"Professional Services"};
 const selected=industries.find(i=>i[1]===slugs[slug]);
 const slugFor=name=>({"Healthcare":"healthcare","Finance":"finance","Retail & E-commerce":"retail","Manufacturing":"manufacturing","Logistics":"logistics","Education":"education","Construction":"construction","Professional Services":"professional-services"})[name];
 if(selected) return <><PageHero eyebrow="Industry solutions" title={selected[1]} desc={selected[2]}/><section className="section"><div className="container"><div className="row align-items-center g-5"><div className="col-lg-6"><SafeImage className="industry-detail-image" src={selected[3]} alt={`${selected[1]} solutions`} /><div className="industry-detail-caption">Technology shaped around your industry</div></div><div className="col-lg-6"><Eyebrow>Industry expertise</Eyebrow><h2 className="section-title">Technology that understands your business.</h2><p className="section-copy">{selected[2]} We bring together software engineering, integration and practical consulting to support your operational priorities.</p><ul className="check-list"><li>✓ <span>Digital platforms tailored to your workflows</span></li><li>✓ <span>Secure integrations and reliable data flows</span></li><li>✓ <span>Scalable solutions that can evolve with your needs</span></li><li>✓ <span>Collaborative delivery and ongoing improvement</span></li></ul><Link to="#/contact" className="btn-main">Discuss your requirement ↗</Link></div></div><div className="mt-5"><SectionHeading eyebrow="Explore more" title="Other industries we support"/><div className="row g-4">{industries.filter(i=>i[1]!==selected[1]).slice(0,4).map(i=><div className="col-md-6 col-lg-3" key={i[1]}><article className="industry-card"><SafeImage className="industry-card-image" src={i[3]} alt={`${i[1]} industry`} loading="lazy"/><div className="industry-card-body"><h3>{i[1]}</h3><Link to={`#/industries/${slugFor(i[1])}`} className="text-link">Explore industry ↗</Link></div></article></div>)}</div></div></div></section></>;
 return <><PageHero eyebrow="Industry knowledge" title="Industries" desc="Technology solutions shaped around the people, processes and priorities in your industry."/><section className="section"><div className="container"><div className="row g-4">{industries.map(i=><div className="col-md-6 col-lg-3" key={i[1]}><article className="industry-card"><SafeImage className="industry-card-image" src={i[3]} alt={`${i[1]} industry`} loading="lazy"/><div className="industry-card-body"><span>{i[0]}</span><h3>{i[1]}</h3><p>{i[2]}</p><Link to={`#/industries/${slugFor(i[1])}`} className="text-link">Explore solutions ↗</Link></div></article></div>)}</div></div></section></>;
}
function Careers({apply}){return <><PageHero eyebrow="Careers" title={apply?"Submit your resume":"Grow with us"} desc="Explore opportunities to work on meaningful technology challenges with collaborative teams."/><section className="section"><div className="container"><div className="row g-5"><div className="col-lg-5"><Eyebrow>People & opportunity</Eyebrow><h2 className="section-title">Bring your curiosity. Build what's next.</h2><p className="section-copy">We value learning, collaboration and a practical approach to solving problems. Explore the current opportunities or share your profile for future consideration.</p><Link to="#/jobs" className="btn-main mt-3 d-inline-block">View open positions ↗</Link></div><div className="col-lg-7"><div className="side-panel"><h3>{apply?"Share your profile":"Interested in joining us?"}</h3><p>Use the application form to prepare your details. Resume upload and secure submission will be connected to the backend in Phase 2.</p><ApplicationForm/></div></div></div></div></section></>}
function ApplicationForm(){
 const [done,setDone]=useState(false);
 const [resume,setResume]=useState(null);
 const [fileError,setFileError]=useState("");
 const handleFile=e=>{
  const input=e.currentTarget;
  const file=input.files?.[0];
  setDone(false);
  setFileError("");
  setResume(null);
  if(!file) return;

  // Validate size first so oversized files always receive the size-specific message.
  const maxBytes=5*1024*1024;
  if(file.size>maxBytes){
   setFileError("File too large. Please upload a resume that is 5 MB or smaller.");
   input.value="";
   return;
  }

  // Use the file extension as the reliable browser-side format check.
  // MIME values vary between browsers and operating systems.
  const extension=file.name.split(".").pop().toLowerCase();
  if(!["pdf","doc","docx"].includes(extension)){
   setFileError("Unsupported file type. Please choose a PDF, DOC or DOCX resume.");
   input.value="";
   return;
  }
  setResume(file);
 };
 const handleSubmit=e=>{
  e.preventDefault();
  if(!resume){
   setFileError("Please select a valid PDF, DOC or DOCX resume (maximum 5 MB).");
   return;
  }
  setDone(true);
 };
 return <form onSubmit={handleSubmit} className="row g-3">
  <div className="col-md-6"><label className="form-label">Full name *</label><input className="form-control" required placeholder="Your name"/></div>
  <div className="col-md-6"><label className="form-label">Email *</label><input className="form-control" type="email" required placeholder="you@email.com"/></div>
  <div className="col-12"><label className="form-label">Role of interest</label><input className="form-control" placeholder="e.g. Java Developer"/></div>
  <div className="col-12"><label className="form-label">LinkedIn / Portfolio URL</label><input className="form-control" type="url" placeholder="https://"/></div>
  <div className="col-12">
   <label className="form-label" htmlFor="resume-upload">Upload resume *</label>
   <div className="resume-upload-box">
    <input id="resume-upload" className="form-control" type="file" accept=".pdf,.doc,.docx" onChange={handleFile} required/>
    <div className="resume-help">Accepted formats: PDF, DOC, DOCX · Maximum size: 5 MB</div>
    {resume&&<div className="resume-selected">✓ Selected: {resume.name} ({(resume.size/1024/1024).toFixed(2)} MB)</div>}
    {fileError&&<div className="resume-error" role="alert">{fileError}</div>}
   </div>
  </div>
  <div className="col-12"><label className="form-label">Brief introduction</label><textarea className="form-control" rows="3" placeholder="Tell us about your experience"/></div>
  <div className="col-12"><button className="btn-main" type="submit">Submit profile ↗</button>{done&&<div className="success-note">Demo form validated and resume selected. The file is not uploaded or saved yet; secure server upload will be connected in Phase 2.</div>}</div>
 </form>;
}
function Jobs(){return <><PageHero eyebrow="Careers" title="Current opportunities" desc="Find a role where your skills and ideas can make a difference. These are sample frontend listings for layout demonstration."/><section className="section"><div className="container"><div className="row g-4">{jobs.map(j=><div className="col-lg-6" key={j.title}><div className="job-card"><div className="d-flex justify-content-between gap-3"><span className="job-tag">{j.tag}</span><span className="muted small">{j.type}</span></div><h3>{j.title}</h3><div className="job-meta"><span>⌖ {j.location}</span><span>◷ {j.exp}</span></div><Link to="#/careers/apply" className="text-link">Apply for this role ↗</Link></div></div>)}</div><p className="muted mt-4 small">Note: Sample listings only. Confirm actual vacancies with the company before publishing.</p></div></section></>}
function Insights({cases}){return <><PageHero eyebrow="Ideas & perspectives" title={cases?"Case studies":"Insights"} desc={cases?"Illustrative project stories showing how technology can address business challenges.":"Perspectives on software, cloud, technology teams and digital transformation."}/><section className="section"><div className="container"><div className="row g-4">{(cases?[["Digital transformation","Modernizing a business workflow","A sample case-study layout. Replace with an approved client story and measurable outcomes."],["Cloud adoption","Building a scalable cloud foundation","A sample case-study layout. Add the actual challenge, approach and results."]]:posts).map((p,i)=><div className="col-md-6 col-lg-4" key={p[1]}><article className="post-card"><div className="post-art" style={{backgroundImage:`linear-gradient(0deg,#071a3580,#071a3510),url(${cases?["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85","https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85"][i]:["https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85","https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85","assets/images/industries/professional-services.jpeg"][i]})`}}><span>{cases?"CASE STUDY":"INSIGHT"}</span></div><div className="post-body"><small>{p[0]}</small><h3>{p[1]}</h3><p>{p[2]}</p><span className="muted small">Content preview · 4 min read</span></div></article></div>)}</div><p className="muted small mt-4">Editorial previews are placeholders, not published customer claims.</p></div></section></>}
function Contact(){return <><PageHero eyebrow="Contact" title="Let's start a conversation" desc="Tell us about your business goals, project needs or technology challenges."/><section className="section"><div className="container"><div className="row g-5"><div className="col-lg-5"><Eyebrow>Talk to our team</Eyebrow><h2 className="section-title">We'd like to hear from you.</h2><p className="section-copy">Share your requirement and we'll identify the best way to take the conversation forward.</p><div className="contact-detail"><b>Email</b><a href="mailto:info@potlatechsolutions.com">info@potlatechsolutions.com</a></div><div className="contact-detail"><b>Phone</b><a href="tel:+914035699217">+91 40 3569 9217</a></div><div className="contact-detail"><b>Office</b><span>Hyderabad, Telangana, India</span></div><p className="small muted mt-3">Please verify the company's official contact details before production launch.</p></div><div className="col-lg-7"><ContactForm/></div></div></div></section></>}
function NotFound(){return <PageHero eyebrow="Page not found" title="Let's get you back on track" desc="The page you're looking for may have moved or is not available yet."/>}

function App(){
 const [route,setRoute]=useState(window.location.hash||"#/");
 const [mobile,setMobile]=useState(false);
 const [open,setOpen]=useState("");
 useEffect(()=>{const update=()=>{setRoute(window.location.hash||"#/");setMobile(false);setOpen("");window.scrollTo(0,0)};window.addEventListener("hashchange",update);return()=>window.removeEventListener("hashchange",update)},[]);
 const path=route.replace(/^#/, "").replace(/\/$/,"")||"/";
 let page;
 if(path==="/")page=<Home/>;
 else if(path==="/about/team")page=<TeamPage/>;
 else if(path==="/about"||path.startsWith("/about/"))page=<About sub={path.split("/")[2]}/>;
 else if(path==="/services"||path.startsWith("/services/"))page=<Services slug={path.split("/")[2]}/>;
 else if(path==="/technologies"||path.startsWith("/technologies/"))page=<Technologies slug={path.split("/")[2]}/>;
 else if(path==="/products"||path.startsWith("/products/"))page=<ProductCatalog category={path.split("/")[2]}/>;
 else if(path==="/gallery")page=<GalleryPage/>;
 else if(path==="/locations")page=<LocationsPage/>;
 else if(path==="/industries"||path.startsWith("/industries/"))page=<Industries slug={path.split("/")[2]}/>;
 else if(path==="/careers"||path==="/careers/apply")page=<Careers apply={path.endsWith("apply")}/>;
 else if(path==="/jobs")page=<Jobs/>;
 else if(path==="/insights")page=<Insights/>;
 else if(path==="/case-studies")page=<Insights cases/>;
 else if(path==="/contact")page=<Contact/>;
 else page=<NotFound/>;
 return <>
  <nav className="navbar navbar-expand-xl fixed-top"><div className="container">
   <a className="brand" href="#/" onClick={()=>window.scrollTo(0,0)}><img className="brand-logo" src="assets/images/potla-tech-solutions.png" alt="Potla Tech Solutions"/></a>
   <button className="mobile-toggle" onClick={()=>setMobile(!mobile)} aria-label="Toggle navigation"><span></span><span></span><span></span></button>
   <div className={`nav-area ${mobile?"nav-open":""}`}><ul className="main-nav">{NAV.map(n=><li className={`nav-item ${n.children?"has-menu":""}`} key={n.label} onMouseEnter={()=>setOpen(n.label)} onMouseLeave={()=>setOpen("")}><a href={n.href} className="nav-link" onClick={()=>{if(n.children&&window.innerWidth<1200){setOpen(open===n.label?"":n.label)}else setMobile(false)}}>{n.label}{n.children&&<span className="chevron">⌄</span>}</a>{n.children&&<div className={`dropdown-panel ${open===n.label?"dropdown-show":""}`}>{n.children.map(c=><a href={c[1]} key={c[0]} onClick={()=>{setOpen("");setMobile(false)}}><SafeImage src={navImages[c[0]]||navImages["Company Overview"]} alt="" loading="lazy"/><b>{c[0]}</b><span>↗</span></a>)}</div>}</li>)}</ul><Link to="#/contact" className="nav-cta">Let's talk ↗</Link></div>
  </div></nav>
  <main>{page}</main><Footer/><div className="floating-contact" aria-label="Quick contact options">
   <a className="floating-phone" href="tel:04048569689" aria-label="Call Potla Tech Solutions" title="Call Potla Tech Solutions">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.1 3.8 9.4 3.3c.7-.2 1.4.2 1.7.9l1.1 2.7c.2.6.1 1.2-.4 1.6l-1.5 1.2a14 14 0 0 0 4 4l1.2-1.5c.4-.5 1-.6 1.6-.4l2.7 1.1c.7.3 1.1 1 .9 1.7l-.5 2.3c-.2.8-.9 1.4-1.8 1.4C10.3 18.3 5.7 13.7 5.7 7.9c0-.9.6-1.6 1.4-1.8Z"/></svg>
   </a>
   <a className="floating-whatsapp" href="https://wa.me/914048569689" target="_blank" rel="noopener noreferrer" aria-label="Chat with Potla Tech Solutions on WhatsApp" title="Chat on WhatsApp">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.1 11.7a8.1 8.1 0 0 1-12 7.1L4 20l1.2-4a8.1 8.1 0 1 1 14.9-4.3Z"/><path d="M9 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.5.6c-.2.2-.2.4 0 .7.5.8 1.2 1.5 2.1 2 .3.2.5.2.7-.1l.7-.8c.2-.2.4-.3.7-.2l1.5.7c.3.1.4.3.4.5 0 .4-.2 1-.6 1.3-.4.4-1 .6-1.6.5-1-.1-2.3-.7-3.6-1.8-1.4-1.2-2.3-2.6-2.6-3.7-.2-.8 0-1.6.5-2Z"/></svg>
   </a>
  </div><button className="back-top" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Back to top">↑</button>
 </>;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
