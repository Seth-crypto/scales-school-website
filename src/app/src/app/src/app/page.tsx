import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Heart, Trophy, Calendar, Star, GraduationCap } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-24 lg:py-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Educating Minds,<br />
              <span className="text-accent">Nurturing Spirits</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Providing quality Christian education for grades K-12 in a supportive 
              environment that develops academic excellence and spiritual growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/admissions" className="btn bg-accent text-gray-900 hover:bg-accent-light">
                Apply Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/about" className="btn bg-white/10 text-white hover:bg-white/20">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute right-20 top-20 w-64 h-64 border-4 border-white rounded-full"></div>
          <div className="absolute right-40 top-40 w-32 h-32 border-4 border-white rounded-full"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">68</div>
              <div className="text-gray-200">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">450+</div>
              <div className="text-gray-200">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">35</div>
              <div className="text-gray-200">Teachers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-200">College Acceptance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Scales Adventist?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine academic rigor with Christian values to develop well-rounded individuals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card p-8">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Academic Excellence</h3>
              <p className="text-gray-600">
                Our rigorous curriculum prepares students for top universities with strong foundations in STEM, humanities, and arts.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card p-8">
              <div className="bg-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Christian Values</h3>
              <p className="text-gray-600">
                Daily Bible study, weekly chapel, and a nurturing environment help students develop strong moral character.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card p-8">
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Small Class Sizes</h3>
              <p className="text-gray-600">
                With an average student-to-teacher ratio of 15:1, every student receives personalized attention.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card p-8">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Athletic Programs</h3>
              <p className="text-gray-600">
                State-of-the-art athletic facilities and competitive sports programs help students stay active and healthy.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="card p-8">
              <div className="bg-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Arts & Music</h3>
              <p className="text-gray-600">
                Creative expression is valued through band, choir, drama, and visual arts programs.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="card p-8">
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify
