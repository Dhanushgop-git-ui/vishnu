import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Video, Image, FolderOpen, DivideIcon as LucideIcon } from "lucide-react"

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ')
}

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface BlurredStaggerProps {
  text: string
  className?: string
}

const BlurredStagger = ({ text, className }: BlurredStaggerProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
    },
  }

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className={cn("text-xl font-bold", className)}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  )
}

interface PortfolioNavBarProps {
  className?: string
}

const navItems: NavItem[] = [
  { name: "Videos", url: "#videos", icon: Video },
  { name: "Collections", url: "#collections", icon: FolderOpen },
  { name: "Photos", url: "#photos", icon: Image },
]

export function PortfolioNavBar({ className }: PortfolioNavBarProps) {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("Videos")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-[300vh] bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(239,68,68,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Navigation Bar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-b border-red-500/20",
          className
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <BlurredStagger 
                text="Vishnu Adari" 
                className="text-2xl font-bold text-white"
              />
            </div>

            <div className="hidden md:block">
              <div className="flex items-center gap-1 bg-black/60 border border-red-500/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeTab === item.name

                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      onClick={(e) => {
                        e.preventDefault()
                        setActiveTab(item.name)
                      }}
                      className={cn(
                        "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                        "text-gray-300 hover:text-white",
                        isActive && "text-white"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <Icon size={16} strokeWidth={2} />
                        {item.name}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 w-full bg-red-500/20 rounded-full -z-10"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        >
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-red-500 rounded-t-full">
                            <div className="absolute w-12 h-6 bg-red-500/20 rounded-full blur-md -top-2 -left-2" />
                            <div className="absolute w-8 h-6 bg-red-500/20 rounded-full blur-md -top-1" />
                            <div className="absolute w-4 h-4 bg-red-500/20 rounded-full blur-sm top-0 left-2" />
                          </div>
                        </motion.div>
                      )}
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="md:hidden">
              <div className="flex items-center gap-1 bg-black/60 border border-red-500/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeTab === item.name

                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      onClick={(e) => {
                        e.preventDefault()
                        setActiveTab(item.name)
                      }}
                      className={cn(
                        "relative cursor-pointer p-2 rounded-full transition-colors",
                        "text-gray-300 hover:text-white",
                        isActive && "text-white"
                      )}
                    >
                      <Icon size={18} strokeWidth={2.5} />
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileTab"
                          className="absolute inset-0 w-full bg-red-500/20 rounded-full -z-10"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Animated Name */}
          <div className="mb-8">
            <div className="relative mb-8">
              <h1 className="relative text-6xl sm:text-8xl md:text-9xl font-black mb-4 tracking-tighter leading-none z-10">
              {"Adari Vishnu".split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  initial={{ y: 120, opacity: 0, scale: 0.3, rotateX: -90 }}
                  animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
                  transition={{
                    delay: letterIndex * 0.12,
                    type: "spring",
                    stiffness: 120,
                    damping: 25,
                    duration: 1.2
                  }}
                  className="inline-block text-transparent bg-clip-text 
                                      bg-gradient-to-br from-white via-gray-200 to-gray-400
                                      hover:from-red-400 hover:to-red-600
                                      transition-all duration-700 cursor-default"
                  whileHover={{ scale: 1.08, y: -4, rotateY: 5 }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              </h1>
            </div>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto"
            >
              Creative Portfolio & Visual Storytelling
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8, type: "spring", stiffness: 100 }}
            className="inline-block group"
          >
            <div className="relative p-[2px] bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-2xl group-hover:from-red-600 group-hover:via-red-700 group-hover:to-red-800 transition-all duration-300">
              <button
                className="relative rounded-[14px] px-12 py-6 text-lg font-semibold
                            bg-black hover:bg-gray-900
                            text-white transition-all duration-300
                            group-hover:-translate-y-1 group-hover:shadow-2xl
                            border-0 backdrop-blur-sm"
              >
                <motion.span 
                  className="flex items-center gap-3"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="relative">
                    Explore Work
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                    />
                  </span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-xl"
                  >
                    →
                  </motion.span>
                </motion.span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll-triggered Content Sections */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-32 space-y-32">
        {/* Section 1 */}
        <div className="text-center max-w-4xl mx-auto">
          <BlurredStagger
            text="Crafting Visual Stories"
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Every frame tells a story. Through the lens of creativity and technical precision, 
            I transform moments into lasting memories and ideas into visual masterpieces.
          </motion.p>
        </div>

        {/* Section 2 */}
        <div className="text-center max-w-4xl mx-auto">
          <BlurredStagger
            text="Beyond the Ordinary"
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Innovation meets artistry in every project. From concept to completion, 
            each piece is meticulously crafted to exceed expectations and inspire audiences.
          </motion.p>
        </div>

        {/* Section 3 */}
        <div className="text-center max-w-4xl mx-auto">
          <BlurredStagger
            text="Let's Create Together"
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 leading-relaxed mb-12"
          >
            Ready to bring your vision to life? Let's collaborate and create something extraordinary 
            that resonates with your audience and stands the test of time.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 100 }}
            className="inline-block group"
          >
            <div className="relative p-[2px] bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-2xl group-hover:from-red-600 group-hover:via-red-700 group-hover:to-red-800 transition-all duration-300">
              <button
                className="relative rounded-[14px] px-12 py-6 text-lg font-semibold
                            bg-black hover:bg-gray-900
                            text-white transition-all duration-300
                            group-hover:-translate-y-1 group-hover:shadow-2xl
                            border-0 backdrop-blur-sm"
              >
                <motion.span 
                  className="flex items-center gap-3"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Get In Touch
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-xl"
                  >
                    →
                  </motion.span>
                </motion.span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500/20 rounded-full blur-sm"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-3/4 right-1/3 w-6 h-6 bg-red-500/20 rounded-full blur-sm"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          scale: [1, 0.8, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  )
}

export default function PortfolioNavBarDemo() {
  return <PortfolioNavBar />
}