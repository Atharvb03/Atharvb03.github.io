import { Code, Database, Brain, Users, BarChart, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Development',
      icon: Code,
      color: 'text-primary',
      skills: ['Python', 'HTML', 'CSS', 'JavaScript', 'React', 'C']
    },
    {
      title: 'Database & Tools',
      icon: Database,
      color: 'text-accent',
      skills: ['MongoDB', 'SQL', 'GitHub', 'MS-Excel']
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'text-purple-500',
      skills: ['AI & ML', 'Data Visualization', 'Python-based AI']
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'text-orange-500',
      skills: ['Problem-solving', 'Logical Thinking', 'Teamwork']
    }
  ];

  const allSkills = [
    'Python', 'HTML', 'CSS', 'JavaScript', 'React', 'MongoDB', 
    'SQL', 'GitHub', 'AI & ML', 'MS-Excel', 'Problem-solving', 
    'Logical Thinking', 'Data Visualization', 'Teamwork', 'C'
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills developed through academic projects and continuous learning
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="tech-card p-6 text-center hover:scale-105 transition-all duration-300 group"
            >
              <div className={`${category.color} mb-4 flex justify-center`}>
                <category.icon className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-sm text-muted-foreground bg-secondary/50 rounded-md py-1 px-2"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All Skills Tags */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Technical Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allSkills.map((skill, index) => (
              <span
                key={index}
                className="skill-tag animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Progress Indicators */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { skill: 'Python', level: 90 },
              { skill: 'React', level: 85 },
              { skill: 'AI & ML', level: 80 },
              { skill: 'JavaScript', level: 85 },
              { skill: 'MongoDB', level: 75 },
              { skill: 'Problem Solving', level: 95 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;