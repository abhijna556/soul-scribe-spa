import ProfileSidebar from "@/components/ProfileSidebar";
import BlogList from "@/components/BlogList";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <ProfileSidebar />
          <BlogList />
        </div>
      </div>
    </div>
  );
};

export default Index;
