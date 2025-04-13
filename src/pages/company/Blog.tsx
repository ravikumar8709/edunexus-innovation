import React from 'react';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';
import PageTransition from '../../components/PageTransition';

const Blog = () => {
  const featuredPost = {
    title: "The Future of Education Technology in 2025",
    excerpt: "Discover how AI, VR, and personalized learning are reshaping education...",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    author: "Sarah Johnson",
    date: "March 15, 2025",
    readTime: "8 min read"
  };

  const posts = [
    {
      title: "5 Ways to Improve Student Engagement",
      excerpt: "Learn effective strategies to boost student participation and interest...",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      category: "Teaching Tips",
      date: "March 10, 2025",
      readTime: "5 min read"
    },
    {
      title: "The Rise of Hybrid Learning",
      excerpt: "Exploring the perfect balance between online and classroom education...",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      category: "Trends",
      date: "March 8, 2025",
      readTime: "6 min read"
    },
    {
      title: "Data Privacy in Education",
      excerpt: "Understanding the importance of protecting student data...",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      category: "Security",
      date: "March 5, 2025",
      readTime: "7 min read"
    }
  ];

  const categories = [
    "All Posts",
    "Education Technology",
    "Teaching Tips",
    "Industry News",
    "Case Studies",
    "Product Updates"
  ];

  return (
    <PageTransition>
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-1">
                    Featured Post
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-800">
                    Read More
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex md:space-x-8">
            {/* Main Content */}
            <div className="md:w-3/4">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Posts</h2>
              <div className="grid gap-8">
                {posts.map((post, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-48 w-full object-cover md:h-full"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-1">
                          {post.category}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="mr-4">{post.date}</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/4 mt-8 md:mt-0">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className="text-gray-600 hover:text-blue-600">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Blog;