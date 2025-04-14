
import { useState } from "react";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const blogPosts = [
  {
    id: 1,
    title: "The Evolution of East-West Animation Collaboration",
    excerpt: "How the relationship between Eastern and Western animation studios has transformed over the past decade, leading to innovative new styles and storytelling approaches.",
    category: "Industry Trends",
    author: "Jane Doe",
    date: "April 10, 2023",
    image: "https://images.unsplash.com/photo-1516900557549-41557d405adf?auto=format&fit=crop&w=600&q=80",
    tags: ["Animation", "Global Collaboration", "Industry Trends"]
  },
  {
    id: 2,
    title: "Cultural Nuances in Chinese Animation: What Western Studios Should Know",
    excerpt: "Understanding the rich tradition and unique storytelling elements of Chinese animation can help Western studios create more authentic and appealing collaborations.",
    category: "Cultural Insights",
    author: "Wei Zhang",
    date: "March 15, 2023",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=600&q=80",
    tags: ["Chinese Animation", "Cultural Studies", "Collaboration"]
  },
  {
    id: 3,
    title: "Breaking Down Language Barriers in Animation Production",
    excerpt: "Effective communication strategies for international animation teams working across language differences, with case studies from successful projects.",
    category: "Production",
    author: "John Smith",
    date: "February 22, 2023",
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=600&q=80",
    tags: ["Production", "Communication", "Team Management"]
  },
  {
    id: 4,
    title: "The Rise of Co-Production: Financial and Creative Benefits",
    excerpt: "Exploring how international co-productions are changing the animation landscape, offering both financial advantages and creative opportunities.",
    category: "Business",
    author: "Maria Rodriguez",
    date: "January 30, 2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    tags: ["Co-Production", "Business", "Financing"]
  },
  {
    id: 5,
    title: "Animation Techniques: Blending Eastern and Western Approaches",
    excerpt: "A technical look at how different animation traditions can be combined to create distinctive visual styles that appeal to global audiences.",
    category: "Technical",
    author: "Akira Tanaka",
    date: "December 12, 2022",
    image: "https://images.unsplash.com/photo-1516900557549-41557d405adf?auto=format&fit=crop&w=600&q=80",
    tags: ["Animation Techniques", "Visual Style", "Creative Process"]
  },
  {
    id: 6,
    title: "Navigating Regulatory Challenges in Chinese Animation Partnerships",
    excerpt: "Understanding the regulatory environment for animation in China and how to successfully navigate it when establishing international collaborations.",
    category: "Legal",
    author: "Li Mei",
    date: "November 5, 2022",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    tags: ["Regulations", "China", "Legal Considerations"]
  },
];

const categories = [
  "All Categories",
  "Industry Trends",
  "Cultural Insights",
  "Production",
  "Business",
  "Technical",
  "Legal"
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-harmony-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl">
              Explore the latest trends, insights, and stories from the world of 
              cross-cultural animation collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Search Results */}
              {searchTerm && (
                <div className="mb-8">
                  <p className="text-lg">
                    Showing results for <span className="font-bold">"{searchTerm}"</span>
                  </p>
                </div>
              )}

              {/* Blog Posts */}
              <div className="space-y-12">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map(post => (
                    <BlogPostCard key={post.id} post={post} />
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-500">No blog posts found matching your criteria.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search Box */}
              <div className="bg-harmony-light p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold mb-4">Search Blog</h3>
                <div className="flex">
                  <Input 
                    placeholder="Search articles..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="rounded-r-none focus-visible:ring-harmony-blue"
                  />
                  <Button className="bg-harmony-blue hover:bg-harmony-blue/80 rounded-l-none">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-harmony-light p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-2 py-1 rounded ${
                          selectedCategory === category 
                            ? "bg-harmony-blue text-white" 
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-harmony-light p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map(post => (
                    <li key={post.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <a href={`#post-${post.id}`} className="hover:text-harmony-blue transition-colors">
                        {post.title}
                      </a>
                      <div className="text-sm text-gray-500 mt-1">
                        {post.date}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Sign-up */}
      <section className="py-16 bg-harmony-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter for the latest insights on cross-cultural animation collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input 
                placeholder="Your email address" 
                className="bg-white text-black"
              />
              <Button className="bg-harmony-red hover:bg-harmony-red/90 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const BlogPostCard = ({ post }) => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-3 gap-8" id={`post-${post.id}`}>
      <div className="md:col-span-1">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div className="md:col-span-2">
        <span className="inline-block bg-harmony-blue/10 text-harmony-blue px-3 py-1 rounded-full text-sm mb-3">
          {post.category}
        </span>
        <h2 className="text-2xl font-bold mb-3">
          <a href={`#post-${post.id}`} className="hover:text-harmony-blue transition-colors">
            {post.title}
          </a>
        </h2>
        <p className="text-gray-700 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 space-x-4">
            <span className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </span>
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </span>
          </div>
          <a href={`#post-${post.id}`} className="text-harmony-blue hover:text-harmony-gold flex items-center">
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Blog;
