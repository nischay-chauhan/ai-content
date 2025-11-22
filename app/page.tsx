"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BoltIcon,
  Code,
  CombineIcon,
  Hash,
  InfoIcon,
  PenTool,
  Instagram,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-rose-50"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
            <div className="absolute top-20 right-20 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="space-y-8 text-center lg:text-left"
              >
                <motion.div variants={itemVariants}>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-600 text-sm font-medium mb-4">
                    <Sparkles className="w-4 h-4 mr-2" />
                    AI-Powered Content Creation
                  </span>
                  <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
                    Unlock the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-rose-600">
                      Power of AI
                    </span>
                  </h1>
                </motion.div>
                <motion.p
                  variants={itemVariants}
                  className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
                >
                  Generate code, stunning images, and engaging text effortlessly.
                  Unleash your creativity with our next-generation AI platform.
                </motion.p>
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link href="/dashboard">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-rose-600 hover:from-violet-700 hover:to-rose-700 text-white shadow-lg hover:shadow-xl transition-all rounded-full px-8 h-12 text-lg"
                    >
                      Get Started Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto border-2 border-gray-200 hover:border-violet-600 hover:text-violet-600 rounded-full px-8 h-12 text-lg transition-all"
                    >
                      View Demo
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/hero.svg"
                    width={600}
                    height={400}
                    alt="AI Platform Interface"
                    className="rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-rose-600 rounded-2xl transform -rotate-2 opacity-20 blur-lg -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold tracking-tight text-gray-900 mb-4"
              >
                Unleash Your Creativity
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                Comprehensive tools to supercharge your workflow
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: BoltIcon,
                  title: "AI Code",
                  desc: "Generate efficient code snippets in seconds.",
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                },
                {
                  icon: CombineIcon,
                  title: "AI Images",
                  desc: "Create stunning visuals from text descriptions.",
                  color: "text-purple-600",
                  bg: "bg-purple-50",
                },
                {
                  icon: Code,
                  title: "AI Writing",
                  desc: "Craft compelling content with smart assistants.",
                  color: "text-rose-600",
                  bg: "bg-rose-50",
                },
                {
                  icon: InfoIcon,
                  title: "Analytics",
                  desc: "Track performance with detailed insights.",
                  color: "text-green-600",
                  bg: "bg-green-50",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Our Products
              </h2>
              <p className="text-xl text-gray-600">
                Explore our comprehensive suite of AI tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Code Assistant",
                  desc: "Generate, debug, and explain code.",
                  icon: Code,
                  category: "Development",
                },
                {
                  name: "Content Writer",
                  desc: "Blog posts, emails, and ad copy.",
                  icon: PenTool,
                  category: "Marketing",
                },
                {
                  name: "Social Manager",
                  desc: "Posts, hashtags, and scheduling.",
                  icon: Instagram,
                  category: "Social",
                },
                {
                  name: "SEO Optimizer",
                  desc: "Rank higher with AI insights.",
                  icon: Hash,
                  category: "Growth",
                },
              ].map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-violet-50 rounded-xl">
                      <product.icon className="w-6 h-6 text-violet-600" />
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold text-violet-600 bg-violet-50 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Simple Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Start for free, upgrade as you grow
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "₹499",
                  features: [
                    "100 AI Credits",
                    "Basic Templates",
                    "Community Support",
                  ],
                },
                {
                  name: "Pro",
                  price: "₹1,999",
                  popular: true,
                  features: [
                    "500 AI Credits",
                    "Advanced Analytics",
                    "Priority Support",
                    "Custom Templates",
                  ],
                },
                {
                  name: "Enterprise",
                  price: "₹4,999",
                  features: [
                    "Unlimited Credits",
                    "Dedicated Manager",
                    "API Access",
                    "SSO Integration",
                  ],
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-8 rounded-3xl border-2 ${plan.popular
                    ? "border-violet-600 bg-white shadow-2xl scale-105 z-10"
                    : "border-gray-100 bg-gray-50"
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-violet-600 to-rose-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {plan.name}
                    </h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-extrabold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="ml-2 text-gray-600">/month</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/dashboard">
                    <Button
                      className={`w-full h-12 rounded-xl text-lg font-medium transition-all ${plan.popular
                        ? "bg-violet-600 hover:bg-violet-700 text-white shadow-lg hover:shadow-xl"
                        : "bg-white border-2 border-gray-200 hover:border-violet-600 hover:text-violet-600 text-gray-900"
                        }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-16">
              Trusted by Creators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah J.",
                  role: "Content Creator",
                  quote:
                    "This tool has completely transformed my workflow. I can create content 10x faster!",
                },
                {
                  name: "Mike T.",
                  role: "Developer",
                  quote:
                    "The code generation is surprisingly accurate. It's like having a senior dev pair programming with me.",
                },
                {
                  name: "Emily R.",
                  role: "Marketing Lead",
                  quote:
                    "Our engagement rates have skyrocketed since we started using the AI image generator.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <Avatar className="h-12 w-12 border-2 border-violet-100">
                      <AvatarImage src={`/placeholder-user-${index}.jpg`} />
                      <AvatarFallback className="bg-violet-50 text-violet-600">
                        {testimonial.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-900/50 to-rose-900/50" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of creators who are already using our platform to build the future.
            </p>
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-10 h-14 text-lg font-bold shadow-2xl hover:scale-105 transition-all"
              >
                Start Creating Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
