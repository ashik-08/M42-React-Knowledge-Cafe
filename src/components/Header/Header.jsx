import profile from "../../assets/images/profile.png";

const Header = () => {
  
  return (
    <header className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
        <img src={profile} alt="your-profile-picture" />
      </div>
      <div className="border"></div>
    </header>
  );
};

export default Header;
