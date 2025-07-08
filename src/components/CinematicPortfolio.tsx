The file appears to be missing several closing brackets. Here's the fixed version with all required closing brackets added:

[Previous content remains exactly the same until the end, then add:]

                onClick={() => setIsPlaying(!isPlaying)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMuted(!isMuted)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </Button>
            </motion.div>
          </header>

          <main className="flex-1 flex flex-col items-center justify-center px-8 py-16 md:py-32">
            {/* Video Section */}
            <ScrollAnimation direction="up" delay={0.2} className="w-full max-w-6xl mb-16">
              <motion.div
                className="relative aspect-video rounded-2xl overflow-hidden border border-red-500/20 shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >