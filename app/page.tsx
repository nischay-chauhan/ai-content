import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BoltIcon, Code, CombineIcon, Hash, InfoIcon, PenTool, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section id="hero" className="bg-gradient-to-r from-rose-500 to-rose-700 py-20 md:py-32 h-screen">
          <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                  Unlock the Power of AI
                </h1>
                <p className="text-lg text-white md:text-xl">
                  Our platform empowers you to generate code, images, and text with AI effortlessly. Unleash your creativity and drive innovation.
                </p>
                <div className="flex gap-4 mt-8">
                  <Link href="/dashboard">
                    <Button variant="secondary">Get Started</Button>
                  </Link>
                  <Link href="#features">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-rose-700/20 blur-3xl" />
                <div className="relative z-10">
                  <Image src="/hero.svg" width={600} height={400} alt="Hero Image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
               <Image src="/hero1.svg" width={600} height={400} alt="Hero Image" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Unleash Your Creativity</h2>
                <p className="text-rose-800 md:text-lg">
                  Our platform provides a comprehensive set of tools and features to help you generate code, images, and text with AI. From rapid content creation to seamless collaboration, we've got you covered.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-rose-100 p-4 shadow-sm hover:bg-rose-200 transition duration-300">
                    <BoltIcon className="h-8 w-8 text-rose-700" />
                    <h3 className="mt-2 text-lg font-semibold">AI Code Generation</h3>
                    <p className="text-rose-800">
                      Generate code snippets quickly and efficiently.
                    </p>
                  </div>
                  <div className="rounded-lg bg-rose-100 p-4 shadow-sm hover:bg-rose-200 transition duration-300">
                    <CombineIcon className="h-8 w-8 text-rose-700" />
                    <h3 className="mt-2 text-lg font-semibold">AI Image Generation</h3>
                    <p className="text-rose-800">
                      Create images with AI-based tools for stunning visuals.
                    </p>
                  </div>
                  <div className="rounded-lg bg-rose-100 p-4 shadow-sm hover:bg-rose-200 transition duration-300">
                    <Code className="h-8 w-8 text-rose-700" />
                    <h3 className="mt-2 text-lg font-semibold">AI Text Generation</h3>
                    <p className="text-rose-800">
                      Generate text content with AI-powered writing assistants.
                    </p>
                  </div>
                  <div className="rounded-lg bg-rose-100 p-4 shadow-sm hover:bg-rose-200 transition duration-300">
                    <InfoIcon className="h-8 w-8 text-rose-700" />
                    <h3 className="mt-2 text-lg font-semibold">Advanced Analytics</h3>
                    <p className="text-rose-800">
                      Gain insights into your content's performance with advanced analytics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="products" className="bg-rose-50 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Products</h2>
              <p className="mt-4 text-rose-800 md:text-lg">
                Explore our comprehensive suite of AI-powered tools
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Code Writer & Explainer",
                  desc: "Generate and understand code in any programming language with AI assistance",
                  icon: Code,
                  category: "Coding"
                },
                {
                  name: "Content Writing",
                  desc: "Create engaging blog posts, articles, and marketing copy with AI",
                  icon: PenTool,
                  category: "Writing"
                },
                {
                  name: "Social Media Manager",
                  desc: "Generate posts and hashtags for Instagram and other platforms",
                  icon: Instagram,
                  category: "Social Media"
                },
                {
                  name: "SEO Optimizer",
                  desc: "Optimize your content for better search engine rankings",
                  icon: Hash,
                  category: "Marketing"
                }
              ].map((product, index) => (
                <div key={index} className="p-4 gap-y-2 border shadow-md bg-white flex flex-col rounded cursor-pointer hover:scale-105 transition-all">
                  <div className="flex items-center">
                    <product.icon className="w-6 h-6 mr-2 text-rose-600" />
                    <p className="text-lg font-bold text-black">{product.name}</p>
                  </div>
                  <p className="text-muted-foreground">{product.desc}</p>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-rose-600 bg-rose-100 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="pricing" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Simple, Transparent Pricing</h2>
              <p className="mt-4 text-rose-800 md:text-lg">
                Choose the plan that works best for you
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Basic",
                  credits: 100,
                  price: "₹499",
                  features: [
                    "100 AI Credits",
                    "Basic Support",
                    "24/7 Customer Service",
                    "Access to All Templates"
                  ]
                },
                {
                  name: "Pro",
                  credits: 500,
                  price: "₹1,999",
                  features: [
                    "500 AI Credits",
                    "Priority Support",
                    "Advanced Analytics",
                    "Custom Templates"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  credits: 2000,
                  price: "₹4,999",
                  features: [
                    "2000 AI Credits",
                    "Dedicated Support",
                    "Custom Solutions",
                    "API Access"
                  ]
                }
              ].map((plan, index) => (
                <Card key={index} className={`relative ${plan.popular ? 'border-rose-500 shadow-lg' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-600"> / month</span>
                    </div>
                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <BoltIcon className="h-5 w-5 text-rose-500 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                      <Link href="/dashboard">
                      <Button 
                      className="w-full mt-8"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="bg-rose-100 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What Our Customers Say</h2>
              <p className="mt-4 text-rose-800 md:text-lg">
                Hear from the people who have experienced the power of our platform firsthand.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition duration-300">
                <div className="flex items-start">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">John Doe</h3>
                    <p className="text-rose-800">CEO, AIT Inc.</p>
                  </div>
                </div>
                <p className="mt-4 text-rose-800">
                  "AIT's platform has been a game-changer for our business. The ease of content generation and the powerful analytics have helped us scale our web presence with confidence."
                </p>
              </Card>
              <Card className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition duration-300">
                <div className="flex items-start">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Jane Smith</h3>
                    <p className="text-rose-800">Lead Developer, AIT Inc.</p>
                  </div>
                </div>
                <p className="mt-4 text-rose-800">
                  "AIT's platform has made our development workflow so much more efficient. The seamless collaboration features and the robust infrastructure have been a game-changer for our team."
                </p>
              </Card>
              <Card className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition duration-300">
                <div className="flex items-start">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Michael Johnson</h3>
                    <p className="text-rose-800">Marketing Manager, AIT Inc.</p>
                  </div>
                </div>
                <p className="mt-4 text-rose-800">
                  "AIT's platform has been instrumental in helping us streamline our marketing efforts. The advanced analytics have provided us with valuable insights to make data-driven decisions."
                </p>
              </Card>
              <Card className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition duration-300">
                <div className="flex items-start">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>EL</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Emily Larson</h3>
                    <p className="text-rose-800">Content Creator, AIT Inc.</p>
                  </div>
                </div>
                <p className="mt-4 text-rose-800">
                  "The AI tools on AIT's platform have revolutionized how I create content. From generating text to creating visually stunning images, it's all possible with ease."
                </p>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="py-20 md:py-32 bg-gradient-to-r from-rose-50 to-rose-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Join the AIT Community</h2>
              <p className="mt-4 text-rose-800 md:text-lg">
                Join thousands of creators and businesses using AIT to power their content creation
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link href="/dashboard">
                  <Button variant="default" size="lg">
                    Get Started Now
                  </Button>
                </Link>
                <Link href="#pricing">
                  <Button variant="outline" size="lg">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
