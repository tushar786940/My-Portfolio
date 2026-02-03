export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-[#0B0F1A]/80 backdrop-blur border-b border-white/10 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <a href="/">
                    <h1 className="text-xl font-bold text-cyan-400">
                        Tushar
                    </h1>
                </a>

                <div className="space-x-6 text-gray-400">
                    <a href="/projects" className="hover:text-cyan-400 transition">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-purple-400 transition">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}
