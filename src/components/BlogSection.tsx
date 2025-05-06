
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'AfriRoots officially launches in Zimbabwe',
      excerpt: 'AfriRoots celebrates its grand opening with a showcase of traditional and innovative beverages.',
      image: '/placeholder.svg',
      date: 'April 2025',
      category: 'News',
      slug: '#'
    },
    {
      title: 'NutriBrew hits local retailers',
      excerpt: 'Find our signature NutriBrew beverages in selected stores across Zimbabwe.',
      image: '/placeholder.svg',
      date: 'May 2025',
      category: 'Products',
      slug: '#'
    },
    {
      title: 'Community tasting events announced',
      excerpt: 'Join us for special tasting events across Zimbabwe and experience the unique flavors of NutriBrew.',
      image: '/placeholder.svg',
      date: 'June 2025',
      category: 'Events',
      slug: '#'
    }
  ];

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading">News & Events</h2>
          <p className="section-subheading">
            Stay updated with the latest happenings at AfriRoots and upcoming events.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <Badge variant="outline" className="bg-afriroots-green-light/10 text-afriroots-green-dark border-afriroots-green-light/20">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-afriroots-green-dark mb-3 hover:text-afriroots-orange transition-colors">
                  <a href={post.slug}>{post.title}</a>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <a 
                  href={post.slug}
                  className="text-afriroots-orange font-medium inline-flex items-center hover:text-afriroots-orange-dark transition-colors"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary">View All News</Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
