

import type { Post, Comment } from "./types"

// Mock data for demonstration purposes
// In a real app, this would be fetched from a database

const mockComments: Comment[] = [
  {
    id: "comment1",
    content: "This is a great article! Thanks for sharing your insights.",
    createdAt: new Date("2023-04-15T10:30:00"),
    author: {
      id: "user2",
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 5,
  },
  {
    id: "comment2",
    content: "I learned a lot from this post. Looking forward to more content like this!",
    createdAt: new Date("2023-04-14T14:20:00"),
    author: {
      id: "user3",
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 3,
  },
  {
    id: "comment3",
    content: "I have a different perspective on this topic. Would love to discuss further.",
    createdAt: new Date("2023-04-13T09:15:00"),
    author: {
      id: "user4",
      name: "Sam Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    likes: 2,
  },
]

const mockPosts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    content:
      "Next.js is a React framework that enables server-side rendering and static site generation for React applications.\n\nIn this post, we'll explore the basics of Next.js and how to set up your first project. Next.js provides a great developer experience with features like fast refresh, file-system based routing, and built-in CSS support.\n\nOne of the key advantages of Next.js is its flexibility in rendering methods. You can choose between Server-Side Rendering (SSR), Static Site Generation (SSG), or Client-Side Rendering on a per-page basis.\n\nTo get started with Next.js, you need to have Node.js installed on your machine. Then, you can create a new Next.js app using the following command:\n\n```\nnpx create-next-app my-next-app\n```\n\nThis will set up a new Next.js project with all the necessary configurations. You can then start the development server by running:\n\n```\ncd my-next-app\nnpm run dev\n```\n\nYour Next.js application will be running at http://localhost:3000. From here, you can start building your application by creating pages in the `pages` directory.",
    excerpt: "Learn how to build modern web applications with Next.js, a powerful React framework for production.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date("2023-04-10T09:00:00"),
    updatedAt: new Date("2023-04-10T09:00:00"),
    categories: ["Development", "Technology", "React"],
    status: "published",
    views: 1250,
    readingTime: 5,
    comments: mockComments,
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS",
    slug: "mastering-tailwind-css",
    content:
      "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML.\n\nIn this comprehensive guide, we'll dive deep into Tailwind CSS and explore how it can revolutionize your styling workflow. Unlike traditional CSS frameworks that come with predefined components, Tailwind provides low-level utility classes that let you build completely custom designs.\n\nOne of the biggest advantages of Tailwind is its flexibility. You're not locked into a specific design system, and you can create unique UIs without fighting against the framework's defaults.\n\nTo get started with Tailwind CSS, you can install it via npm:\n\n```\nnpm install tailwindcss\n```\n\nThen, create a configuration file:\n\n```\nnpx tailwindcss init\n```\n\nThis will generate a `tailwind.config.js` file where you can customize your design system, including colors, spacing, breakpoints, and more.\n\nTailwind's utility classes follow a consistent naming convention, making them intuitive to use. For example, `text-center` centers text, `bg-blue-500` applies a blue background, and `p-4` adds padding on all sides.",
    excerpt:
      "Discover how to leverage Tailwind CSS to build beautiful, responsive interfaces with utility-first approach.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date("2023-04-05T10:30:00"),
    updatedAt: new Date("2023-04-06T14:15:00"),
    categories: ["Design", "Development", "CSS"],
    status: "published",
    views: 980,
    readingTime: 7,
    comments: mockComments.slice(0, 2),
  },
  {
    id: "3",
    title: "The Future of Web Development",
    slug: "future-of-web-development",
    content:
      "Web development is constantly evolving, with new technologies and approaches emerging regularly.\n\nIn this forward-looking article, we'll explore the trends that are shaping the future of web development. From WebAssembly to Edge Computing, the landscape is changing rapidly.\n\nOne significant trend is the rise of Jamstack architecture, which separates the frontend from the backend and leverages APIs and serverless functions. This approach offers better performance, higher security, and a better developer experience.\n\nAnother important development is the increasing adoption of headless CMS solutions, which provide content through APIs rather than being tightly coupled with the presentation layer. This enables developers to use any frontend technology they prefer while still having robust content management capabilities.\n\nWebAssembly (Wasm) is also gaining traction, allowing high-performance code written in languages like C, C++, and Rust to run in the browser. This opens up new possibilities for web applications that require intensive computations.\n\nAI-driven development tools are also becoming more prevalent, helping developers write code faster and with fewer bugs. These tools can suggest completions, identify potential issues, and even generate entire components based on descriptions.",
    excerpt:
      "Explore emerging trends and technologies that will shape the future of web development in the coming years.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date("2023-03-28T11:45:00"),
    updatedAt: new Date("2023-03-29T09:20:00"),
    categories: ["Technology", "Development", "Trends"],
    status: "published",
    views: 1560,
    readingTime: 8,
    comments: mockComments.slice(1),
  },
  {
    id: "4",
    title: "Building a Personal Brand as a Developer",
    slug: "building-personal-brand-developer",
    content:
      "In today's competitive tech industry, having a strong personal brand can set you apart from other developers.\n\nThis article explores strategies for building your personal brand as a developer. We'll cover everything from creating valuable content to networking effectively.\n\nOne of the most effective ways to build your brand is by sharing your knowledge through blog posts, tutorials, or open-source contributions. This not only helps others but also establishes you as an authority in your field.\n\nSocial media platforms like Twitter, LinkedIn, and GitHub can be powerful tools for connecting with other professionals and showcasing your work. Consistency is key—regularly sharing insights and engaging with the community will help you build a following over time.\n\nSpeaking at conferences or local meetups is another excellent way to increase your visibility and demonstrate your expertise. Start with smaller events to build confidence before tackling larger venues.\n\nDon't underestimate the power of a well-designed personal website that showcases your portfolio, blog, and professional information. This serves as your digital home base and often makes the first impression on potential employers or clients.",
    excerpt:
      "Learn how to establish yourself as a recognized expert in the development community through personal branding.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date("2023-03-20T14:00:00"),
    updatedAt: new Date("2023-03-21T10:30:00"),
    categories: ["Career", "Development"],
    status: "published",
    views: 2100,
    readingTime: 6,
    comments: mockComments.slice(0, 1),
  },
  {
    id: "5",
    title: "Introduction to TypeScript",
    slug: "introduction-to-typescript",
    content:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.\n\nIn this introductory guide, we'll cover the basics of TypeScript and why it's becoming the preferred choice for many developers. TypeScript adds static type definitions to JavaScript, which can help catch errors early in the development process.\n\nOne of the main benefits of TypeScript is improved IDE support, with features like auto-completion, navigation, and refactoring. This can significantly boost your productivity and make it easier to work with large codebases.\n\nTo get started with TypeScript, you can install it globally using npm:\n\n```\nnpm install -g typescript\n```\n\nYou can then create a simple TypeScript file with a `.ts` extension and compile it to JavaScript using the TypeScript compiler:\n\n```\ntsc your-file.ts\n```\n\nTypeScript introduces several important concepts, including interfaces, type aliases, enums, and generics. These features allow you to define complex types and ensure that your code adheres to those types.\n\nAdopting TypeScript in your projects can lead to more robust code, better documentation through type definitions, and a more enjoyable development experience.",
    excerpt: "Discover how TypeScript enhances JavaScript with static types and improves developer productivity.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date("2023-03-15T09:30:00"),
    updatedAt: new Date("2023-03-16T11:45:00"),
    categories: ["Development", "TypeScript", "JavaScript"],
    status: "published",
    views: 1820,
    readingTime: 7,
    comments: mockComments,
  },
  {
    id: "6",
    title: "Optimizing Website Performance",
    slug: "optimizing-website-performance",
    content:
      "Website performance is crucial for user experience and SEO rankings.\n\nIn this comprehensive guide, we'll explore various techniques to optimize your website's performance. From image optimization to code splitting, there are many ways to make your site faster.\n\nOne of the most important aspects of performance optimization is reducing the size of your assets. This includes compressing images, minifying CSS and JavaScript, and using modern formats like WebP for images.\n\nLazy loading is another effective technique, where resources are only loaded when they're needed. This is particularly useful for images and videos that are below the fold.\n\nImplementing a Content Delivery Network (CDN) can significantly improve load times by serving assets from servers that are geographically closer to your users.\n\nCode splitting is a technique that allows you to break your JavaScript bundle into smaller chunks that are loaded on demand. This can dramatically reduce the initial load time of your application.\n\nCaching strategies, both on the client and server, can also play a significant role in improving performance by reducing the need to fetch resources repeatedly.",
    excerpt: "Learn essential techniques to improve your website's speed, user experience, and search engine rankings.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date("2023-03-10T13:15:00"),
    updatedAt: new Date("2023-03-11T10:00:00"),
    categories: ["Performance", "Development", "SEO"],
    status: "published",
    views: 1340,
    readingTime: 9,
    comments: mockComments.slice(1, 3),
  },
  {
    id: "7",
    title: "The Art of Clean Code",
    slug: "art-of-clean-code",
    content:
      "Writing clean, maintainable code is a skill that every developer should strive to master.\n\nIn this article, we'll discuss principles and practices for writing clean code that is easy to understand, maintain, and extend. Clean code is not just about aesthetics—it has real business value.\n\nOne fundamental principle is to use meaningful names for variables, functions, and classes. Names should clearly communicate the purpose and behavior of the code element.\n\nFunctions should be small and focused on doing one thing well. This makes them easier to understand, test, and reuse. The single responsibility principle applies not just to classes but to functions as well.\n\nComments should be used sparingly and only when necessary to explain why something is done a certain way, not what the code is doing. Well-written code should be self-explanatory.\n\nConsistent formatting and style make code more readable. Many teams use linters and formatters to enforce a consistent style across the codebase.\n\nWriting tests for your code not only ensures that it works as expected but also serves as documentation and makes refactoring safer.",
    excerpt: "Discover principles and practices for writing code that is easy to understand, maintain, and extend.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date("2023-03-05T10:45:00"),
    updatedAt: new Date("2023-03-06T09:30:00"),
    categories: ["Development", "Best Practices", "Productivity"],
    status: "published",
    views: 1680,
    readingTime: 6,
    comments: mockComments.slice(0, 2),
  },
  {
    id: "8",
    title: "Introduction to React Hooks",
    slug: "introduction-to-react-hooks",
    content:
      "React Hooks have revolutionized how we write React components, allowing us to use state and other React features without writing classes.\n\nIn this tutorial, we'll explore the most commonly used React Hooks and how they can simplify your code. Hooks were introduced in React 16.8 and have quickly become the preferred way to write React components.\n\nThe `useState` hook allows you to add state to functional components. Here's a simple example:\n\n```jsx\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```\n\nThe `useEffect` hook lets you perform side effects in functional components. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.\n\n```jsx\nfunction Example() {\n  const [data, setData] = useState(null);\n  \n  useEffect(() => {\n    // Fetch data or perform other side effects\n    fetchData().then(result => setData(result));\n    \n    // Optional cleanup function\n    return () => {\n      // Clean up resources\n    };\n  }, []); // Empty dependency array means this effect runs once on mount\n  \n  // Rest of the component\n}\n```\n\nOther useful hooks include `useContext` for consuming context, `useReducer` for more complex state logic, and `useRef` for persisting values across renders without causing re-renders.",
    excerpt: "Learn how to use React Hooks to write more concise and readable functional components.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date("2023-02-28T11:30:00"),
    updatedAt: new Date("2023-03-01T09:15:00"),
    categories: ["React", "Development", "JavaScript"],
    status: "published",
    views: 2250,
    readingTime: 8,
    comments: mockComments,
  },
  {
    id: "9",
    title: "Getting Started with Docker",
    slug: "getting-started-with-docker",
    content:
      'Docker has transformed how we develop, ship, and run applications by enabling containerization.\n\nThis beginner-friendly guide will introduce you to Docker and help you get started with containerizing your applications. Docker allows you to package your application with all its dependencies into a standardized unit called a container.\n\nContainers are lightweight, portable, and consistent environments that can run on any machine that has Docker installed. This solves the "it works on my machine" problem and makes deployment much more reliable.\n\nTo get started with Docker, you first need to install Docker Desktop on your machine. Once installed, you can run the following command to verify that Docker is working correctly:\n\n```\ndocker --version\n```\n\nThe basic building block of Docker is the Dockerfile, which contains instructions for building a Docker image. Here\'s a simple example for a Node.js application:\n\n```dockerfile\nFROM node:14\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["npm", "start"]\n```\n\nYou can build an image from this Dockerfile using the `docker build` command and then run a container from that image using `docker run`.\n\nDocker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application\'s services, networks, and volumes.',
    excerpt:
      "Learn the basics of Docker and how to containerize your applications for consistent development and deployment.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date("2023-02-20T14:45:00"),
    updatedAt: new Date("2023-02-21T10:30:00"),
    categories: ["DevOps", "Development", "Docker"],
    status: "published",
    views: 1890,
    readingTime: 7,
    comments: mockComments.slice(1),
  },
  {
    id: "10",
    title: "My First Blog Post",
    slug: "my-first-blog-post",
    content:
      "This is a draft of my first blog post. I'm still working on it and will publish it soon.\n\nIn this post, I plan to introduce myself and share my journey as a developer. I'll talk about the challenges I've faced and the lessons I've learned along the way.\n\nI also want to discuss my goals for this blog and the types of content I plan to share in the future. This will include tutorials, opinion pieces, and updates on my personal projects.\n\nStay tuned for the full post coming soon!",
    excerpt: "An introduction to my new blog and what you can expect from my future posts.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date("2023-02-15T09:00:00"),
    updatedAt: new Date("2023-02-16T11:30:00"),
    categories: ["Personal"],
    status: "draft",
    views: 0,
    readingTime: 3,
    comments: [],
  },
  {
    id: "11",
    title: "Advanced CSS Techniques",
    slug: "advanced-css-techniques",
    content:
      "This is a draft post about advanced CSS techniques that I'm currently working on.\n\nIn this comprehensive guide, I plan to cover topics like CSS Grid, Flexbox, CSS Variables, and advanced animations. I'll provide practical examples and best practices for each technique.\n\nI'll also discuss browser compatibility issues and how to handle them with feature detection and fallbacks.\n\nThe final post will include interactive demos and code snippets that you can use in your own projects.",
    excerpt: "Explore advanced CSS techniques to take your web styling skills to the next level.",
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date("2023-02-10T13:15:00"),
    updatedAt: new Date("2023-02-11T10:45:00"),
    categories: ["CSS", "Design", "Development"],
    status: "draft",
    views: 0,
    readingTime: 10,
    comments: [],
  },
]

// Utility functions to fetch data
export async function getPosts(): Promise<Post[]> {
  // In a real app, this would fetch from a database or API
  return mockPosts.filter((post) => post.status === "published")
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  // In a real app, this would fetch from a database or API
  return mockPosts.find((post) => post.slug === slug && post.status === "published") || null
}

export async function getRelatedPosts(postId: string, categories: string[]): Promise<Post[]> {
  // In a real app, this would fetch from a database or API
  return mockPosts
    .filter(
      (post) =>
        post.id !== postId &&
        post.status === "published" &&
        post.categories.some((category) => categories.includes(category)),
    )
    .slice(0, 3)
}

export async function getUserPosts(userId: string): Promise<Post[]> {
  // In a real app, this would fetch from a database or API
  return mockPosts.filter((post) => post.author.id === userId)
}
