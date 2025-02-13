import React, { useState } from 'react';
import { Menu,X,Github, Linkedin, Mail, Server, Database, Code2, Globe,LineChart,FlaskConical,GitBranch, ExternalLink, Briefcase, Brain, Github as Git, Terminal, Layout, Cloud, Shield, Cpu } from 'lucide-react';
import img from "./images/Screenshot 2025-02-09 164312.png"
import img2 from "./images/Screenshot 2025-02-08 190346.png"
import img3 from "./images/2410517.jpg"
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update ball position on mouse move
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Submitted');
    setFormData({name: '',
      email: '',
      message: ''})
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden"  onMouseMove={handleMouseMove}>
      <nav className="p-6 max-w-7xl mx-auto animate-fadeIn text-purple-400">
      <div className="flex justify-between items-center">
        <h1 className="text-base md:text-2xl font-bold font-mono">
          Hello! <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">I'm Praveen</span>
        </h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-purple-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm md:text-lg">
          <li><a href="#experience" className="hover:text-blue-400 transition duration-300">Experience</a></li>
          <li><a href="#skills" className="hover:text-blue-400 transition duration-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center bg-gray-900 p-4 rounded-lg">
          <li><a href="#experience" className="block hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Experience</a></li>
          <li><a href="#skills" className="block hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" className="block hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="block hover:text-blue-400 transition duration-300" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
      {/* Animated background
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl animate-blob top-0 left-0"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000 top-[20%] right-0"></div>
        <div className="absolute w-[500px] h-[500px] bg-green-500/30 rounded-full blur-3xl animate-blob animation-delay-4000 bottom-0 left-[20%]"></div>
      </div>

      {/* Content */}
      <div
        className="fixed w-[600px] h-[600px] bg-purple-800 rounded-full opacity-15 blur-3xl pointer-events-none transition-transform duration-50 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)", // Centering the ball on the cursor
        }}
      ></div>
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className=" animate-slideLeft text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text animate-gradient">
              Praveen Gokavarapu
            </h1>
            <h2 className=" animate-slideRight text-2xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              MERN Stack Developer
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 opacity-0 animate-fadeIn">
              Crafting exceptional web experiences with modern technologies
            </p>
            <div className="flex justify-center gap-6 opacity-0 animate-fadeIn animation-delay-500">
              <a href="https://github.com/PraveenGokavarapu12" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com/in/praveengokavarapu" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:praveengokavarapu518@gmail.com" className="transform hover:scale-110 transition-transform">
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </header>

        {/* Work Experience */}
        <section className="py-20 px-4 bg-black/30 backdrop-blur-sm animate-fadeIn" id='experience'>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Work Experience
            </h2>
            <div className="space-y-12">
              {[
                
                {
                  title: 'Full Stack Developer Intern',
                  company: 'Produze',
                  period: 'Jan 2024',
                  description: 'Designed and implemented a robust data pipeline for retrieving and updating Amazon ad reports data into a relational database, enhancing efficiency and data accessibility.',
                  achievements: [
                    'Collaborated with cross-functional teams to develop API integrations that fetched Amazon ad reports data, transforming over 100,000 records for seamless database compatibility.',
                    'Optimized data processing workflows, reducing data retrieval and transformation time by 35%, significantly improving efficiency and scalability.',
                    'Integrated the database with BigQuery, enabling advanced analytics and reporting while maintaining data integrity.',
                    'Automated data ingestion and update processes, minimizing manual effort and enhancing system reliability.'
                  ]
                }
              ].map((job, index) => (
                <div key={index} className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-orange-500/20">
                      <Briefcase className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                      <p className="text-orange-400 mb-2">{job.company} | {job.period}</p>
                      <p className="text-gray-300 mb-4">{job.description}</p>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expanded Skills Section */}
        <section className="py-20 px-4" id='skills'>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: 'Frontend Development',
                  icon: Layout,
                  skills: ['React.js', 'Redux',"HTML", 'Javascript', 'Tailwind CSS',"Bootstrap"]
                },
                {
                  category: 'Backend Development',
                  icon: Server,
                  skills: ['Node.js', 'Express.js', 'RESTful APIs',  'WebSocket']
                },
                {
                  category: 'Database Management',
                  icon: Database,
                  skills: ['MongoDB', 'Mongoose ODM',"MySQL","Firebase"]
                },
                {
                  category: 'Data Science & Machine Learning',
                  icon: LineChart, 
                  skills: ['Scikit-learn', 'Python',"Pandas","Numpy"]
                },
                {
                  category: 'Programming Languages',
                  icon: FlaskConical, 
                  skills: ['C++', 'Python']
                },
                {
                  category: 'Version Control & Collaboration',
                  icon: GitBranch, 
                  skills: ['Git', 'GitHub']
                }
               
              ].map((category, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="w-6 h-6 text-purple-400" />
                    <h3 className="text-lg font-semibold">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 px-4 bg-black/30 backdrop-blur-sm" id='projects'>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-500 text-transparent bg-clip-text">
              Featured Projects
            </h2>
            <div className="space-y-16">
              {[
                {
                  title: 'Developers Hub',
                  image: img,
                  tech: ['React','Tailwind CSS', 'Node.js', 'MongoDB',  'Express', 'JWT',"Mongoose ODM","Git","bcrypt"],
                  description: 'A platform for developers to connect, share insights, and engage with the community. Built using the MERN stack, it enables developers to create profiles, post content, and interact with others in a collaborative environment.',
                  features: [
                    'User Authentication & Authorization – Secure signup & login using JWT authentication.',
                    'Developer Profiles – Users can create and update their developer profiles with skills and experience.',
                    'Post Creation & Interaction – Developers can create posts, view posts, like posts, and comment on others’ posts.',
                    'Explore Other Developers – Browse and connect with other developers.',
                    'Responsive UI – Designed using Tailwind CSS for a smooth user experience.',
                   
                  ],
                  challenges: [
                    'Managing Authentication – Implemented JWT-based authentication while handling token expiration securely.',
                    'Real-time Updates – Ensured posts and interactions update dynamically using React state management.',
                    'Database Optimization – Structured MongoDB schemas to efficiently handle posts, users, and interactions.',
                    'Handling API Requests – Optimized API calls using Axios to ensure a smooth and responsive UI.'
                  ],
                  results: [
                    'Seamless developer interaction – Developers can now easily share insights and connect within the community.',
                    'Improved performance – Optimized backend API calls, reducing response time.',
                    'Enhanced user engagement – Built an intuitive UI with React & Tailwind CSS, increasing user retention.',
                    
                  ],
                  link: 'https://developers-hub-praveen.vercel.app/',
                  github: 'https://github.com/PraveenGokavarapu12/Developers-Hub'
                },
                {
                  title: 'Restaurant App',
                  image: img2,
                  tech: ['React.js', 'Redux', 'Bootstrap', 'Responsive Web Design'],
                  description: 'A web-based restaurant application that allows users to browse and order food seamlessly. The app provides filtering options by category enhancing the user experience by making food discovery easier.',
                  features: [
                    'Food Browsing & Ordering: Users can explore a wide variety of food items and place orders effortlessly.',
                    'Advanced Filtering: Users can filter food items based on category, price, and ratings for better selection.',
                    'Dynamic Frontend: Built using React.js to ensure an interactive and responsive user experience.',
                    'State Management: Implemented Redux to manage the application\'s state efficiently, ensuring smooth data flow.',
                    'Responsive Design: Bootstrap was used to create a mobile-friendly and visually appealing layout.',
                   
                  ],
                  challenges: [
                    'Managing complex state changes efficiently across multiple components.',
                    'Ensuring a seamless user experience with real-time filtering and ordering.',
                    'Optimizing performance for smooth interactions, especially when handling large datasets.'
                  
                  ],
                  results: [
                    'Successfully developed a user-friendly food ordering platform with a smooth and responsive UI.',
                    'Improved filtering efficiency, allowing users to find food items faster and with greater accuracy.',
                    'Achieved a well-structured and maintainable codebase using React.js and Redux for scalability.',
                   
                  ],
                  link: 'https://restaurant-app-praveen.vercel.app/',
                  github: 'https://github.com/PraveenGokavarapu12/Restaurant-App'
                },
                {
                  title: 'Contact Manager App',
                  image: img3,
                  tech: ['Node.js', "Express.js","MongoDB"],
                  description: 'A web-based contact management application that allows users to store, update, and manage their contacts securely. The app includes authentication and authorization features to ensure user data privacy and controlled access.',
                  features: [
                    'User Authentication & Authorization: Implemented secure login/signup using JWT authentication.',
                    'CRUD Operations: Users can create, read, update, and delete contacts efficiently.',
                    'Role-Based Access Control: Ensures users can only manage their own contacts.',
                    'Secure API Endpoints: Protected routes using middleware for enhanced security.',
                    'Database Integration: Uses MongoDB for efficient data storage and retrieval.',
                   
                  ],
                  challenges: [
                    'Ensuring secure authentication and handling JWT-based authorization.',
                    'Structuring the database for optimal performance and scalability.',
                    'Managing user sessions and protecting sensitive data.',
                 
                  ],
                  results: [
                    'Successfully developed a secure and scalable contact management system.',
                    'Improved user experience with smooth data handling and authentication.',
                    'Achieved structured and maintainable backend logic using Node.js and Express.',
                 
                  ],
                  link: 'https://github.com/PraveenGokavarapu12/Contact-Manager-App-Backend',
                  github: 'https://github.com/PraveenGokavarapu12/Contact-Manager-App-Backend'
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a href={project.link}
                            target="_blank">
                  <div className="relative aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                  </a>
                    
                   
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <div className="flex gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <Github className="w-6 h-6" />
                          </a>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-6 h-6" />
                          </a>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 border-t border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-blue-400">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-purple-400">Challenges</h4>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-green-400">Results</h4>
                        <ul className="space-y-2">
                          {project.results.map((result, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
              Let's Connect
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors text-white backdrop-blur-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors text-white backdrop-blur-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors text-white backdrop-blur-sm resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;