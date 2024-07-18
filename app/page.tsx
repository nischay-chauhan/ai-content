import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BoltIcon, CombineIcon, InfoIcon, MountainIcon, ScalingIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="bg-gradient-to-r from-rose-500 to-rose-700 py-20 md:py-32 h-screen">
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
                  <Button variant="secondary">Get Started</Button>
                  <Button variant="outline">Learn More</Button>
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
        <section className="py-20 md:py-32">
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
                    <ScalingIcon className="h-8 w-8 text-rose-700" />
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
        <section className="bg-rose-100 py-20 md:py-32">
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
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Join the AIT Community</h2>
              <p className="mt-4 text-rose-800 md:text-lg">
                Join the AIT community today to unlock the power of our platform and start generating your dream content.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
