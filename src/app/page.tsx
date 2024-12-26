import Image from "next/image";

export default function Home() {
  return (
    <div >
      <div>
        <h1 className="font-extrabold text-[30px] text-center mt-3 bg-lime-300">Understanding Web Rendering Methods: SSR, CSR, SSG, and ISR</h1>
        <p className="font-bold text-[15px] text-center pl-10 pr-10 pt-12">
          Rendering methods are crucial in determining how web pages are loaded
          and delivered to users. Each method has its strengths, weaknesses, and
          best use cases. In this blog, we’ll explore Server-Side Rendering
          (SSR), Client-Side Rendering (CSR), Static Site Generation (SSG), and
          Incremental Static Regeneration (ISR) to help you choose the best fit
          for your project.
        </p>
      </div>
        <br />
      <div>
        <h1 className="font-extrabold text-[30px] ml-2 bg-lime-200">1. Server-Side Rendering (SSR)</h1>
        <div>
          <h2 className="pl-8 font-bold">Definition:</h2>
           <p className="pl-16">In SSR, web pages are rendered on the server for every
          user request. The server generates an HTML file and sends it to the
          browser. How it Works: A user requests a page. The server processes
          the request and dynamically generates the HTML. The browser receives
          the complete HTML and displays the page.</p> <br /><br />

           <h2 className="pl-8 font-bold">Best For:</h2>
            <p className="pl-16">Applications requiring dynamic or personalized content, such as e-commerce sites or
          dashboards.</p> <br /><br />

           <h2 className="pl-8 font-bold">Advantages:</h2>
          <p className="pl-16">SEO-friendly as the HTML is fully rendered on
          the server. Provides up-to-date content on every request.</p> <br /><br />

          <h2 className="pl-8 font-bold">Disadvantages:</h2>
          <p className="pl-16">Slower initial page loads due to server-side
          processing. Higher server costs.</p>
        </div>
      </div>





      <br />
      <hr/>
      <div>
        <h1 className="font-extrabold text-[30px] mt-10 ml-2 bg-lime-200">2. Client-Side Rendering (CSR)</h1>
        <div>
          <h2 className="pl-8 font-bold">Definition:</h2>
           <p className="pl-16">In CSR, only a bare-bones HTML file is sent to the browser. JavaScript takes over and dynamically renders the content on the client side.</p> <br /><br />

           <h2 className="pl-8 font-bold">Best For:</h2>
            <p className="pl-16">Websites with content that rarely changes, such as blogs, portfolios, or documentation sites.</p> <br /><br />

           <h2 className="pl-8 font-bold">Advantages:</h2>
          <p className="pl-16">Lightning-fast load times due to static content. <br />
          Reduced server load as no real-time rendering is needed.</p> <br /><br />

          <h2 className="pl-8 font-bold">Disadvantages:</h2>
          <p className="pl-16">Requires a rebuild to reflect content updates. <br />
          Not suitable for highly dynamic content.</p>
        </div>
      </div>



      <br />
      <hr/>
      <div>
        <h1 className="font-extrabold text-[30px] mt-10 ml-2 bg-lime-200">3. Static Site Generation (SSG)</h1>
        <div>
          <h2 className="pl-8 font-bold">Definition:</h2>
           <p className="pl-16">With SSG, HTML pages are pre-built during the build process. These pages are then served as static files to the browser.</p> <br /><br />

           <h2 className="pl-8 font-bold">Best For:</h2>
            <p className="pl-16">Websites with content that rarely changes, such as blogs, portfolios, or documentation sites.</p> <br /><br />

           <h2 className="pl-8 font-bold">Advantages:</h2>
          <p className="pl-16">Lightning-fast load times due to static content. <br />
          Reduced server load as no real-time rendering is needed.</p> <br /><br />

          <h2 className="pl-8 font-bold">Disadvantages:</h2>
          <p className="pl-16">Requires a rebuild to reflect content updates. <br />
          Not suitable for highly dynamic content.</p>
        </div>
      </div>



      <br />
      <hr/>
      <div>
        <h1 className="font-extrabold text-[30px] mt-10 ml-2 bg-lime-200 ">4. Incremental Static Regeneration (ISR)</h1>
        <div>
          <h2 className="pl-8 font-bold">Definition:</h2>
           <p className="pl-16">ISR combines the best of SSG and SSR. Static pages are pre-built but can be updated on-demand in the background.</p> <br /><br />

           <h2 className="pl-8 font-bold">Best For:</h2>
            <p className="pl-16">Content-heavy sites with frequent updates, such as news websites or e-commerce stores.</p> <br /><br />

           <h2 className="pl-8 font-bold">Advantages:</h2>
          <p className="pl-16">Fast page loads like SSG. <br />
          Updated content without a full site rebuild.</p> <br /><br />

          <h2 className="pl-8 font-bold">Disadvantages:</h2>
          <p className="pl-16 mb-10">Slightly more complex to set up compared to other methods.</p>
        </div>
      </div>
    </div>
  );
}
