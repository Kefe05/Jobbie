


export default function Header(){
    interface Link {
        name: string;
        href: string;
    }

   // This is a simple header component for a job portal website. 
   const links:Link[] = [
        { name: "Companies", href: "#" },
        { name: "Candidates", href: "#" },
        { name: "Assessment", href: "#" },
        { name: "Post a Job", href: "#" },
        { name: "Career Advice", href: "#" }
    ];



    return (
        <header className="flex justify-between items-center">
            <div className="image-holder">
                <img src={"/logo.png"} alt="our logo"/>
            </div>
            <nav>
               { links.map((link, index) => (
                    <a key={index} href={link.href} className="mx-2 hover:text-link-green text-gray-700 transition">
                        {link.name}
                    </a>
               ))}   
                
            </nav>

            <div className="flex items-center space-x-4 gap-2">
                    <a href="#" className="bg-link-green/10 hover:bg-link-green/20  transition p-2 rounded-3xl w-24 text-center text-gray-700">Sign up</a>
                    <a href="#" className="bg-link-green/10 hover:bg-link-green/20 transition p-2 rounded-3xl w-24 text-center text-gray-700">Log in</a>
                </div>

        </header>
    )
}