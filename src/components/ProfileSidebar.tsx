const ProfileSidebar = () => {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="sticky top-20 bg-card rounded-lg shadow-[var(--shadow-card)] p-6 border border-border">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl font-bold text-foreground mb-1">Abhijna N</h2>
          <p className="text-sm text-muted-foreground mb-1">USN: 4MT23AI003</p>
          <p className="text-sm text-primary font-medium mb-4">AIML Engineering</p>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border">
          <h3 className="text-sm font-semibold text-foreground mb-3">About Me</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Passionate developer and researcher interested in web technologies, 
            machine learning, and creating impactful solutions. Love sharing 
            knowledge through writing and open-source contributions.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
