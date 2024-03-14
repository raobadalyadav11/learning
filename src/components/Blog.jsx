import React from "react";

const Blog = () => {



  const posts = [
    {
        title: "What is SaaS? Software as a Service Explained",
        desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
        date: "Thursday, December 9th 2021",
        href: "javascript:void(0)"
    },
    {
        title: "A Quick Guide to WordPress Hosting",
        desc: "According to him, Ã¢â‚¬Å“I'm still surprised that this has happened. But we are surprised because we are so surprised.Ã¢â‚¬ÂMore revelations about Whittington will be featured in the film",
        date: "Thursday, December 9th 2021",
        href: "javascript:void(0)"
    },
    {
        title: "7 Promising VS Code Extensions Introduced in 2022",
        desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
        date: "Thursday, December 9th 2021",
        href: "javascript:void(0)"
    },
    {
        title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
        desc: "The powerful gravity waves resulting from the impact of the planets' moons Ã¢â‚¬â€ four in total Ã¢â‚¬â€ were finally resolved in 2015 when gravitational microlensing was used to observe the",
        date: "Thursday, December 9th 2021",
        href: "javascript:void(0)"
    }
]

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center">Blog</h1>
        </div>
      </header>

    
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
       
        <div className="mt-12 grid gap-4 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3">
            {
                posts.map((item, idx) => (
                    <article className="mt-5 pt-8 md:pt-0" key={idx}>
                        <a href={item.href}>
                            <span className="block text-gray-400 text-sm">
                                {item.date}
                            </span>
                            <div className="mt-2">
                                <h3 className="text-xl text-gray-900 font-semibold hover:underline">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 mt-1 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                            <button className="mt-2 outline-none flex items-center text-[14px] text-blue-600 decoration-blue-600 hover:underline">
                                READ MORE
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </a>
                    </article>
                ))
            }
        </div>
    </section>

    </div>
  );
};

export default Blog;
